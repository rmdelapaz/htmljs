// L06 Lab — Star Rating & Search Filter (SOLUTION)
// Instructor reference. Matches the lesson solution, with console.log → show().

// ── Page-output helper (provided — you don't need to change it) ──────────
// show() works like console.log(), but it ALSO writes the line onto the page,
// so you can see your results without opening DevTools. You'll learn how the
// page part works in Module 4 — for now, call show() wherever you'd log.
const output = document.querySelector("#output");

function format(value) {
    if (typeof value === "string") return value;
    if (value === undefined) return "undefined";
    return JSON.stringify(value);
}

function show(...values) {
    console.log(...values);
    output.textContent += values.map(format).join(" ") + "\n";
}
// ─────────────────────────────────────────────────────────────────────────

// ── Part 1: Star Rating Display ──────────────────────────────────────────
function starRating(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {       // exactly 5 passes: 1, 2, 3, 4, 5
        stars += i <= rating ? "★" : "☆";
    }
    return stars;
}

show(starRating(1));  // "★☆☆☆☆"
show(starRating(3));  // "★★★☆☆"
show(starRating(5));  // "★★★★★"

show("");  // blank line between the two parts

// ── Part 2: Simple Search Filter ─────────────────────────────────────────
const products = [
    "Wireless Mouse",
    "USB Keyboard",
    "Wireless Headphones",
    "Monitor Stand",
    "Wireless Charger"
];
const searchTerm = "wireless";
let matchCount = 0;

for (const product of products) {
    if (product.toLowerCase().includes(searchTerm.toLowerCase())) {
        show(`Found: ${product}`);
        matchCount++;
    }
}

show(`${matchCount} result${matchCount === 1 ? "" : "s"} found.`);
