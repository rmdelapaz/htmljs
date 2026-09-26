# L01 Lab — Spot JavaScript in the Wild (console worksheet)

No files to write today. Students open DevTools, type JavaScript into the **Console**,
and watch a live page change. Use `starter/index.html` (a JavaScript-free page) as a safe
place to practice before trying a real website.

```
starter/index.html       "Explore Me" — a plain HTML + CSS page to experiment on (no JS)
solution/index.html      the same page with the worksheet steps saved as a script
solution/app.js          the three console statements from the lesson
solution/console-mirror.js  instructor add-on: shows console output on the page (projector)
```

## Worksheet (students follow along)

**1. Open DevTools and the Console**

| Browser | Windows / Linux | Mac |
|---------|-----------------|-----|
| Chrome / Edge | `Ctrl` + `Shift` + `J` | `Cmd` + `Option` + `J` |
| Firefox | `Ctrl` + `Shift` + `K` | `Cmd` + `Option` + `K` |
| Any browser | `F12`, then click the **Console** tab | |

(Safari: first turn on *Settings → Advanced → Show features for web developers*, then
`Cmd` + `Option` + `C`.)

**2. On the practice page** (`starter/index.html`, opened with Live Server), type each line
and press `Enter`. Write down what you see.

| # | Type this | What happened? |
|---|-----------|----------------|
| a | `document.title` | |
| b | `document.title = "I changed this with JavaScript!"` | |
| c | `document.body.style.backgroundColor = "lightyellow"` | |
| d | Refresh the page. | |

**3. On a real site you use** (Google, YouTube, a news site): repeat a–d. Then use the site
normally and list three things that you think JavaScript is doing.

| Feature I noticed | JavaScript? (Y/N) | Why I think so |
|-------------------|-------------------|----------------|
| | | |
| | | |
| | | |

## What students should see (instructor)

- **a** prints the page title as a string, in quotes, e.g. `'Explore Me — Console Practice'`.
- **b** changes the text in the browser tab instantly. The console echoes the new string back.
- **c** turns the page background light yellow. The console echoes `'lightyellow'`.
- **d** a refresh restores everything: they only changed *their copy* of the page, never the
  site's files. This is the answer to quiz Q4.
- Features that move, appear, disappear, or change without a full reload (menus, search
  suggestions, carousels, "like" counters) are JavaScript. Static text and layout are HTML/CSS.

**Common snags:** Chrome and Firefox block *pasting* into the Console the first time and ask
you to type `allow pasting` — that's a real safety feature, not an error. Typing the lines is
better practice anyway. Curly "smart quotes" from a word processor cause a `SyntaxError`;
retype the quotes.

The solution page replays the three statements from `app.js` on load, so you can show the
result on the projector (the panel at the bottom mirrors the console). Do not hand out the
solution before the lab.
