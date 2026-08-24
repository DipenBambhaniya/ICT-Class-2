/* ==========================================================================
   Quiz engine — plain JS, no dependencies
   ========================================================================== */

(function () {
  "use strict";

  const el = (sel) => document.querySelector(sel);
  const params = new URLSearchParams(location.search);

  const state = {
    pool: [],          // full ordered list for this session
    idx: 0,            // current question index
    answers: {},        // qId -> { picked, correct }
    finished: false,
    topicFilter: "all",
    size: 20,
  };

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildPool(topic, size) {
    let source = QUESTIONS;
    if (topic !== "all") source = QUESTIONS.filter((q) => q.topic === topic);
    const shuffled = shuffle(source);
    const n = size === "all" ? shuffled.length : Math.min(Number(size), shuffled.length);
    return shuffled.slice(0, n);
  }

  function startQuiz(topic, size) {
    state.topicFilter = topic;
    state.size = size;
    state.pool = buildPool(topic, size);
    state.idx = 0;
    state.answers = {};
    state.finished = false;
    el("#quiz-start").style.display = "none";
    el("#quiz-body").style.display = "block";
    el("#quiz-result").style.display = "none";
    renderQuestion();
  }

  function currentQuestion() {
    return state.pool[state.idx];
  }

  function renderQuestion() {
    const q = currentQuestion();
    const total = state.pool.length;
    const answered = Object.keys(state.answers).length;

    el("#quiz-meta-left").textContent = `Question ${state.idx + 1} of ${total}`;
    el("#quiz-meta-right").textContent = `${TOPIC_META[q.topic].label}`;
    el(".progress-bar .fill").style.width = `${((state.idx) / total) * 100}%`;

    let score = 0;
    Object.values(state.answers).forEach((a) => { if (a.correct) score++; });
    el("#running-score").textContent = `Score: ${score}/${answered}`;

    const card = el("#question-card");
    const existing = state.answers[q.id];

    card.innerHTML = `
      <span class="q-tag" style="color:${TOPIC_META[q.topic].color}">${TOPIC_META[q.topic].label}</span>
      <h3>${escapeHtml(q.q)}</h3>
      <div class="options" id="options"></div>
      <div class="explanation" id="explanation"><strong>Explanation:</strong> <span id="exp-text"></span></div>
    `;
    el("#exp-text").textContent = q.exp;

    const optionsEl = el("#options");
    const letters = ["A", "B", "C", "D"];
    q.options.forEach((opt, i) => {
      const div = document.createElement("div");
      div.className = "option";
      div.dataset.idx = i;
      div.innerHTML = `<span class="key">${letters[i]}</span><span>${escapeHtml(opt)}</span>`;
      if (existing) {
        div.classList.add("disabled");
        if (i === q.answer) div.classList.add("correct");
        if (i === existing.picked && i !== q.answer) div.classList.add("incorrect");
        if (i === existing.picked) div.classList.add("selected");
      } else {
        div.addEventListener("click", () => selectOption(i));
      }
      optionsEl.appendChild(div);
    });

    if (existing) {
      el("#explanation").classList.add("show");
    }

    el("#btn-prev").disabled = state.idx === 0;
    el("#btn-next").textContent = state.idx === total - 1 ? "Finish" : "Next →";
    el("#btn-next").disabled = !existing;
  }

  function selectOption(i) {
    const q = currentQuestion();
    if (state.answers[q.id]) return;
    const correct = i === q.answer;
    state.answers[q.id] = { picked: i, correct };
    renderQuestion();
  }

  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function nextQuestion() {
    if (state.idx < state.pool.length - 1) {
      state.idx++;
      renderQuestion();
    } else {
      finishQuiz();
    }
  }

  function prevQuestion() {
    if (state.idx > 0) {
      state.idx--;
      renderQuestion();
    }
  }

  function finishQuiz() {
    state.finished = true;
    el("#quiz-body").style.display = "none";
    el("#quiz-result").style.display = "block";

    const total = state.pool.length;
    let score = 0;
    const byTopic = {};

    state.pool.forEach((q) => {
      const a = state.answers[q.id];
      if (!byTopic[q.topic]) byTopic[q.topic] = { correct: 0, total: 0 };
      byTopic[q.topic].total++;
      if (a && a.correct) { score++; byTopic[q.topic].correct++; }
    });

    const pct = Math.round((score / total) * 100);
    el("#result-score").textContent = `${score} / ${total}`;
    el("#result-pct").textContent = `${pct}%`;

    let verdict = "Keep practicing — review the topics below.";
    if (pct >= 85) verdict = "Excellent! Exam-ready performance.";
    else if (pct >= 70) verdict = "Good work — a bit more revision will get you there.";
    else if (pct >= 50) verdict = "Fair — revisit the weak topics below.";

    el("#result-verdict").textContent = verdict;

    const breakdown = el("#result-breakdown");
    breakdown.innerHTML = "";
    Object.keys(TOPIC_META).forEach((topic) => {
      const stat = byTopic[topic];
      if (!stat) return;
      const p = Math.round((stat.correct / stat.total) * 100);
      const row = document.createElement("div");
      row.className = "row";
      row.innerHTML = `
        <div class="pct" style="color:${TOPIC_META[topic].color}">${p}%</div>
        <div class="label">${TOPIC_META[topic].label} (${stat.correct}/${stat.total})</div>
        <div class="bar"><span style="width:${p}%;background:${TOPIC_META[topic].color}"></span></div>
      `;
      breakdown.appendChild(row);
    });

    const reviewList = el("#review-list");
    reviewList.innerHTML = "";
    state.pool.forEach((q, i) => {
      const a = state.answers[q.id];
      const wrong = !a || !a.correct;
      const item = document.createElement("div");
      item.className = "review-item " + (wrong ? "wrong" : "right");
      const pickedText = a ? q.options[a.picked] : "(not answered)";
      item.innerHTML = `
        <div class="q">${i + 1}. ${escapeHtml(q.q)}</div>
        <div class="a">Your answer: <b>${escapeHtml(pickedText)}</b>${wrong ? ` &nbsp;|&nbsp; Correct: <b>${escapeHtml(q.options[q.answer])}</b>` : ""}</div>
        <div class="a">${escapeHtml(q.exp)}</div>
      `;
      reviewList.appendChild(item);
    });
  }

  function init() {
    el("#quiz-start").style.display = "block";

    document.querySelectorAll(".chip-toggle button").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".chip-toggle button").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });

    el("#btn-start").addEventListener("click", () => {
      const topic = document.querySelector(".chip-toggle button.active").dataset.topic;
      const size = el("#quiz-size").value;
      startQuiz(topic, size);
    });

    el("#btn-next").addEventListener("click", nextQuestion);
    el("#btn-prev").addEventListener("click", prevQuestion);
    el("#btn-restart").addEventListener("click", () => {
      el("#quiz-result").style.display = "none";
      el("#quiz-start").style.display = "block";
    });

    // deep-link e.g. quiz.html?topic=cap-theorem
    const topicParam = params.get("topic");
    if (topicParam && TOPIC_META[topicParam]) {
      document.querySelectorAll(".chip-toggle button").forEach((b) => {
        b.classList.toggle("active", b.dataset.topic === topicParam);
      });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
