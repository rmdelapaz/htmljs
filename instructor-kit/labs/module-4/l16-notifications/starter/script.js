// L16 — Dynamic Notification System
// TODO: Complete each task

// 1. Write a showNotification(type, message) function:
//    - Create a <div class="notification {type}">
//    - Inside it, create a <span class="notification-text"> with the message
//    - Create a <button class="close-btn"> with "×" as text
//      and aria-label="Dismiss notification" (screen readers can't read "×" meaningfully)
//    - Append text span and close button to the notification div
//    - Prepend the notification to #notification-area
//    - Auto-remove after 5 seconds using setTimeout
//    - Update the count

// 2. Use event delegation on .controls to handle button clicks:
//    - If the button has a data-type attribute, call showNotification
//      with that type and an appropriate message
//    - If the "Clear All" button is clicked, remove all notifications

// 3. Use event delegation on #notification-area to handle close clicks:
//    - If a .close-btn is clicked, remove its parent .notification
//    - Update the count

// 4. Write an updateCount() function that counts .notification
//    elements and updates #count

// 5. Bonus: Use a DocumentFragment to add 5 notifications at once
//    when the "b" key (for "batch") is pressed
//    (Avoid shortcuts like Ctrl+Shift+N — browsers reserve those
//     and your page never even sees them)
