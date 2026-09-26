# Front-End JavaScript Course — Project Status

## Course: Front-End JavaScript: Make Your Web Pages Come Alive
## Location: `\\wsl$\Ubuntu\home\practicalace\projects\htmljs`
## Last Updated: 2026-09-26

---

## What to Do Next
1. **Aligned with htmlcss (2026-09-26)** — full content review + corrections of all 22 lessons, quizzes (4–6 per lesson, 112 total), a lesson-specific 📓 learning journal in every lesson, fixed shared JS (theme toggle was undefined → every page's init crashed), instructor kit (6 modules) + 5-day syllabus, `_redirects` + 404 hiding the kit.
2. Pending decision: a11y/contrast fixes in L15/L16 exercise CSS and the L21 QuickNote source (labels, focus ring, #94a3b8 text) — the kit's lab versions already fix these.
3. Commit + push (GPG-signed, Ray), then confirm on rays-htmljs.netlify.app that /instructor-kit/ returns 404.

## Key Patterns
- Nav logo: `Front-End JS Course`
- Breadcrumb: Home > Module X > Lesson N: Title
- Code language class: `language-javascript` (primary), `language-html` for HTML snippets
- Prev/Next nav at bottom of each lesson
- Each lesson has: objectives card, sticky TOC, sections, exercise with hint/solution, quiz, 📓 journal (before summary), summary, what's next
- Mermaid diagrams for visual concepts
- Prerequisite course: HTML & CSS (projects/htmlcss)

---

## Lesson Progress

### Module 1: JavaScript Foundations (Lessons 1–4) ✅ COMPLETE
- [x] Lesson 01: Welcome to JavaScript — what JS is, how it fits with HTML/CSS, brief history, the browser as a runtime
- [x] Lesson 02: Linking Scripts & the Console — `<script>` tag, DevTools console, console.log()
- [x] Lesson 03: Variables & Data Types — let, const, var, strings, numbers, booleans, null, undefined
- [x] Lesson 04: Operators & Expressions — arithmetic, comparison, logical, type coercion

### Module 2: Control Flow & Functions (Lessons 5–8)
- [x] Lesson 05: Conditionals — if/else, switch, ternary operator, guard clauses, truthy/falsy in conditions
- [x] Lesson 06: Loops — for, while, do...while, for...of, for...in, break/continue, common pitfalls
- [x] Lesson 07: Functions — declarations, expressions, arrow functions, parameters/returns, default values, best practices
- [x] Lesson 08: Scope & Hoisting — global/function/block scope, scope chain, var vs let/const, TDZ, closures intro

### Module 3: Working with Data (Lessons 9–12)
- [x] Lesson 09: Arrays — creating, accessing, push/pop/splice, length
- [x] Lesson 10: Objects — properties, methods, dot vs bracket notation, nesting
- [x] Lesson 11: Array Methods — map, filter, reduce, find, forEach, sort
- [x] Lesson 12: Strings & Template Literals — string methods, interpolation, multiline strings

### Module 4: The DOM (Lessons 13–16)
- [x] Lesson 13: Introduction to the DOM — what it is, the document tree, DevTools Elements panel
- [x] Lesson 14: Selecting & Modifying Elements — querySelector, textContent, classList, style
- [x] Lesson 15: Events & Event Listeners — click, submit, keyboard, event object, event delegation
- [x] Lesson 16: Creating & Removing Elements — createElement, append, remove, innerHTML vs textContent

### Module 5: Building Interactive Pages (Lessons 17–20)
- [x] Lesson 17: Forms & Validation — reading input values, preventDefault, validation patterns, real-time validation, Constraint Validation API
- [x] Lesson 18: Timers & Animation — setTimeout, setInterval, requestAnimationFrame, CSS transitions via JS, debounce/throttle, event loop
- [x] Lesson 19: Local Storage — getItem, setItem, JSON.parse/stringify, persisting state, sessionStorage, storage event, security considerations
- [x] Lesson 20: Working with APIs & Fetch — promises, async/await, fetching JSON, displaying data, error handling, POST requests, CORS

### Module 6: Capstone & Next Steps (Lessons 21–22)
- [x] Lesson 21: Building a Complete Project — QuickNote app: CRUD, localStorage, fetch API, debounced search, form validation, CSS transitions, keyboard shortcuts
- [x] Lesson 22: Next Steps & Best Practices — debugging, code organization, common pitfalls, modern JS features, ecosystem overview, learning path, portfolio tips

## Outstanding Items
- [x] Create index.html, course-config.json, all 22 lessons
- [x] Favicon (shared template favicon, same as htmlcss)
- [x] Browser testing — all lessons + kit swept in headless Chromium (no console errors, all Mermaid renders)
- [x] Verify prev/next navigation links
- [x] Deployed to Netlify (rays-htmljs.netlify.app)
- [x] Prerequisite course URL linked (rays-htmlcss.netlify.app)
- [x] Quizzes in every lesson (112 items) + learning journal (`initJournal()`, localStorage key `htmljsJournal:<page>`)
- [x] Instructor kit: instructor-kit/ (source/module-1..6 → build-combined.py → 3 books + PDFs, slides/, labs/, setup-guide, final-assessment, sell-sheet, README, LICENSE); hidden from live site via _redirects
- [x] 5-day syllabus: syllabus.html, syllabus-print.html, Front-End-JS-Syllabus-5day.pdf
- [ ] L15/L16/L21 exercise a11y + contrast (see What to Do Next)

## Notes
- Lesson files use **CRLF** line endings (L05–L22 have no final newline) — preserve them when editing (Python: `open(f, newline='')`).
- Kit books are generated: edit `instructor-kit/source/module-N/*.html`, run `python3 build-combined.py`, then re-render PDFs with headless chromium `--print-to-pdf --no-pdf-header-footer`.
