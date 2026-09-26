// Lesson 18 — Pomodoro Timer (reference solution — the lesson's version)
// Counts setInterval ticks. Fine for learning; see ../stretch/ for the
// Date.now()-based version that stays accurate in background tabs.

const CIRCUMFERENCE = 2 * Math.PI * 130;   // ~816.81 (r = 130)

// 1. DOM references
const progressRing = document.querySelector("#progress-ring");
const timerDisplay = document.querySelector("#timer-display");
const timerLabel = document.querySelector("#timer-label");
const doneMessage = document.querySelector("#done-message");
const startBtn = document.querySelector("#start-btn");
const pauseBtn = document.querySelector("#pause-btn");
const resetBtn = document.querySelector("#reset-btn");
const presetBtns = document.querySelectorAll(".preset-btn");

// 2. State
let totalSeconds = 25 * 60;
let remainingSeconds = totalSeconds;
let intervalId = null;
let isRunning = false;

// 3. Update the display
function updateDisplay(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerDisplay.textContent =
        `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

    // Update ring progress: 0 offset = full ring, CIRCUMFERENCE = empty
    const progress = 1 - (seconds / totalSeconds);
    const offset = CIRCUMFERENCE * progress;
    progressRing.style.strokeDashoffset = offset;

    // 8. Bonus: color changes
    if (seconds === 0) {
        progressRing.style.stroke = "#22c55e";
    } else if (seconds < 30) {
        progressRing.style.stroke = "#ef4444";
    } else {
        progressRing.style.stroke = "#6366f1";
    }
}

// 4. Start the timer
function start() {
    if (isRunning) return;              // guard: no double intervals
    if (remainingSeconds <= 0) return;

    isRunning = true;
    doneMessage.classList.remove("visible");

    intervalId = setInterval(() => {
        remainingSeconds--;
        updateDisplay(remainingSeconds);

        if (remainingSeconds <= 0) {
            clearInterval(intervalId);
            intervalId = null;
            isRunning = false;
            doneMessage.classList.add("visible");
        }
    }, 1000);
}

// 5. Pause and reset
function pause() {
    clearInterval(intervalId);
    intervalId = null;
    isRunning = false;
}

function reset() {
    pause();
    remainingSeconds = totalSeconds;
    updateDisplay(remainingSeconds);
    doneMessage.classList.remove("visible");
}

// 6. Button handlers — pass the function, don't call it: start, not start()
startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);

// 7. Preset buttons
presetBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        presetBtns.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");

        totalSeconds = Number(btn.dataset.minutes) * 60;
        remainingSeconds = totalSeconds;
        pause();
        updateDisplay(remainingSeconds);
        doneMessage.classList.remove("visible");
    });
});

// Initial display
updateDisplay(remainingSeconds);
