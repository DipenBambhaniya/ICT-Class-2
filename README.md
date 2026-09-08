# GPSC ICT Class-2 — Exam Prep Site

A static study site for the GPSC ICT Class-2 syllabus: concept notes with diagrams,
worked examples and solved MCQs, plus one topic-filterable practice quiz.

**Units live so far:** 1 — Programming &amp; Data Structures (10 topics), 2 — Discrete
Mathematics (6 topics), 3 — Algorithms (13 topics), 4 — Databases (8 topics),
5 — Hardware &amp; Operating Systems (9 topics), 6 — Computer Networks (10 topics),
7 — Analytics (9 topics), 8 — NoSQL Databases (4 topics), 9 — Data Centre
(4 topics), 10 — Mobile Application (4 topics), 11 — Software Engineering
(4 topics), 12 — Cyber Security (4 topics), 13 — E-Governance (4 topics).
**3998 quiz questions.**

## Live site

**https://dipenbambhaniya.github.io/ICT-Class-2/**

- Unit 1 hub: <https://dipenbambhaniya.github.io/ICT-Class-2/pds.html>
- Unit 2 hub: <https://dipenbambhaniya.github.io/ICT-Class-2/dm.html>
- Unit 3 hub: <https://dipenbambhaniya.github.io/ICT-Class-2/algo.html>
- Unit 4 hub: <https://dipenbambhaniya.github.io/ICT-Class-2/dbms.html>
- Unit 5 hub: <https://dipenbambhaniya.github.io/ICT-Class-2/os.html>
- Unit 6 hub: <https://dipenbambhaniya.github.io/ICT-Class-2/cn.html>
- Unit 7 hub: <https://dipenbambhaniya.github.io/ICT-Class-2/analytics.html>
- Unit 8 topics start at <https://dipenbambhaniya.github.io/ICT-Class-2/topics/sql-vs-nosql.html>
- Unit 9 hub: <https://dipenbambhaniya.github.io/ICT-Class-2/dc.html>
- Unit 10 hub: <https://dipenbambhaniya.github.io/ICT-Class-2/mobile.html>
- Unit 11 hub: <https://dipenbambhaniya.github.io/ICT-Class-2/se.html>
- Unit 12 hub: <https://dipenbambhaniya.github.io/ICT-Class-2/cyber.html>
- Unit 13 hub: <https://dipenbambhaniya.github.io/ICT-Class-2/egov.html>
- Practice quiz: <https://dipenbambhaniya.github.io/ICT-Class-2/quiz.html>

## Contents

- `index.html` — home page / syllabus overview
- `pds.html` — Unit 1 (Programming & Data Structures) hub → `topics/pds-*.html`
  (Programming in C, Recursion, Arrays, Stacks, Queues, Linked Lists, Trees,
  Binary Search Trees, Binary Heaps, Graphs)
- `dbms.html` — Unit 4 (Databases) hub → `topics/` pages for integrity constraints,
  normal forms, file organization, indexes, B/B+ trees, transactions, schedules,
  concurrency control
- `cn.html` — Unit 6 (Computer Networks) hub → `topics/cn-*.html` (layering, LAN/
  Ethernet, flow &amp; error control, switching, IPv4/IPv6 &amp; routers, routing
  algorithms, TCP/UDP &amp; congestion control, application protocols, Wi-Fi,
  network security)
- `analytics.html` — Unit 7 (Analytics) hub → `topics/an-*.html` (descriptive &amp;
  predictive analytics, OLAP, OLTP vs OLAP, data cubes, data warehousing, schemas,
  data mining, in-database analytics, advanced SQL)
- `topics/sql-vs-nosql.html`, `data-representation.html`, `cap-theorem.html`,
  `properties.html` — Unit 8 (NoSQL Databases)
- `dc.html` — Unit 9 (Data Centre) hub → `topics/dc-*.html` (Data Storage &amp;
  Availability, Cloud Infrastructure &amp; Virtualization, Public/Private/Hybrid
  Cloud, Scalability &amp; Reliability)
- `mobile.html` — Unit 10 (Mobile Application) hub → `topics/mobile-*.html`
  (Platforms &amp; Devices, Cellular Technologies, App Development, UI Design)
- `se.html` — Unit 11 (Software Engineering) hub → `topics/se-*.html`
  (Principles &amp; SDLC, Agile Development, Testing &amp; Project Management, SCADA
  &amp; Software Quality)
- `cyber.html` — Unit 12 (Cyber Security) hub → `topics/cy-*.html` (Threats/
  Attacks &amp; Ethical Hacking, Data Security/Privacy/Protection, IT Security &amp;
  Risk Management, Cyber Laws &amp; Governance)
- `egov.html` — Unit 13 (E-Governance) hub → `topics/eg-*.html` (E-Governance
  Models &amp; Digital India, Enterprise Systems/EDI/ERP/IT Governance, Smart
  Villages/Cities &amp; Empowerment, Digital Services/Payments &amp; Ethics)
- `quiz.html` — 3998-question interactive MCQ practice test (filter by topic, instant
  feedback, score breakdown, review list). Every topic page also has inline MCQs
  with reveal-to-check explanations.
- `assets/js/questions.js` — NoSQL + Databases question bank
- `assets/js/q-pds.js` — Programming & Data Structures question bank (50 per topic)
- `assets/js/q-dm.js`, `q-algo.js`, `q-os.js` — Discrete Mathematics, Algorithms,
  and Hardware & Operating Systems question banks (50 per topic)
- `assets/js/q-cn.js`, `q-analytics.js` — Computer Networks and Analytics question
  banks (50 per topic)
- `assets/js/q-dc.js`, `q-mobile.js`, `q-se.js` — Data Centre, Mobile Application,
  and Software Engineering question banks (50 per topic)
- `assets/js/q-cyber.js`, `q-egov.js` — Cyber Security and E-Governance question
  banks (50 per topic)
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

`topic` must match one of the keys in `TOPIC_META` (see `assets/js/questions.js` and the
per-unit `q-*.js` files), e.g. `sql-vs-nosql`, `data-representation`, `cap-theorem`,
`properties`, `integrity-constraints`, `normal-forms`, `file-organization`, `indexes`,
`b-trees`, `transactions`, `schedules`, `concurrency-control`, `pds-c`, `pds-recursion`,
`pds-arrays`, `pds-stacks`, `pds-queues`, `pds-linked-lists`, `pds-trees`, `pds-bst`,
`pds-heaps`, `pds-graphs`, the Unit 9 Data Centre topics (`dc-storage`,
`dc-cloud-infra`, `dc-cloud-models`, `dc-scalability`), the Unit 10 Mobile
Application topics (`mobile-platforms`, `mobile-cellular`, `mobile-appdev`,
`mobile-ui`), the Unit 11 Software Engineering topics (`se-principles`,
`se-agile`, `se-testing-pm`, `se-quality-scada`), the Unit 12 Cyber
Security topics (`cy-threats`, `cy-data-protection`, `cy-risk-mgmt`,
`cy-laws`), and the Unit 13 E-Governance topics (`eg-models`,
`eg-enterprise`, `eg-smart`, `eg-services`).
