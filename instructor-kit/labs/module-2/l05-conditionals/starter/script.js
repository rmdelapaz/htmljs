// L05 Lab — Grade Calculator (STARTER)
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

// TODO: Set the student's score
// const studentName = "Alex";
// const score = 78;

// BONUS (do this first): if score is below 0 or above 100,
// show "Invalid score. Must be between 0 and 100." and skip everything else.
// Tip: wrap the rest of your code in the else { } block of this check.

// TODO: Use if/else if/else to determine the letter grade:
// 90–100: "A"
// 80–89:  "B"
// 70–79:  "C"
// 60–69:  "D"
// Below 60: "F"
// Store it in a variable (let letterGrade;) so the switch can use it.

// TODO: Use a switch on the letter grade to set a message:
// A → "Excellent work!"
// B → "Great job!"
// C → "Solid effort, keep improving!"
// D → "You passed, but review the material."
// F → "Let's set up a study plan."
// Don't forget break after each case!

// TODO: Use a ternary to determine pass/fail (60+ is passing)

// TODO: Show the results:
// "Alex scored 78 (C) — Solid effort, keep improving!"
// "Status: Pass"

// When it works, change score to 95, 60, 59, -5 and 105 and reload each time.
