// L08 Lab — Scope Detective & Score Tracker (SOLUTION)
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

// ── Part 1: Scope Detective ──────────────────────────────────────────────
let a = "global a";
var b = "global b";

function test() {
    let a = "function a";
    var c = "function c";

    if (true) {
        let a = "block a";
        var d = "function d";  // var is function-scoped!
        show("1:", a);  // "block a"    (let a shadows function a inside the block)
        show("2:", b);  // "global b"   (b found via the scope chain in global)
    }

    show("3:", a);  // "function a" (block scope ended — back to function a)
    show("4:", c);  // "function c" (var c in function scope — accessible)
    show("5:", d);  // "function d" (var d is function-scoped, not block-scoped!)
}

test();
show("6:", a);  // "global a" (global a was never modified)
show("7:", b);  // "global b" (global b accessible)

// 8: c only exists inside test(), so this line throws a ReferenceError.
// try...catch (a later lesson) lets the page report the error and keep
// running, so Part 2 still shows. Without it, the script would stop here.
try {
    show("8:", c);
} catch (error) {
    show("8:", `${error.name}: ${error.message}`);
}

show("");  // blank line between the two parts

// ── Part 2: Score Tracker ────────────────────────────────────────────────
function createScoreTracker() {
    let score = 0;   // private — only the methods below can reach it

    return {
        addPoints(points) {
            score += points;
        },
        penalty(points) {
            score = Math.max(0, score - points);
        },
        getScore() {
            return score;
        },
        reset() {
            score = 0;
        }
    };
}

const tracker = createScoreTracker();
tracker.addPoints(10);
tracker.addPoints(25);
tracker.penalty(5);
show("Score:", tracker.getScore());        // 30

tracker.penalty(100);
show("After penalty(100):", tracker.getScore());  // 0 (can't go below zero)

tracker.addPoints(50);
tracker.reset();
show("After reset():", tracker.getScore());       // 0

// Score is truly private
show("tracker.score:", tracker.score);     // undefined
