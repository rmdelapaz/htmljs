#!/usr/bin/env python3
"""
Assemble the three combined instructor-kit books from the per-module source docs.

Reads:  source/module-N/{facilitator-guide,participant-workbook,answer-key}.html
Writes: ./participant-workbook.html, ./facilitator-guide.html, ./answer-key.html
        (the canonical hand-out documents, each with a cover + TOC + one chapter
         per module, continuous pagination)

After editing a module's source doc, re-run this to regenerate the books, then
render PDFs (each book has a Print / Save as PDF button, or use headless Chrome).

Usage:  python3 build-combined.py   (run from the instructor-kit/ folder)
"""
import os

MODULES = [
    (1, "JavaScript Foundations", [("L01", "Welcome to JavaScript"), ("L02", "Linking Scripts & the Console"), ("L03", "Variables & Data Types"), ("L04", "Operators & Expressions")]),
    (2, "Control Flow & Functions", [("L05", "Conditionals"), ("L06", "Loops"), ("L07", "Functions"), ("L08", "Scope & Hoisting")]),
    (3, "Working with Data", [("L09", "Arrays"), ("L10", "Objects"), ("L11", "Array Methods"), ("L12", "Strings & Template Literals")]),
    (4, "The DOM", [("L13", "Introduction to the DOM"), ("L14", "Selecting & Modifying Elements"), ("L15", "Events & Event Listeners"), ("L16", "Creating & Removing Elements")]),
    (5, "Building Interactive Pages", [("L17", "Forms & Validation"), ("L18", "Timers & Animation"), ("L19", "Local Storage"), ("L20", "Working with APIs & Fetch")]),
    (6, "Capstone & Next Steps", [("L21", "Building a Complete Project"), ("L22", "Next Steps & Best Practices")]),
]

DOCS = {
    "participant-workbook": dict(
        base="participant-workbook.html", role="Participant Workbook",
        eyebrow="Front-End JavaScript · Complete Course Workbook",
        sub="Your working notebook for the whole course — all six modules. Read the key ideas, study the worked examples, do the exercises in the space provided, and check yourself with the quizzes.",
        chips=['<span class="chip"><b>6</b> modules · 22 lessons</span>', '<span class="chip">Write-in exercises &amp; self-checks</span>', '<span class="chip">Name: ____________________</span>'],
        toolbar=("Student workbook —", "write in it · bring it to every session")),
    "facilitator-guide": dict(
        base="facilitator-guide.html", role="Facilitator Guide",
        eyebrow="Front-End JavaScript · Complete Facilitator Guide",
        sub="The full teaching manual for the five-day course. Timing, live-demo scripts, the beginner mistakes to pre-empt, lab facilitation, and checks for understanding — for all six modules.",
        chips=['<span class="chip"><b>6</b> modules · 22 lessons</span>', '<span class="chip">~18.3 teaching hours · 30 h with labs &amp; breaks</span>', '<span class="chip">Instructor copy · not for students</span>'],
        toolbar=("Instructor copy —", "contains answers &amp; timing · not for students")),
    "answer-key": dict(
        base="answer-key.html", role="Answer Key",
        eyebrow="Front-End JavaScript · Complete Answer Key",
        sub="Every quiz answered and explained, plus reference notes for each lab — for all six modules. Use for grading and reteaching. Confidential instructor material.",
        chips=['<span class="chip"><b>6</b> modules</span>', '<span class="chip">112 quiz items + solutions</span>', '<span class="chip">Confidential — do not distribute</span>'],
        toolbar=("Instructor copy —", "answers &amp; solutions · not for students")),
}

STYLE = """<style>
  .cover { border-bottom:3px solid var(--accent); padding-bottom:22px; margin-bottom:12px; }
  .cover .kit-eyebrow { color:var(--accent); }
  .cover h1 { font-size:clamp(2rem,5vw,2.7rem); font-weight:800; letter-spacing:-.02em; margin:10px 0 6px; }
  .cover .sub { font-size:1.05rem; color:var(--ink-2); max-width:64ch; }
  .toc { margin:26px 0 8px; }
  .toc h2 { font-size:.95rem; font-weight:700; letter-spacing:.05em; text-transform:uppercase; color:var(--ink-2); margin-bottom:10px; }
  .toc ol { list-style:none; margin:0; padding:0; }
  .toc .mod { font-family:"Archivo",sans-serif; font-weight:700; font-size:1.02rem; margin:12px 0 3px; color:var(--ink); }
  .toc .mod .mnum { font-family:"JetBrains Mono",monospace; font-size:.7rem; color:var(--accent); font-weight:600; margin-right:8px; }
  .toc .les { display:flex; gap:10px; padding:2px 0 2px 18px; font-size:.9rem; color:var(--ink-2); }
  .toc .les .lc { font-family:"JetBrains Mono",monospace; font-size:.72rem; color:var(--accent); }
  .modwrap { break-before:page; }
  .modwrap > .mast h1 { font-size:1.55rem; }
  @media print { .modwrap { break-before:page; } }
</style>"""


def esc(s):
    return s.replace("&", "&amp;")


def extract_body(path):
    """Inner content of .sheet minus the trailing .foot block."""
    html = open(path, encoding="utf-8").read()
    i = html.index('<div class="sheet">') + len('<div class="sheet">')
    j = html.rindex('<div class="foot">')
    return html[i:j].strip()


def build(key):
    d = DOCS[key]
    toc_rows = []
    for num, title, lessons in MODULES:
        toc_rows.append(f'<li class="mod"><span class="mnum">MOD {num}</span>{esc(title)}</li>')
        for lc, lt in lessons:
            toc_rows.append(f'<li class="les"><span class="lc">{lc}</span><span>{esc(lt)}</span></li>')
    toc = "\n        ".join(toc_rows)

    mods = []
    for num, _, _ in MODULES:
        body = extract_body(os.path.join("source", f"module-{num}", d["base"]))
        mods.append(f'<section class="modwrap">\n{body}\n</section>')
    mods = "\n\n".join(mods)

    out = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{d['role']} — Front-End JavaScript</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@500;600&display=swap">
<link rel="stylesheet" href="kit.css">
{STYLE}
</head>
<body>

<div class="toolbar">
  <span class="lbl">{d['toolbar'][0]}</span>
  <button type="button" onclick="window.print()">🖨 Print / Save as PDF</button>
  <span class="hint">{d['toolbar'][1]}</span>
</div>

<div class="sheet">

  <header class="cover">
    <div class="kit-eyebrow">{d['eyebrow']}</div>
    <h1>Front-End JavaScript: Make Your Web Pages Come Alive</h1>
    <p class="sub">{d['sub']}</p>
    <div class="meta-row">{''.join(d['chips'])}</div>
  </header>

  <nav class="toc">
    <h2>Contents</h2>
    <ol>
        {toc}
    </ol>
  </nav>

{mods}

  <div class="foot">
    <div class="who"><span class="bio">Front-End JavaScript: Make Your Web Pages Come Alive · {d['role']}</span></div>
    <div class="ver">Complete {d['role']} · all 6 modules · v1.0</div>
  </div>

</div>
</body>
</html>
"""
    open(d["base"], "w", encoding="utf-8").write(out)
    print(f"wrote {d['base']}  ({len(out)//1024} KB)")


if __name__ == "__main__":
    if not os.path.isdir("source"):
        raise SystemExit("Run this from the instructor-kit/ folder (source/ not found).")
    for k in DOCS:
        build(k)
    print("Done. Now render PDFs (open each and Print, or use headless Chrome).")
