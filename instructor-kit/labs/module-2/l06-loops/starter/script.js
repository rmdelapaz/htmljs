// L06 Lab — Star Rating & Search Filter (STARTER)
// Follow the TODOs. Use show() wherever the lesson uses console.log().

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
// TODO: Finish starRating(rating) so it returns a string of 5 stars:
//   starRating(3) → "★★★☆☆"      starRating(5) → "★★★★★"
// Use a for loop to build the string: "★" for filled, "☆" for empty.
// (Functions get a full lesson next time, in Lesson 7. For now, just
//  fill in the loop; return hands the finished string back.)
function starRating(rating) {
    let stars = "";
    // your loop goes here
    return stars;
}

// Uncomment to test:
// show(starRating(1));  // "★☆☆☆☆"
// show(starRating(3));  // "★★★☆☆"
// show(starRating(5));  // "★★★★★"


// ── Part 2: Simple Search Filter ─────────────────────────────────────────
const products = [
    "Wireless Mouse",
    "USB Keyboard",
    "Wireless Headphones",
    "Monitor Stand",
    "Wireless Charger"
];
const searchTerm = "wireless";

// TODO: Loop through products (for...of) and show only the ones that
// contain the search term, then show how many matched.
// Expected output:
//   "Found: Wireless Mouse"
//   "Found: Wireless Headphones"
//   "Found: Wireless Charger"
//   "3 results found."
// Hint: use .toLowerCase() on both the product name and the search term,
// and .includes() to test for a match. Keep a counter for the matches.
