// L09 Lab — To-Do List Manager (STARTER)
// Write the five functions below, then uncomment the tests at the bottom.

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

// Start with this to-do list
const todos = ["Buy groceries", "Walk the dog", "Finish homework"];

// TODO 1. addTodo(list, task)
//    - Add a task to the end of the list
//    - Return the updated list


// TODO 2. removeTodo(list, task)
//    - Find and remove the task from the list
//    - If the task doesn't exist, show "Task not found: [task]"
//    - Return the updated list


// TODO 3. insertTodoAt(list, index, task)
//    - Insert a task at a specific position
//    - Return the updated list


// TODO 4. listTodos(list)
//    - Show each task with a number: "1. Buy groceries"
//    - If the list is empty, show "No tasks — you're all caught up!"


// TODO 5. completeTodo(list)
//    - Remove and return the FIRST task (treat the list as a queue)
//    - Show "Completed: [task]"
//    - If list is empty, show "Nothing to complete!"


// Test your functions (remove the // from each line once it's written):
// addTodo(todos, "Read a book");
// listTodos(todos);
// removeTodo(todos, "Walk the dog");
// listTodos(todos);
// completeTodo(todos);
// insertTodoAt(todos, 1, "Call dentist");
// listTodos(todos);

show("Starter loaded — write your functions, then uncomment the tests.");
