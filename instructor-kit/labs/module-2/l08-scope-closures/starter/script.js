// L08 Lab — Scope Detective & Score Tracker (STARTER)
// Use show() wherever the lesson uses console.log().

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

// ── Part 1: Scope Detective ──────────────────────────────────────────────
// PREDICT FIRST. Write your prediction after each ??? , then reload the
// page and compare with the Output panel.

let a = "global a";
var b = "global b";

function test() {
    let a = "function a";
    var c = "function c";

    if (true) {
        let a = "block a";
        var d = "function d";  // var is function-scoped!
        show("1:", a);  // ???
        show("2:", b);  // ???
    }

    show("3:", a);  // ???
    show("4:", c);  // ???
    show("5:", d);  // ???
}

test();
show("6:", a);  // ???
show("7:", b);  // ???
// show("8:", c);  // What happens here? Predict, then uncomment it and
//                 // check the Console (F12). Comment it out again after.


// ── Part 2: Build a Score Tracker ────────────────────────────────────────
// TODO: Create a closure-based score tracker.
// createScoreTracker() should return an object with these methods:
//   addPoints(points)  — adds points to the score
//   penalty(points)    — subtracts points (min score is 0)
//   getScore()         — returns the current score
//   reset()            — resets the score to 0
// Hint: follow the createCounter pattern from the lesson.


// Usage — uncomment when your function is ready:
// const tracker = createScoreTracker();
// tracker.addPoints(10);
// tracker.addPoints(25);
// tracker.penalty(5);
// show(tracker.getScore());  // 30
// tracker.reset();
// show(tracker.getScore());  // 0
