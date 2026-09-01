# GPSC ICT Class-2 — Exam Prep Site

A static study site for the GPSC ICT Class-2 syllabus: concept notes with diagrams,
worked examples and solved MCQs, plus one topic-filterable practice quiz.

**Units live so far:** 1 — Programming &amp; Data Structures (10 topics), 4 — Databases
(8 topics), 8 — NoSQL Databases (4 topics). **648 quiz questions.**

## Live site

**https://dipenbambhaniya.github.io/ICT-Class-2/**

- Unit 1 hub: <https://dipenbambhaniya.github.io/ICT-Class-2/pds.html>
- Unit 4 hub: <https://dipenbambhaniya.github.io/ICT-Class-2/dbms.html>
- Unit 8 topics start at <https://dipenbambhaniya.github.io/ICT-Class-2/topics/sql-vs-nosql.html>
- Practice quiz: <https://dipenbambhaniya.github.io/ICT-Class-2/quiz.html>

## Contents

- `index.html` — home page / syllabus overview
- `pds.html` — Unit 1 (Programming & Data Structures) hub → `topics/pds-*.html`
  (Programming in C, Recursion, Arrays, Stacks, Queues, Linked Lists, Trees,
  Binary Search Trees, Binary Heaps, Graphs)
- `dbms.html` — Unit 4 (Databases) hub → `topics/` pages for integrity constraints,
  normal forms, file organization, indexes, B/B+ trees, transactions, schedules,
  concurrency control
- `topics/sql-vs-nosql.html`, `data-representation.html`, `cap-theorem.html`,
  `properties.html` — Unit 8 (NoSQL Databases)
- `quiz.html` — 648-question interactive MCQ practice test (filter by topic, instant
  feedback, score breakdown, review list). Every topic page also has inline MCQs
  with reveal-to-check explanations.
- `assets/js/questions.js` — NoSQL + Databases question bank
- `assets/js/q-pds.js` — Programming & Data Structures question bank (50 per topic)
- `assets/js/nav.js` — left sidebar navigation, grouped by syllabus unit
- `assets/css/style.css` — shared design system (light/dark aware)

No build step — everything is plain HTML/CSS/JS, so it works directly on GitHub Pages
or opened locally by double-clicking `index.html`.

## Viewing locally

Just open `index.html` in a browser, or run a tiny local server from this folder:

```bash
npx serve .
```

## Publishing on GitHub Pages (private repo)

GitHub Pages for a **private** repository requires GitHub Pro, Team, or Enterprise —
on the free plan, Pages sites are only publishable from **public** repos (the site
itself can still be set to "only visible to people with access to this repository"
on paid plans).

Steps once you have a plan that supports it:

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch".
4. Choose the `main` branch and `/ (root)` folder, then Save.
5. GitHub will publish at `https://<username>.github.io/<repo-name>/`.

If you'd rather keep the repo private on the free plan, alternatives:
- Keep the repo private and just open the HTML files locally / via `npx serve`.
- Use a separate free static host (e.g. Netlify, Vercel) with password protection.
- Temporarily make the repo public only for the Pages deployment.

## Updating the question bank

Each question in `assets/js/questions.js` follows this shape:

```js
{ id: "sql-01", topic: "sql-vs-nosql",
  q: "Question text?",
  options: ["A", "B", "C", "D"],
  answer: 1,          // 0-based index of the correct option
  exp: "Short explanation of why the answer is correct." }
```

`topic` must be one of: `sql-vs-nosql`, `data-representation`, `cap-theorem`, `properties`,
`integrity-constraints`, `normal-forms`, `file-organization`, `indexes`, `b-trees`,
`transactions`, `schedules`, `concurrency-control`, `pds-c`, `pds-recursion`,
`pds-arrays`, `pds-stacks`, `pds-queues`, `pds-linked-lists`, `pds-trees`, `pds-bst`,
`pds-heaps`, `pds-graphs`.
