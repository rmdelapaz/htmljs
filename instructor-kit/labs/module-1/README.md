# Module 1 Labs — JavaScript Foundations

L01 is a DevTools Console exploration (no files to write). From L02 on, the labs build
**one cumulative project**: the `js-practice` folder students create in L02 and keep
adding to in L03 and L04. Each lesson folder has a `starter/` (what the student's
`js-practice` folder should look like at the start of the lab) and a `solution/`
(the instructor checkpoint at the end of it).

```
l01-welcome-to-javascript/
  README.md            guided console worksheet + what students should see
  starter/index.html   "Explore Me" — a JavaScript-free page to practice on
  solution/            the worksheet's three console statements saved as app.js
l02-linking-scripts/
  starter/             index.html (script tag still a TODO) + app.js (TODO comments)
  solution/            index.html + app.js — console methods demo
l03-variables-data-types/
  starter/             L02 checkpoint + the lesson's user-profile TODO block
  solution/            app.js adds the user-profile variables
l04-operators-expressions/
  starter/             L03 checkpoint + the lesson's tip-calculator TODO block
  solution/            app.js adds the tip calculator (+ isExpensive bonus)
```

Each solution `app.js` is cumulative: it contains everything from the previous
checkpoint plus that lesson's additions, under `// ── L02 ──` … `// ── L04 ──` section
markers. The code in each section is the lesson's own exercise solution. Students may
instead clear out the old section each time; either is fine, as long as they never
declare the same variable name twice in one file (that's a `SyntaxError` and *nothing*
in the file runs).

**Expected console output** (open DevTools, `F12` → Console):

- **L02** — a log, a yellow warning, a red `This is an error (not a real one!)`, an info
  line, `5 + 3 = 8`, `10 * 4 = 40`, and a three-row table (HTML, CSS, JavaScript).
  The red line is the lesson's deliberate `console.error()` demo, not a bug. A *real*
  error says `Uncaught …` and names a file and line number.
- **L03** — seven `name: value (type)` lines (`nickname: null (object)`), the greeting
  `Hello, Ray de la Paz! You are 30 years old.`, then the "After updates" block ending
  `Balance: $120.00`.
- **L04** — `Bill: $85.50`, `Tip (20%): $17.10`, `Total: $102.60`, `Per person: $34.20`,
  `Expensive? true`.

**Instructor add-on — `console-mirror.js`.** Every `solution/` loads a small helper
before `app.js` that copies console output into a panel on the page, so the room can
see results on the projector. Students don't write it and don't need it (it uses DOM
skills from Module 4); their own `index.html` is just the lesson's page with
`<script src="app.js"></script>` before `</body>`. The helper writes with `textContent`
only.

Serve with Live Server (or `python3 -m http.server` from this folder) and open each
`solution/index.html`. Do not hand solutions to students before the lab.
