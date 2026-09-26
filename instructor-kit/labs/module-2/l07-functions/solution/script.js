// L07 Lab — Mini Utility Library (SOLUTION)
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

// 1. capitalize — Function Declaration
function capitalize(str) {
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

show(capitalize("hello"));       // "Hello"
show(capitalize("jAVAsCRIPT"));  // "Javascript"
show(`"${capitalize("")}"`);     // "" (empty string in, empty string out)

// 2. clamp — Function Expression
const clamp = function(value, min, max) {
    return Math.max(min, Math.min(max, value));
};

show(clamp(5, 1, 10));   // 5
show(clamp(-3, 1, 10));  // 1
show(clamp(15, 1, 10));  // 10

// 3. pluralize — Arrow Function
const pluralize = (count, singular, plural = singular + "s") =>
    `${count} ${count === 1 ? singular : plural}`;

show(pluralize(1, "cat"));               // "1 cat"
show(pluralize(3, "cat"));               // "3 cats"
show(pluralize(2, "child", "children")); // "2 children"

// 4. temperatureConverter
function temperatureConverter(value, fromUnit) {
    const unit = fromUnit.toUpperCase();

    if (unit === "F") {
        const celsius = ((value - 32) * 5 / 9).toFixed(1);
        return `${value}°F = ${celsius}°C`;
    }
    if (unit === "C") {
        const fahrenheit = (value * 9 / 5 + 32).toFixed(1);
        return `${value}°C = ${fahrenheit}°F`;
    }

    return "Invalid unit";
}

show(temperatureConverter(32, "F"));   // "32°F = 0.0°C"
show(temperatureConverter(100, "C"));  // "100°C = 212.0°F"
show(temperatureConverter(72, "K"));   // "Invalid unit"
