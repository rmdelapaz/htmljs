# L22 Lab — Bug Hunt: Snack Budget

Someone built a little snack-budget tracker and shipped it with **seven bugs**.
Five of them crash with a red error in the Console. Two are *silent*: the page runs,
it just does the wrong thing. Your job is to find and fix all seven, the way a
professional would: read the error, form a hypothesis, test it, fix it, verify.

**Time:** about 15 minutes in class. Finish at home if you need to.

## Setup

1. Open `starter/` with **Live Server** (the "Load sample items" button uses `fetch()`,
   which doesn't work from a double-clicked `file://` page).
2. Open DevTools (**F12**) and switch to the **Console**.
3. Edit only `starter/script.js`. The HTML and CSS have no bugs.

## How to hunt

- **Read the whole error message.** It tells you *what* went wrong and *where*
  (`script.js:37` — click it to jump to the line).
- **Syntax errors stop everything.** Nothing in the file runs until you fix them, and the
  real mistake is often on the line *before* the one reported.
- **Fix one bug, save, reload.** A fixed crash often reveals the next one.
- **Silent bugs need a hypothesis.** Use `console.log`, `console.table(items)`, a
  `debugger;` statement (DevTools must be open), or a breakpoint in **Sources**.
- Stuck? Explain the code line by line to your neighbor (or a rubber duck).

The app is supposed to: show a weekly limit, what you've spent, and what's left; add an
item from the form; mark an item **Bought** / **Undo** as many times as you like
(the totals follow); delete an item with ✕; load three sample items from
`sample-items.json`; and remember everything after a reload.

## Bug-hunt worksheet

Fill in one row per bug. "Hypothesis" = what you *think* causes it before you change
anything.

| # | What you saw (error text or wrong behavior) | File:line | Hypothesis | Fix you made | Verified? |
|---|---------------------------------------------|-----------|------------|--------------|-----------|
| 1 | | | | | ☐ |
| 2 | | | | | ☐ |
| 3 | | | | | ☐ |
| 4 | | | | | ☐ |
| 5 | | | | | ☐ |
| 6 | | | | | ☐ |
| 7 | | | | | ☐ |

**Hints for the silent bugs** (read only when you get there):

- *Bought works once and then never again.* Count how many times your click handler
  runs: put a `console.log("click")` at the top of it and click a few times. Where is the
  listener added, and how often does that code run?
- *Load sample items crashes.* Log `samples` right before the line that fails. When does
  the `.then()` callback run compared to the line after `fetch()`?

## When you're done

- [ ] The page loads with no red errors in the Console.
- [ ] **Bought** / **Undo** toggles every time, and Spent / Left update.
- [ ] Adding an item works; an empty name or price shows a message instead.
- [ ] **Load sample items** adds three items.
- [ ] ✕ deletes an item; everything is still there after a reload.
- [ ] Bonus: an item named `<b>bold</b>` shows the tags as plain text. Which line keeps it safe?

**Reflect:** which of the seven took you longest, and what would have found it faster?
Match each bug to a row in the lesson's error table or one of its "Common Pitfalls."
