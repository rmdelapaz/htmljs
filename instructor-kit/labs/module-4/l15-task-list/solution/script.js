// L15 — Interactive Task List: reference solution

const form = document.querySelector("#add-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const counter = document.querySelector("#counter");

// 3. Helper: update the task counter
function updateCounter() {
    const total = taskList.querySelectorAll("li").length;
    const done = taskList.querySelectorAll("li.done").length;
    counter.textContent = `${total} task${total !== 1 ? "s" : ""} (${done} done)`;
}

// 1. Handle form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();                 // no page reload

    const text = taskInput.value.trim();
    if (!text) return;

    const li = document.createElement("li");
    li.classList.add("task-item");

    // Fixed markup only — no user data inside the template
    li.innerHTML = `
        <span class="task-text"></span>
        <button class="complete-btn" aria-label="Mark done">✅</button>
        <button class="delete-btn" aria-label="Delete task">🗑️</button>
    `;
    // User text goes in with textContent, so "<img onerror=...>" stays harmless text
    li.querySelector(".task-text").textContent = text;

    taskList.appendChild(li);
    taskInput.value = "";
    taskInput.focus();
    updateCounter();
});

// 2. Event delegation: ONE listener handles every current and future task
taskList.addEventListener("click", (event) => {
    const taskItem = event.target.closest(".task-item");
    if (!taskItem) return;                  // clicked the gap between tasks

    // closest(), not matches(): still works if a button gets an icon <span> inside
    if (event.target.closest(".complete-btn")) {
        taskItem.classList.toggle("done");
    }
    if (event.target.closest(".delete-btn")) {
        taskItem.remove();
        taskInput.focus();                  // don't strand keyboard focus on a removed button
    }
    updateCounter();
});

// 4. Bonus: keyboard support
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        taskInput.value = "";
    }
});

document.addEventListener("keydown", (event) => {
    // Only toggle dark mode when not typing in the input,
    // and leave browser shortcuts like Ctrl + D (bookmark) alone
    if (event.key === "d" && document.activeElement !== taskInput
        && !event.ctrlKey && !event.metaKey && !event.altKey) {
        document.body.classList.toggle("dark-mode");
    }
});

updateCounter();
