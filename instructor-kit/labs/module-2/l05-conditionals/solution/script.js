// L05 Lab — Grade Calculator (SOLUTION)
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

const studentName = "Alex";
const score = 78;   // try 95, 60, 59, -5 and 105

// Guard clause for invalid scores
if (score < 0 || score > 100) {
    show("Invalid score. Must be between 0 and 100.");
} else {
    // Determine letter grade (highest range first — first match wins)
    let letterGrade;

    if (score >= 90) {
        letterGrade = "A";
    } else if (score >= 80) {
        letterGrade = "B";
    } else if (score >= 70) {
        letterGrade = "C";
    } else if (score >= 60) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }

    // Determine message using switch (strict === comparison, so "A" matches "A")
    let message;

    switch (letterGrade) {
        case "A":
            message = "Excellent work!";
            break;
        case "B":
            message = "Great job!";
            break;
        case "C":
            message = "Solid effort, keep improving!";
            break;
        case "D":
            message = "You passed, but review the material.";
            break;
        case "F":
            message = "Let's set up a study plan.";
            break;
    }

    // Ternary for pass/fail
    const status = score >= 60 ? "Pass" : "Fail";

    // Output
    show(`${studentName} scored ${score} (${letterGrade}) — ${message}`);
    show(`Status: ${status}`);
}
