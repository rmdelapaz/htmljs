// L09 Lab — To-Do List Manager (SOLUTION)
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

const todos = ["Buy groceries", "Walk the dog", "Finish homework"];

function addTodo(list, task) {
    list.push(task);
    return list;
}

function removeTodo(list, task) {
    const index = list.indexOf(task);
    if (index === -1) {
        show(`Task not found: ${task}`);
    } else {
        list.splice(index, 1);
    }
    return list;
}

function insertTodoAt(list, index, task) {
    list.splice(index, 0, task);
    return list;
}

function listTodos(list) {
    if (list.length === 0) {
        show("No tasks — you're all caught up!");
        return;
    }
    list.forEach((task, i) => {
        show(`${i + 1}. ${task}`);
    });
}

function completeTodo(list) {
    if (list.length === 0) {
        show("Nothing to complete!");
        return;
    }
    const done = list.shift();
    show(`Completed: ${done}`);
    return done;
}

// Testing
show("— After addTodo(\"Read a book\") —");
addTodo(todos, "Read a book");
listTodos(todos);
// 1. Buy groceries / 2. Walk the dog / 3. Finish homework / 4. Read a book

show("\n— After removeTodo(\"Walk the dog\") —");
removeTodo(todos, "Walk the dog");
listTodos(todos);
// 1. Buy groceries / 2. Finish homework / 3. Read a book

show("\n— completeTodo() —");
completeTodo(todos);
// Completed: Buy groceries

show("\n— After insertTodoAt(1, \"Call dentist\") —");
insertTodoAt(todos, 1, "Call dentist");
listTodos(todos);
// 1. Finish homework / 2. Call dentist / 3. Read a book

// Edge cases worth showing the class
show("\n— Edge cases —");
removeTodo(todos, "Learn Rust");           // Task not found: Learn Rust
const empty = [];
listTodos(empty);                          // No tasks — you're all caught up!
completeTodo(empty);                       // Nothing to complete!
