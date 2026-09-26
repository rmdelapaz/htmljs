// L15 — Interactive Task List
// TODO: Complete each task

// 1. Listen for the form "submit" event
//    - Prevent the default form submission
//    - Get the input value (trim whitespace)
//    - If empty, return early
//    - Create a new <li class="task-item"> with this HTML inside:
//      <span class="task-text"></span>
//      <button class="complete-btn" aria-label="Mark done">✅</button>
//      <button class="delete-btn" aria-label="Delete task">🗑️</button>
//    - Put the task text into the span with textContent
//      (never paste user input into innerHTML — remember XSS!)
//    - Append it to #task-list
//    - Clear the input and refocus it
//    - Update the counter

// 2. Use event delegation on #task-list to handle clicks:
//    - If a .complete-btn is clicked: toggle the "done" class
//      on the parent .task-item
//    - If a .delete-btn is clicked: remove the parent .task-item
//    - Update the counter after each action

// 3. Write an updateCounter() function that counts the <li>
//    elements in #task-list and updates #counter text

// 4. Bonus: Add keyboard support
//    - Press Escape in the input to clear it
//    - Listen on the document for "d" key to toggle
//      a "dark-mode" class on the body
