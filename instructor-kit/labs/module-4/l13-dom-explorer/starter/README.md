# L13 Lab — DOM Explorer (worksheet)

In the lesson you explored the lesson page itself. Here you do the same tasks on a
small practice page whose structure you can see in full, so every answer is checkable.

**Setup:** open `index.html` with Live Server, press **F12** (Mac: **Cmd + Option + I**),
and click the **Console** tab. Type each line, press Enter, and write down what the
console shows. Refresh the page at any time to undo your changes.

| # | Task | Type this (or your own version) | What did the console show? |
|---|------|---------------------------------|----------------------------|
| 1 | Find the page title | `document.title` | |
| 2 | Get the main heading | `document.querySelector("h1")` | |
| 3 | Count the sections | `document.querySelectorAll(".lesson-section").length` | |
| 4 | Get the breadcrumb navigation | `document.querySelector(".breadcrumb")` | |
| 5 | Walk the tree from the body | `document.body.firstElementChild` then `.nextElementSibling` (keep going) | |
| 6 | Change the page heading | `document.querySelector("h1").textContent = "🌳 I Explored the DOM!"` | |
| 7 | Change the background | `document.body.style.backgroundColor = "#f0f9ff"` | |
| 8 | Count all links | `document.querySelectorAll("a").length` | |
| 9 | Use the Elements panel | click an element, then type `$0`, `$0.tagName`, `$0.children` | |
| 10 | Bonus: walk to the `<h1>` | see below | |

**Task 10 (bonus)** — predict first, then run it:

```js
document.documentElement  // <html>
    .children[1]          // <body>
    .children[3]          // <main>
    .firstElementChild    // .container
    .firstElementChild    // <header>
    .firstElementChild    // <h1>
```

Why is `<main>` at `children[3]`? Count the element children of `<body>` in `index.html`.

## Think about it (write your answers)

1. Run `document.querySelector("#family").firstChild` and then
   `document.querySelector("#family").firstElementChild`. Why are they different?
   What is `firstChild.nodeType`?
2. After task 6, press **Ctrl + U** (View Source). Is your new heading there?
   Now look in the **Elements** panel. Explain the difference.
3. Double-click some text in the Elements panel and edit it. Did `index.html` in VS Code change?

When you're done, paste the lines that worked into `script.js` as a record.
