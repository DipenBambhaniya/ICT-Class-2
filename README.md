# NoSQL Databases — Exam Prep Site

A static study site covering the 4 core NoSQL Database concepts, plus a 100-question
interactive practice quiz calibrated to recent GPSC ICT/IT exam papers.

## Contents

- `index.html` — home page, topic overview
- `topics/sql-vs-nosql.html` — Differences between SQL and NoSQL
- `topics/data-representation.html` — NoSQL data types / representation
- `topics/cap-theorem.html` — CAP theorem
- `topics/properties.html` — Properties of NoSQL databases
- `quiz.html` — 100-question interactive MCQ practice test (filter by topic, instant
  feedback, score breakdown, review list)
- `assets/js/questions.js` — the question bank (edit here to add/change questions)
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

`topic` must be one of: `sql-vs-nosql`, `data-representation`, `cap-theorem`, `properties`.
