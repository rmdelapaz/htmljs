// Lesson 19 — Persistent To-Do List
// Work through the TODOs in order. The HTML and CSS are done for you.
// Tip: keep DevTools → Application (Chrome) / Storage (Firefox) → Local Storage
// open while you work, so you can watch the "todos" key change.

// TODO: Complete each task

// 1. Write loadTodos() and saveTodos(todos):
//    - loadTodos: get "todos" from localStorage, JSON.parse,
//      return [] if nothing stored. Use try/catch!
//    - saveTodos: JSON.stringify the array and setItem

// 2. Write render(todos):
//    - Clear the #todo-list
//    - If no todos, show an empty state message
//    - For each todo, create an <li class="todo-item"> with:
//      a checkbox, a span.todo-text, and a button.delete-btn ("×")
//    - Add "done" class to the <li> if todo.done is true
//    - Set checkbox.checked to todo.done

// 3. Write addTodo(text):
//    - Push a new object { id: Date.now(), text, done: false }
//    - saveTodos, then render

// 4. Write toggleTodo(id) and deleteTodo(id):
//    - toggle: flip the done property of the matching todo
//    - delete: filter out the matching todo
//    - Both: saveTodos, then render

// 5. Write updateCount(todos):
//    - Count todos where done === false
//    - Update #count-display text: "X items left"

// 6. Hook up event listeners:
//    - #add-btn click and Enter key: addTodo
//    - Event delegation on #todo-list for checkbox change
//      and delete button click
//    - #clear-done-btn: filter out done todos, save, render

// 7. Load and render on page start
