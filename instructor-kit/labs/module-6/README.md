# Module 6 Labs — Capstone & Next Steps

Two labs for the last afternoon (Day 5 PM). L21 is the capstone build; L22 has no
build exercise in the lesson, so its lab is a bug hunt that practices the lesson's
debugging techniques.

```
l21-quicknote/          "QuickNote" — the capstone note-taking app (Lesson 21, Steps 1–7)
  README.md             guided-build plan, checkpoint table, test checklist, 8 extensions
  starter/quicknote.html  HTML + CSS finished; <script> holds the DOM references and
                          TODO comments for Steps 2–7 (TODO 2a … 7b). Loads with no errors.
  checkpoints/          catch-up files, each a working app up to the end of one step:
    step-3-render.html    data layer + rendering (add notes from the Console)
    step-4-form.html      + create/edit form with validation and "Note saved!"
    step-5-search.html    + debounced search and category filter
    step-6-quote.html     + quote from dummyjson.com with an offline fallback
  solution/quicknote.html the lesson's "Complete Source Code", unchanged (Step 7 done)
l22-debugging/          "Snack Budget" — a small budget app with SEVEN planted bugs
  README.md             the bug-hunt worksheet students fill in
  starter/              index.html + style.css + script.js (buggy) + sample-items.json
  solution/             the same files with every bug fixed; each fix is marked
                        "// FIX n" in script.js with the error it caused
```

**Serve, don't double-click.** Open each folder with Live Server (or run
`python3 -m http.server` in `labs/`). QuickNote fetches a quote from
`https://dummyjson.com/quotes/random` (the lesson's API) and works without it;
Snack Budget's "Load sample items" button fetches the local `sample-items.json`,
which is blocked on `file://`.

**QuickNote checkpoints** are for students who fall behind during the 90-minute build:
hand them the checkpoint for the step the room just finished and they carry on from the
next TODO. Each checkpoint keeps the remaining TODOs in place, and `INIT` at the bottom
only calls the functions that exist so far. Checkpoints share `localStorage`
(`quicknote_notes`) with the solution when served from the same origin, so notes carry over.

**Snack Budget bugs, in the order the Console reveals them** (answers — keep these
from students until the debrief):

| # | Kind | What the Console / page shows | Fix |
|---|------|-------------------------------|-----|
| 1 | Syntax | `SyntaxError: Unexpected token '{'` — nothing runs | missing comma after the first `seedItems` object (the line *before* the one reported) |
| 2 | Undefined nested | `Cannot read properties of undefined (reading 'weekly')` | first visit has no settings: `settings.limits?.weekly ?? 20` |
| 3 | null | `Cannot read properties of null (reading 'replaceChildren')` | selector typo `#item-lsit` → `#item-list` |
| 4 | Not defined | `ReferenceError: formatprice is not defined` | case matters: `formatPrice` |
| 5 | Not a function | `TypeError: items.length is not a function` | `items.length` (property, no parentheses) |
| 6 | Silent: duplicate listeners | "Bought" works on the first click, then never again | the delegated listener is added inside `render()`; move it out so it's added once |
| 7 | Silent-ish: async trap | clicking **Load sample items** throws `Cannot read properties of undefined (reading 'forEach')` | use `samples` only after `await fetch(...)` / `await response.json()` in an `async` handler |

Bug 2 needs empty storage to show up — which is every student's first visit. To see the
fixed version read a saved limit, run
`localStorage.setItem("snack_budget_settings", JSON.stringify({ limits: { weekly: 30 } }))`
in the Console and reload.

Do not hand lab solutions or checkpoints to students before they need them.
