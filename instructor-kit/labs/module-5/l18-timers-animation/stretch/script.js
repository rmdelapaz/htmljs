// Lesson 18 — Pomodoro Timer, STRETCH version (the lesson's "Going further")
// Differences from ../solution/:
//   • Accurate time: Start stores endTime = Date.now() + remaining * 1000,
//     and each tick RECALCULATES remaining from the clock instead of counting
//     ticks. Late ticks or a throttled background tab can't make it drift.
//   • Ticks 4× a second so the display never lags a full second behind.
//   • Motion: the CSS turns off the ring transition for users who set
//     prefers-reduced-motion (see style.css).
//   • aria-pressed on presets so screen readers hear which one is selected.

const CIRCUMFERENCE = 2 * Math.PI * 130;   // ~816.81 (r = 130)

const progressRing = document.querySelector("#progress-ring");
const timerDisplay = document.querySelector("#timer-display");
const doneMessage = document.querySelector("#done-message");
const startBtn = document.querySelector("#start-btn");
const pauseBtn = document.querySelector("#pause-btn");
const resetBtn = document.querySelector("#reset-btn");
const presetBtns = document.querySelectorAll(".preset-btn");

let totalSeconds = 25 * 60;
let remainingSeconds = totalSeconds;
let endTime = null;        // timestamp (ms) when the countdown hits 0
let intervalId = null;

function updateDisplay(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerDisplay.textContent =
        `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

    progressRing.style.strokeDashoffset = CIRCUMFERENCE * (1 - seconds / totalSeconds);

    if (seconds === 0) {
        progressRing.style.stroke = "#22c55e";
    } else if (seconds < 30) {
        progressRing.style.stroke = "#ef4444";
    } else {
        progressRing.style.stroke = "#6366f1";
    }
}

function tick() {
    // Ask the clock, don't count ticks
    remainingSeconds = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
    updateDisplay(remainingSeconds);

    if (remainingSeconds === 0) {
        pause();
        doneMessage.classList.add("visible");
    }
}

function start() {
    if (intervalId !== null || remainingSeconds <= 0) return;
    doneMessage.classList.remove("visible");
    endTime = Date.now() + remainingSeconds * 1000;
    intervalId = setInterval(tick, 250);
}

function pause() {
    clearInterval(intervalId);
    intervalId = null;
    // remainingSeconds already holds the last value tick() computed,
    // so Start resumes from there with a fresh endTime.
}

function reset() {
    pause();
    remainingSeconds = totalSeconds;
    updateDisplay(remainingSeconds);
    doneMessage.classList.remove("visible");
}

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);

presetBtns.forEach(btn => {
    btn.setAttribute("aria-pressed", btn.classList.contains("selected"));
    btn.addEventListener("click", () => {
        presetBtns.forEach(b => {
            b.classList.remove("selected");
            b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("selected");
        btn.setAttribute("aria-pressed", "true");

        totalSeconds = Number(btn.dataset.minutes) * 60;
        reset();
    });
});

// When the tab becomes visible again, redraw immediately from the clock
document.addEventListener("visibilitychange", () => {
    if (!document.hidden && intervalId !== null) tick();
});

updateDisplay(remainingSeconds);
