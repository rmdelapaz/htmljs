// L16 — Dynamic Notification System: reference solution

const notificationArea = document.querySelector("#notification-area");
const controls = document.querySelector(".controls");
const countDisplay = document.querySelector("#count");

const messages = {
    success: "Operation completed successfully!",
    warning: "Please check your input.",
    error: "Something went wrong. Try again.",
    info: "Here's some useful information."
};

// 4. Update the notification count
function updateCount() {
    countDisplay.textContent =
        notificationArea.querySelectorAll(".notification").length;
}

// Build one notification element (not yet on the page).
// Shared by showNotification() and the batch bonus.
function buildNotification(type, message) {
    const notification = document.createElement("div");
    notification.classList.add("notification", type);

    const text = document.createElement("span");
    text.classList.add("notification-text");
    text.textContent = message;               // textContent — XSS-safe

    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.classList.add("close-btn");
    closeBtn.textContent = "×";
    closeBtn.setAttribute("aria-label", "Dismiss notification");

    notification.append(text, closeBtn);

    // Auto-remove after 5 seconds (remove() on a detached element is harmless)
    setTimeout(() => {
        notification.remove();
        updateCount();
    }, 5000);

    return notification;
}

// 1. Show a notification
function showNotification(type, message) {
    notificationArea.prepend(buildNotification(type, message));
    updateCount();
}

// 2. Event delegation on the controls
controls.addEventListener("click", (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;

    const type = btn.dataset.type;
    if (type) {
        showNotification(type, messages[type]);
    } else if (btn.classList.contains("btn-clear")) {
        notificationArea.replaceChildren();    // remove every child at once
        updateCount();
    }
});

// 3. Event delegation for close buttons — works for toasts created later
notificationArea.addEventListener("click", (event) => {
    const closeBtn = event.target.closest(".close-btn");
    if (closeBtn) {
        closeBtn.closest(".notification").remove();
        updateCount();
    }
});

// 5. Bonus: batch of five with the "b" key, inserted in ONE step
document.addEventListener("keydown", (event) => {
    if (event.key === "b" && !event.ctrlKey && !event.metaKey && !event.altKey) {
        const types = ["success", "warning", "error", "info", "success"];
        const fragment = document.createDocumentFragment();
        types.forEach(type => {
            fragment.append(buildNotification(type, messages[type] || "Batch notification"));
        });
        notificationArea.prepend(fragment);    // the fragment itself disappears
        updateCount();
        console.log("Fragment is now empty:", fragment.childNodes.length); // 0
    }
});
