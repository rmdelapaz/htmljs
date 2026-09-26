# Module 5 Labs — Building Interactive Pages

Four stand-alone labs, one per lesson (L17–L20). Each one is a small, complete
app: the student starts from `starter/` (HTML + CSS done, `script.js` holds the
lesson's numbered TODO comments) and the `solution/` folder is the instructor
reference.

```
l17-forms-validation/
  starter/     index.html + style.css + script.js (TODOs 1–5)
  solution/    Registration form: blur-then-input validation, strength meter 0–5,
               success message replaces the form
l18-timers-animation/
  starter/     index.html + style.css + script.js (TODOs 1–8)
  solution/    Pomodoro timer: SVG ring (r=130, circumference 816.81),
               start/pause/reset, 25/15/5/1-min presets, red < 30 s, green at 0
  stretch/     Same timer, Date.now()/endTime countdown + aria-pressed presets
  demo/        event-loop.html: live A, D, C, B demo (and quiz Q6's order)
l19-local-storage/
  starter/     index.html + style.css + script.js (TODOs 1–7)
  solution/    Persistent to-do list: load/save with try/catch, render,
               add, toggle/delete, count, event delegation, init
l20-apis-fetch/
  starter/     index.html + style.css + script.js (TODOs 1–7) + mock-user.json
  solution/    GitHub User Search: loading/error/user states, 404 and 403/429
               branches, network errors, profile link, optional debounce,
               USE_MOCK classroom fallback (mock-user.json + mock-avatar.svg)
```

The lessons ship each exercise as one self-contained file (`registration.html`,
`pomodoro.html`, `todo.html`, `github-search.html`). The labs split the same
page into `index.html`, `style.css` and `script.js` so students work in the
script file only. The HTML, CSS and JavaScript match the lesson. Changes are
marked in comments ("Kit upgrade" / "Kit"):

- **L17**: `aria-invalid` + `aria-describedby` on invalid fields; focus moves to
  the success message; visible focus ring; darker red/green text for contrast.
- **L18**: visible focus ring; `prefers-reduced-motion` turns off the ring
  transition; `aria-live` on the done message.
- **L19**: visually-hidden `<label>` for the input; `aria-label` on each checkbox
  ("Mark "…" as done") and × button ("Delete "…""), which the lesson's version
  lacks; focus restored after `render()`; darker grays for contrast.
- **L20**: visually-hidden `<label>`; `USE_MOCK` and `AUTO_SEARCH` switches at
  the top of `script.js`; a stale-response guard (`latestSearch`) so an older,
  slower answer can't overwrite a newer one.

## Running the labs

Open the lab folder with VS Code + Live Server (or `python3 -m http.server`).
L20's mock mode fetches a local JSON file, which needs a server, so it will not
work from `file://`.

## L20 and GitHub's rate limit (read before class)

Without logging in, GitHub allows about **60 requests per hour per IP address**.
A classroom behind one shared IP can use that up in minutes, and then every
request returns **403**. To manage this:

1. Pair students up: one laptop searches, the other reads the code.
2. Keep `AUTO_SEARCH = false` in class. Debounced search-as-you-type spends a
   request every time someone pauses.
3. When the room hits 403, switch to mock mode: open the page as
   `index.html?mock` or set `USE_MOCK = true`. In mock mode, `octocat` returns
   the sample profile, `ratelimit` simulates a 403, and any other name
   simulates a 404, so students can still test every branch. Starters include
   `mock-user.json`, and the comment at the top of the starter explains how
   to fetch it instead of the GitHub URL.

## Resetting L19 between demos

The to-do list saves under the key `todos` for the origin (e.g.
`127.0.0.1:5500`). Every student project on that Live Server port shares it.
Clear it in DevTools → Application → Local Storage, or run
`localStorage.removeItem("todos")` in the console.

Do not hand solutions to students before the lab.
