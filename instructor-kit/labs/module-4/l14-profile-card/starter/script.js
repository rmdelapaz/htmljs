// L14 — Dynamic Profile Card Editor
// Complete each task using DOM methods. Save, and Live Server reloads the page.
// Open the Console (F12) to see your console.log output.

// Small helper: also lists each step under "What your script did"
const log = document.querySelector("#log");
function note(message) {
    console.log(message);
    const li = document.createElement("li");
    li.textContent = message;   // textContent, never innerHTML
    log.append(li);
}

// TODO 1. Change the name to your name

// TODO 2. Update the bio text

// TODO 3. Change the location

// TODO 4. Update the website link (both text and href)

// TODO 5. Add the "highlight" class to the card

// TODO 6. Change the card's background color to a light blue

// TODO 7. Read and log the card's data-user-id

// TODO 8. Add a new data attribute: data-status="active"

// TODO 9. Toggle the "dark" class on and off the card
//         (Click the "Toggle dark mode" button. What happens to the background? Why?)

// TODO 10. Bonus: Create a function that takes a profile object
//          and updates all fields at once
//          updateProfile({ name: "Ray", bio: "...", location: "...", website: "..." })


// --- Provided: button wiring (events are Lesson 15 — just read along) ---
document.querySelector("#toggle-dark").addEventListener("click", () => {
    document.querySelector("#card").classList.toggle("dark");
});
document.querySelector("#load-sample").addEventListener("click", () => {
    if (typeof updateProfile === "function") {
        updateProfile({
            name: "Alice Smith",
            bio: "UX designer and coffee enthusiast.",
            location: "Portland, OR",
            website: "https://alice.dev"
        });
    } else {
        note("Write updateProfile() first (task 10).");
    }
});
