/* ==========================================================================
   Left sidebar navigation — injected on every page.
   Groups follow the ICT Class-2 syllabus unit numbers.
   ========================================================================== */

(function () {
  "use strict";

  document.documentElement.classList.add("has-sidenav");

  var inTopics = /\/topics\//.test(location.pathname);
  var base = inTopics ? "../" : "";

  var current = location.pathname.split("/").pop() || "index.html";
  var currentFull = (inTopics ? "topics/" : "") + current;

  var MENU = [
    { type: "link", label: "Home", href: "index.html" },
    { type: "link", label: "Practice Quiz", href: "quiz.html" },
    {
      type: "group", label: "1) Programming & Data Structures", href: "pds.html",
      items: [
        ["Overview", "pds.html"],
        ["Programming in C", "topics/pds-c-programming.html"],
        ["Recursion", "topics/pds-recursion.html"],
        ["Arrays", "topics/pds-arrays.html"],
        ["Stacks", "topics/pds-stacks.html"],
        ["Queues", "topics/pds-queues.html"],
        ["Linked Lists", "topics/pds-linked-lists.html"],
        ["Trees", "topics/pds-trees.html"],
        ["Binary Search Trees", "topics/pds-bst.html"],
        ["Binary Heaps", "topics/pds-heaps.html"],
        ["Graphs", "topics/pds-graphs.html"]
      ]
    },
    {
      type: "group", label: "2) Discrete Mathematics", href: "dm.html",
      items: [
        ["Overview", "dm.html"],
        ["Logic (Propositional & FOL)", "topics/dm-logic.html"],
        ["Sets, Relations, Functions", "topics/dm-sets.html"],
        ["Partial Orders & Lattices", "topics/dm-lattices.html"],
        ["Groups", "topics/dm-groups.html"],
        ["Graph Theory", "topics/dm-graphs.html"],
        ["Combinatorics", "topics/dm-combinatorics.html"]
      ]
    },
    {
      type: "group", label: "3) Algorithms", href: "algo.html",
      items: [
        ["Overview", "algo.html"],
        ["Algorithm Analysis", "topics/algo-analysis.html"],
        ["Asymptotic Notation", "topics/algo-asymptotic.html"],
        ["Space & Time Complexity", "topics/algo-complexity.html"],
        ["Worst / Average Analysis", "topics/algo-case-analysis.html"],
        ["Divide & Conquer", "topics/algo-divide-conquer.html"],
        ["Tree & Graph Traversals", "topics/algo-traversals.html"],
        ["Searching", "topics/algo-searching.html"],
        ["Sorting & Hashing", "topics/algo-sorting-hashing.html"],
        ["Greedy Algorithms", "topics/algo-greedy.html"],
        ["Dynamic Programming", "topics/algo-dp.html"],
        ["Graph Search", "topics/algo-graph-search.html"],
        ["Minimum Spanning Trees", "topics/algo-mst.html"],
        ["Shortest Paths", "topics/algo-shortest-paths.html"]
      ]
    },
    {
      type: "group", label: "4) Databases", href: "dbms.html",
      items: [
        ["Overview", "dbms.html"],
        ["Integrity Constraints", "topics/integrity-constraints.html"],
        ["Normal Forms", "topics/normal-forms.html"],
        ["File Organization", "topics/file-organization.html"],
        ["Indexes", "topics/indexes.html"],
        ["B and B+ Trees", "topics/b-trees.html"],
        ["Transaction Processing", "topics/transaction-processing.html"],
        ["Types of Schedules", "topics/schedules.html"],
        ["Concurrency Control", "topics/concurrency-control.html"]
      ]
    },
    {
      type: "group", label: "5) Hardware & Operating Systems", href: "os.html",
      items: [
        ["Overview", "os.html"],
        ["Hardware Basics", "topics/os-hardware.html"],
        ["Processes", "topics/os-processes.html"],
        ["Threads", "topics/os-threads.html"],
        ["Inter-process Communication", "topics/os-ipc.html"],
        ["Concurrency & Synchronization", "topics/os-sync.html"],
        ["Deadlock", "topics/os-deadlock.html"],
        ["CPU Scheduling", "topics/os-scheduling.html"],
        ["Memory & Virtual Memory", "topics/os-memory.html"],
        ["File Systems", "topics/os-filesystems.html"]
      ]
    },
    {
      type: "group", label: "8) NoSQL Databases",
      items: [
        ["SQL vs NoSQL", "topics/sql-vs-nosql.html"],
        ["Data Types & Representation", "topics/data-representation.html"],
        ["CAP Theorem", "topics/cap-theorem.html"],
        ["Properties of NoSQL", "topics/properties.html"]
      ]
    }
  ];

  function link(label, hrefFull) {
    var a = document.createElement("a");
    a.textContent = label;
    a.href = base + hrefFull;
    if (hrefFull === currentFull) a.className = "current";
    return a;
  }

  function build() {
    var aside = document.createElement("aside");
    aside.className = "sidenav";

    var brand = document.createElement("a");
    brand.className = "sn-brand";
    brand.href = base + "index.html";
    brand.innerHTML = '<span class="logo-dot">DB</span> Exam Prep';
    aside.appendChild(brand);

    MENU.forEach(function (entry) {
      if (entry.type === "link") {
        var a = link(entry.label, entry.href);
        a.className = (a.className ? a.className + " " : "") + "sn-top";
        aside.appendChild(a);
        return;
      }
      var groupHasCurrent = entry.items.some(function (it) { return it[1] === currentFull; });
      var d = document.createElement("details");
      d.className = "sn-group";
      d.open = groupHasCurrent || true;
      var s = document.createElement("summary");
      s.className = "sn-head";
      s.textContent = entry.label;
      d.appendChild(s);
      entry.items.forEach(function (it) { d.appendChild(link(it[0], it[1])); });
      aside.appendChild(d);
    });

    var backdrop = document.createElement("div");
    backdrop.className = "sn-backdrop";
    backdrop.addEventListener("click", close);

    document.body.appendChild(aside);
    document.body.appendChild(backdrop);

    var burger = document.createElement("button");
    burger.className = "sn-hamburger";
    burger.setAttribute("aria-label", "Toggle navigation");
    burger.innerHTML = "&#9776;";
    burger.addEventListener("click", function (e) {
      e.stopPropagation();
      document.documentElement.classList.toggle("sidenav-open");
    });
    var navWrap = document.querySelector(".site-header .nav-wrap");
    if (navWrap) navWrap.insertBefore(burger, navWrap.firstChild);
  }

  function close() {
    document.documentElement.classList.remove("sidenav-open");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
