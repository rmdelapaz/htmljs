# Module 3 Labs — Working with Data

Four stand-alone labs, one per lesson (L09–L12). The lesson exercises are console
exercises, so each lab is a small page whose `script.js` runs the exercise and
**also writes every result onto the page** — students see their output without
opening DevTools (it still goes to the Console too).

```
l09-arrays/          To-Do List Manager        addTodo / removeTodo / insertTodoAt / listTodos / completeTodo
l10-objects/         Contact Book              addContact / findContact / updateContact / displayContact / listByGroup
l11-array-methods/   Product Catalog Pipeline  six no-loop challenges on an 8-product array
l12-strings/         Text Formatting Utility   truncate / slugify / countWords / initials / maskEmail

each lab/
├─ starter/    index.html + style.css + script.js  (exercise data, TODO comments, commented-out tests)
└─ solution/   index.html + style.css + script.js  (the lesson's solution, run and displayed)
```

**How the page output works.** Every `script.js` opens with a short, provided
`show()` helper: it calls `console.log()` and appends the same line to the
`<pre id="output">` on the page using `textContent` (never `innerHTML`). Students
call `show()` wherever the lesson says `console.log()`. They don't need to
understand the helper yet — Module 4 teaches the DOM — so tell them to leave it alone.

**Running a lab.** Open the lab folder in VS Code and start Live Server on
`index.html`, or serve the `labs/` folder (`python3 -m http.server`) and browse to
it. A starter shows one "Starter loaded" line until the student writes code and
uncomments the tests.

**What each solution shows (verified in a browser, no console errors):**

- **L09** — the lesson's test sequence (add → remove → complete → insert) with a
  numbered list after each step, ending `1. Finish homework / 2. Call dentist /
  3. Read a book`, plus three edge cases: a missing task, an empty list, and
  completing from an empty list.
- **L10** — Dave added (`true`), duplicate Alice refused (`false`), Bob found,
  an unknown name returns `null`, Alice updated and displayed as
  `Name: Alice | Phone: 555-9999 | Email: alice@example.com | Group: friend`, and
  `listByGroup` for `family` (`["Bob","Dave"]`) and `work` (`["Carol"]` — Alice
  moved to `friend`). The lesson's TODO test calls `listByGroup(contacts, "work")`
  while its solution calls `"family"`; the lab shows both.
- **L11** — all six challenges: 8 names, 6 in stock, accessories
  `[Mousepad XL, Wireless Mouse, Mechanical Keyboard]`, total `"374.94"` (and the
  raw `374.94000000000005`, a ready-made floating-point teaching moment),
  `every` → `true`, and the six-line sale list from `Mousepad XL — $11.99` to
  `Headphones — $119.99`. It finishes by showing the original catalog order is
  unchanged.
- **L12** — each utility call next to its result (strings in quotes so spaces
  are visible), including the `countWords("")` → `0` edge case.

L12's `slugify`, `countWords`, and `initials` use regular expressions, which the
lesson only previews. The L12 starter includes a plain-English reading of the two
patterns students need; the facilitator guide has a short script for explaining them.

Do not hand solutions to students before the lab.
