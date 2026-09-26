// L07 Lab — Mini Utility Library (STARTER)
// Write the four functions, then uncomment the tests under each one.

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

// 1. capitalize(str) — Function Declaration
// Takes a string and returns it with the first letter
// capitalized and the rest lowercase.
// capitalize("hello")      → "Hello"
// capitalize("jAVAsCRIPT") → "Javascript"


// show(capitalize("hello"));       // "Hello"
// show(capitalize("jAVAsCRIPT"));  // "Javascript"


// 2. clamp(value, min, max) — Function Expression
// Returns the value if it's within the range,
// otherwise returns the nearest boundary.
// clamp(5, 1, 10)  → 5
// clamp(-3, 1, 10) → 1
// clamp(15, 1, 10) → 10


// show(clamp(5, 1, 10));   // 5
// show(clamp(-3, 1, 10));  // 1
// show(clamp(15, 1, 10));  // 10


// 3. pluralize(count, singular, plural) — Arrow Function
// Returns the correct word form based on count.
// Use a default parameter for 'plural' (singular + "s").
// pluralize(1, "cat")               → "1 cat"
// pluralize(3, "cat")               → "3 cats"
// pluralize(2, "child", "children") → "2 children"


// show(pluralize(1, "cat"));               // "1 cat"
// show(pluralize(3, "cat"));               // "3 cats"
// show(pluralize(2, "child", "children")); // "2 children"


// 4. temperatureConverter(value, fromUnit) — Your choice!
// Converts between Celsius and Fahrenheit.
// temperatureConverter(32, "F")  → "32°F = 0.0°C"
// temperatureConverter(100, "C") → "100°C = 212.0°F"
// (round to one decimal place with .toFixed(1))
// If fromUnit is invalid, return "Invalid unit"


// show(temperatureConverter(32, "F"));   // "32°F = 0.0°C"
// show(temperatureConverter(100, "C"));  // "100°C = 212.0°F"
// show(temperatureConverter(72, "K"));   // "Invalid unit"
