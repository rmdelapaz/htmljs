# Front-End JavaScript — Instructor Kit ("Course-in-a-Box")

A ready-to-teach package that lets another instructor deliver the course
**Front-End JavaScript: Make Your Web Pages Come Alive** without building it from scratch.

**Complete — all six modules are built.** The full course-in-a-box is ready to teach.

| Module | Lessons | Status |
|--------|---------|--------|
| 1 · JavaScript Foundations | L01–L04 | ✅ Built |
| 2 · Control Flow & Functions | L05–L08 | ✅ Built |
| 3 · Working with Data | L09–L12 | ✅ Built |
| 4 · The DOM | L13–L16 | ✅ Built |
| 5 · Building Interactive Pages | L17–L20 | ✅ Built |
| 6 · Capstone & Next Steps | L21–L22 | ✅ Built |

The books carry inline SVG diagrams (the DOM tree, the scope chain, the event loop,
the fetch lifecycle and more). Every lesson has a runnable lab with a starter and a
reference solution, and Module 6 ships the **complete QuickNote capstone app**
(`labs/module-6/l21-quicknote/solution/`) — forms, validation, localStorage, and live
API data in one page, ready to demo.

### Primary documents — the combined books (start here)

These are the **canonical** print/hand-out documents: the whole course in one file each,
with a cover, table of contents, and continuous pagination.

| File | Audience | Contents |
|------|----------|----------|
| `participant-workbook.{html,pdf}` | Student | The complete workbook — all 6 modules as chapters |
| `facilitator-guide.{html,pdf}` | Instructor | The complete teaching manual — all 6 modules |
| `answer-key.{html,pdf}` | Instructor | All 112 quiz items + solutions, all modules (confidential) |

The editable per-module docs live in `source/module-N/` (also usable for teaching a
single module standalone). **If you edit a module's doc, run `python3 build-combined.py`
to regenerate the three books, then re-render their PDFs.** Per-module PDFs are not
shipped — the combined PDFs replace them.

### Kit-wide documents (at this folder's root)

| File | Audience | Purpose |
|------|----------|---------|
| `setup-guide.html` | Student | Pre-course "before you begin" one-pager (VS Code + Live Server check, opening DevTools, a "hello console" test) — send before Day 1. Ends with a network note for the host. |
| `final-assessment.html` | Instructor | End-of-course capstone: a choice of 3 app briefs + grading rubric + scoring sheet |
| `sell-sheet.html` | Prospective instructors | Marketing one-pager: what's inside, who it's for, pricing tiers |
| `README.md` · `LICENSE.md` | — | This overview and the tiered license template |

(The 5-day `syllabus` in three formats lives in the course root, one level up.)
PDFs of the three documents sit beside them.

**Classroom network note:** Lesson 20 calls the GitHub API, which allows about
**60 unauthenticated requests per hour per public IP**. A class behind one network
shares that budget. The L20 lab solution includes a mock-data fallback; see the
setup guide's host note and the Module 5 facilitator guide.

**Still to do:** the `LICENSE.md` is a plain-language **template** — have it reviewed by
a lawyer before commercial distribution. Pricing in the sell sheet is a suggested
anchor, adjust to your market.

---

## Folder layout

```
instructor-kit/
├─ participant-workbook.{html,pdf}   ← canonical hand-out books (all 6 modules)
├─ facilitator-guide.{html,pdf}
├─ answer-key.{html,pdf}
├─ setup-guide / final-assessment / sell-sheet  (.html + .pdf)
├─ slides/            module-1-javascript-foundations.html … module-6-capstone-next-steps.html
├─ labs/              module-1/ … module-6/  (module-6/l21-quicknote/ is the capstone app)
├─ source/            module-1/ … module-6/  — editable per-module docs (build the books)
├─ kit.css            single shared print-first stylesheet
├─ build-combined.py  regenerate the 3 books from source/
└─ README.md · LICENSE.md
```

Every document is print-ready (a **Print / Save as PDF** button + a tuned `@media print`
layout). Slide decks are single-file and need no server (arrow keys / space to advance).

### How to teach from it
1. Skim the **facilitator guide** for the module and each lesson's timing.
2. Present from the module's deck in **`slides/`** (full-screen the browser).
3. Live-code each concept with the DevTools console open; then send students to the
   matching **lab** in `labs/module-N/`.
4. Students work in the **participant workbook** (printed or on screen).
5. Grade with the **answer key**, and the capstone with **`final-assessment.html`**.

### Editing
The three books at the root are **generated** from `source/module-N/` by
`build-combined.py`. Edit the source doc, run `python3 build-combined.py`, then
re-render the PDFs. Don't hand-edit the combined `.html` — your changes will be
overwritten on the next build.

---

## License

See `LICENSE.md`. Short version: this kit is licensed to a **single instructor or
organization** to teach the course; it is **not** to be resold, and the answer keys
are **not** for student distribution. Tiers (solo / org / white-label) are set at
point of sale.

Front-End JavaScript: Make Your Web Pages Come Alive — instructor kit.
