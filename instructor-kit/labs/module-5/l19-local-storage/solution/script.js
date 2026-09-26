// Lesson 19 — Persistent To-Do List (reference solution)
// This is the lesson's solution with small accessibility upgrades marked
// "Kit upgrade": the checkbox and × button get accessible names
// (aria-label), buttons get type="button", and keyboard focus is put
// back where the user was after render() rebuilds the list.

const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");
const countDisplay = document.querySelector("#count-display");
const clearDoneBtn = document.querySelector("#clear-done-btn");

// 1. Load and save
function loadTodos() {
    try {
        const stored = localStorage.getItem("todos");
        return stored ? JSON.parse(stored) : [];      // null on first visit → []
    } catch (error) {
        console.warn("Error loading todos:", error);  // corrupted JSON → []
        return [];
    }
}

function saveTodos(todos) {
    try {
        localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
        console.error("Error saving todos:", error);  // e.g. QuotaExceededError
    }
}

// State: the array is the truth; the page is drawn from it
let todos = loadTodos();

// 2. Render
function render() {
    todoList.innerHTML = "";

    if (todos.length === 0) {
        const empty = document.createElement("li");
        empty.classList.add("empty-state");
        empty.textContent = "Nothing to do! Add a task above.";
        todoList.append(empty);
    } else {
        todos.forEach(todo => {
            const li = document.createElement("li");
            li.classList.add("todo-item");
            if (todo.done) li.classList.add("done");
            li.dataset.id = todo.id;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = todo.done;
            // Kit upgrade: without a name, a screen reader just says "checkbox"
            checkbox.setAttribute("aria-label", `Mark "${todo.text}" as done`);

            const text = document.createElement("span");
            text.classList.add("todo-text");
            text.textContent = todo.text;                 // user text → textContent

            const deleteBtn = document.createElement("button");
            deleteBtn.type = "button";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.textContent = "×";
            // Kit upgrade: otherwise it's announced as "times" or "multiplication"
            deleteBtn.setAttribute("aria-label", `Delete "${todo.text}"`);

            li.append(checkbox, text, deleteBtn);
            todoList.append(li);
        });
    }

    updateCount();
}

// 3. Add
function addTodo(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    todos.push({ id: Date.now(), text: trimmed, done: false });
    saveTodos(todos);
    render();
}

// 4. Toggle and delete
function toggleTodo(id) {
    todos = todos.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
    );
    saveTodos(todos);
    render();
    // Kit upgrade: render() replaced the checkbox, so put focus back on the new one
    const again = todoList.querySelector(`[data-id="${id}"] input[type="checkbox"]`);
    if (again) again.focus();
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    saveTodos(todos);
    render();
    todoInput.focus();   // Kit upgrade: the focused button is gone — don't strand focus
}

// 5. Update count
function updateCount() {
    const remaining = todos.filter(t => !t.done).length;
    countDisplay.textContent = `${remaining} item${remaining !== 1 ? "s" : ""} left`;
}

// 6. Event listeners
addBtn.addEventListener("click", () => {
    addTodo(todoInput.value);
    todoInput.value = "";
    todoInput.focus();
});

todoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTodo(todoInput.value);
        todoInput.value = "";
    }
});

// Event delegation: ONE listener on the <ul> handles every checkbox and ×,
// including items created later by render()
todoList.addEventListener("click", (event) => {
    const li = event.target.closest(".todo-item");
    if (!li) return;
    const id = Number(li.dataset.id);   // dataset values are strings!

    if (event.target.type === "checkbox") {
        toggleTodo(id);
    } else if (event.target.matches(".delete-btn")) {
        deleteTodo(id);
    }
});

clearDoneBtn.addEventListener("click", () => {
    todos = todos.filter(t => !t.done);
    saveTodos(todos);
    render();
});

// 7. Initial render
render();
