// L13 — DOM Explorer: reference solution
// Runs every explorer task, logs each result to the console,
// and mirrors it into the "Explorer results" panel on the page.

const results = document.querySelector("#results");

// Log to the console AND show the result on the page.
// textContent (not innerHTML) so tag names like <h1> display as text.
function report(task, value) {
    console.log(task, value);
    const li = document.createElement("li");
    li.textContent = `${task} → ${describe(value)}`;
    results.append(li);
}

// Turn a DOM value into a short, readable label
function describe(value) {
    if (value === null) return "null";
    if (value instanceof Element) {
        const id = value.id ? `#${value.id}` : "";
        const cls = value.classList.length ? `.${[...value.classList].join(".")}` : "";
        return `<${value.tagName.toLowerCase()}${id}${cls}>`;
    }
    if (value instanceof Text) return `#text ${JSON.stringify(value.textContent)}`;
    return String(value);
}

// 10. Bonus first — walk the full tree before anything else changes
const deepH1 = document.documentElement // <html>
    .children[1]                       // <body>
    .children[3]                       // <main>
    .firstElementChild                 // .container
    .firstElementChild                 // <header>
    .firstElementChild;                // <h1>
report("10. documentElement → … → <h1>", deepH1);

// 1. Find the page title
report("1. document.title", document.title);

// 2. Get the main heading
const heading = document.querySelector("h1");
report("2. querySelector(\"h1\")", heading);
report("   same element as the walk in task 10?", heading === deepH1);

// 3. How many sections?
report("3. .lesson-section count", document.querySelectorAll(".lesson-section").length);

// 4. Get the breadcrumb navigation
report("4. querySelector(\".breadcrumb\")", document.querySelector(".breadcrumb"));

// 5. Navigate the tree manually from the body
let el = document.body.firstElementChild;
let step = 0;
while (el) {
    report(`5. body child ${step}`, el);
    el = el.nextElementSibling;
    step++;
}

// Watch-out: firstChild vs firstElementChild (whitespace text nodes)
const family = document.querySelector("#family");
report("   #family.firstChild", family.firstChild);
report("   #family.firstChild.nodeType", family.firstChild.nodeType);         // 3 = Text
report("   #family.firstElementChild", family.firstElementChild);
report("   #family.firstElementChild.nodeType", family.firstElementChild.nodeType); // 1 = Element

// 8. Count all links (before we add anything to the page)
report("8. link count", document.querySelectorAll("a").length);

// 6. Change the page heading text
heading.textContent = "🌳 I Explored the DOM!";
report("6. new heading text", heading.textContent);

// 7. Change the page background color
document.body.style.backgroundColor = "#f0f9ff";
report("7. body inline background", document.body.style.backgroundColor);

// 9. Elements panel tasks can't be scripted — remind the explorer
console.log("9. Now click an element in the Elements panel and type $0 in the console.");
console.log("   View Source (Ctrl + U) still shows the ORIGINAL heading — the DOM changed, the file didn't.");
