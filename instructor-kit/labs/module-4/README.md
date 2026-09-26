# Module 4 Labs — The DOM

Four standalone labs, one per lesson (L13–L16). Each folder has a `starter/`
(the lesson's scaffold with the TODO comments) and a `solution/` (the lesson's
exercise solution made into a complete, working page). Open a folder with
Live Server, or serve `labs/` with `python3 -m http.server`.

```
l13-dom-explorer/     "DOM Explorer" — console exploration of a practice page
  starter/            index.html (practice page) + style.css + script.js (record your lines)
                      + README.md — the worksheet: 10 explorer tasks + 3 "think about it" questions
  solution/           same page + an "Explorer results" panel; script.js runs every task
                      and logs each result to the console AND the page
l14-profile-card/     "Dynamic Profile Card Editor" (the lesson's profile.html)
  starter/            index.html + style.css + script.js with TODOs 1–10
  solution/           tasks 1–9 + updateProfile() bonus; buttons toggle dark mode
                      and load a sample profile
l15-task-list/        "Interactive Task List" (the lesson's tasks.html)
  starter/            index.html + style.css + script.js with TODOs 1–4
  solution/           submit + preventDefault, delegated complete/delete with closest(),
                      updateCounter(), Escape clears the input, "d" toggles dark mode
l16-notifications/    "Dynamic Notification System" (the lesson's notifications.html)
  starter/            index.html + style.css + script.js with TODOs 1–5
  solution/           showNotification() with createElement + textContent, delegated
                      close, Clear All via replaceChildren(), 5-second auto-remove,
                      "b" key adds five at once through a DocumentFragment
```

The lessons keep HTML, CSS and JavaScript in one file (`profile.html`, `tasks.html`,
`notifications.html`). The labs split each into `index.html` + `style.css` + `script.js`
so students practice linking a script. The markup, class names and TODO text are the
lesson's own.

**Differences from the lesson listings (on purpose):**

- **Contrast:** button and toast colors are one shade darker (e.g. `#15803d` instead of
  `#22c55e`) so white text passes WCAG AA. Every control has a visible focus ring.
- **L14:** the solution clears the inline background (`card.style.backgroundColor = ""`)
  before toggling `.dark`, exactly as the lesson's solution comment explains. The
  starter keeps the clash so students can see it happen when they click the button.
- **L15:** the lesson's `body.dark-mode` rule leaves light text on white task cards;
  `style.css` adds `body.dark-mode .task-item` so dark mode stays readable. The "d"
  shortcut ignores Ctrl/Cmd/Alt so it never fights a browser shortcut.
- **L16:** a small `buildNotification()` helper is shared by the buttons and the batch
  bonus (the lesson repeats the same code twice). The slide-in animation is switched
  off for `prefers-reduced-motion`.

User-typed text always goes in with `textContent`, never `innerHTML`. Try typing
`<img src=x onerror=alert(1)>` as a task in the L15 solution: it shows up as plain text.

Do not hand solutions to students before the lab.
