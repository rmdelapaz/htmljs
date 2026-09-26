# Module 2 Labs — Control Flow & Functions

Four small, self-contained console labs, one per lesson (L05–L08). Each lab is a
single page: the script runs the lesson's exercise and prints every result **both**
to the DevTools Console and onto the page, so students see output without opening
DevTools. Open a lab's `starter/` folder with Live Server; each `solution/` folder
is the finished instructor reference.

```
l05-conditionals/     "Grade Calculator"                 if/else if, switch, ternary, guard for invalid scores
  starter/            index.html · script.js (TODOs) · style.css
  solution/           index.html · script.js · style.css
l06-loops/            "Star Rating & Search Filter"      starRating(1..5) → ★★★☆☆ + case-insensitive filter with a match count
  starter/  solution/
l07-functions/        "Mini Utility Library"             capitalize (declaration), clamp (expression),
  starter/  solution/                                    pluralize (arrow + default param), temperatureConverter
l08-scope-closures/   "Scope Detective & Score Tracker"  predict 8 outputs, then a closure-based createScoreTracker()
  starter/  solution/
```

**How the page output works.** Every `script.js` starts with a short, provided
`show()` helper: it calls `console.log()` and also appends the line to
`<pre id="output">` with `textContent` (never `innerHTML`). Students call `show()`
wherever the lesson uses `console.log()`. They don't need to understand the page
part yet; it is explained in Module 4 (The DOM). The solutions are the lesson's
own exercise solutions with `console.log` swapped for `show`.

**Notes per lab**

- **L05:** the solution runs with `score = 78`. Have students change it to
  95, 60, 59, -5 and 105 and reload, to hit every branch including the invalid-score
  guard. The guard is an `if`/`else` wrapper, not an early `return`, because
  functions don't arrive until L07.
- **L06:** `starRating()` is given as an empty shell (the lesson does the same);
  students write only the loop.
- **L07:** each test call is commented out under its TODO; students uncomment as they
  finish each helper.
- **L08:** the starter already runs the Scope Detective code, so students write their
  predictions in the `// ???` comments *before* the first reload. Line 8 is left
  commented; the solution wraps it in `try...catch` (a later lesson) so the page can
  show the `ReferenceError` and keep going to Part 2.

Every solution was loaded in a browser and runs with no console errors. Do not hand
solutions to students before the lab.
