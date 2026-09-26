// Lesson 18 — Pomodoro Timer with Animated Progress
// Work through the TODOs in order. The HTML and CSS are done for you.

// TODO: Complete each task

// The circumference of the circle (2 * π * r where r = 130)
const CIRCUMFERENCE = 2 * Math.PI * 130;  // ~816.81

// 1. Get DOM references:
//    - #progress-ring, #timer-display, #timer-label, #done-message
//    - #start-btn, #pause-btn, #reset-btn
//    - All .preset-btn buttons

// 2. Set up state variables:
//    - totalSeconds (default 25 * 60)
//    - remainingSeconds (starts equal to totalSeconds)
//    - intervalId (null when not running)
//    - isRunning (boolean)

// 3. Write updateDisplay(seconds):
//    - Convert seconds to MM:SS format
//    - Update #timer-display text
//    - Calculate progress (0 to 1) and update
//      stroke-dashoffset on #progress-ring
//      Formula: CIRCUMFERENCE * (1 - remaining / total)

// 4. Write start():
//    - If already running, return
//    - Set isRunning = true, hide done message
//    - Use setInterval (1000ms) to decrement remainingSeconds
//    - Call updateDisplay each tick
//    - When remainingSeconds hits 0, clearInterval,
//      show done message, mark not running

// 5. Write pause() and reset():
//    - pause: clearInterval, set isRunning = false
//    - reset: pause, set remainingSeconds = totalSeconds,
//      updateDisplay, hide done message

// 6. Hook up buttons:
//    - Start → start()
//    - Pause → pause()
//    - Reset → reset()

// 7. Hook up preset buttons:
//    - On click: set totalSeconds and remainingSeconds
//    - Reset display, highlight selected preset
//    - Pause if running

// 8. Bonus: Change the ring color to red when < 30 seconds remain
//    and to green when timer completes
