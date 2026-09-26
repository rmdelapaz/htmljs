// L14 — Dynamic Profile Card Editor: reference solution

const log = document.querySelector("#log");
function note(message) {
    console.log(message);
    const li = document.createElement("li");
    li.textContent = message;   // textContent, never innerHTML
    log.append(li);
}

// 1. Change the name
const nameEl = document.querySelector("#name");
nameEl.textContent = "Ray de la Paz";
note(`1. name → ${nameEl.textContent}`);

// 2. Update the bio
document.querySelector("#bio").textContent =
    "Technical trainer and course developer who loves building things.";
note("2. bio updated");

// 3. Change the location
document.querySelector("#location").textContent = "📍 Henderson, NV";
note("3. location updated");

// 4. Update the website (text AND href)
const website = document.querySelector("#website");
website.textContent = "Visit Portfolio";
website.href = "https://rays-home.netlify.app/";
note(`4. link → ${website.getAttribute("href")}`);

// 5. Add the highlight class
const card = document.querySelector("#card");
card.classList.add("highlight");
note(`5. classes → ${card.className}`);

// 6. Change background color (an INLINE style)
card.style.backgroundColor = "#eff6ff";
note(`6. inline background → ${card.style.backgroundColor}`);

// 7. Read data-user-id (kebab-case in HTML, camelCase in dataset)
note(`7. data-user-id → ${card.dataset.userId}`);

// 8. Add data-status
card.dataset.status = "active";
note(`8. data-status → ${card.getAttribute("data-status")}`);

// 9. Toggle dark mode on and off.
// The inline background from step 6 beats the .dark class, so the card would
// stay light blue while its text turns light. Clear the inline style first —
// that's "prefer classes over inline styles" in action.
card.style.backgroundColor = "";
card.classList.toggle("dark");   // on
note(`9. dark on? ${card.classList.contains("dark")}`);
card.classList.toggle("dark");   // off again
note(`9. dark on? ${card.classList.contains("dark")} (use the button to toggle)`);

// 10. Bonus: update all fields at once
function updateProfile({ name, bio, location, website }) {
    if (name) document.querySelector("#name").textContent = name;
    if (bio) document.querySelector("#bio").textContent = bio;
    if (location) document.querySelector("#location").textContent = `📍 ${location}`;
    if (website) {
        const el = document.querySelector("#website");
        el.href = website;
        el.textContent = "Visit Website";
    }
    note(`10. updateProfile → ${name ?? "(name unchanged)"}`);
}

// --- Button wiring (events are Lesson 15) ---
document.querySelector("#toggle-dark").addEventListener("click", () => {
    card.classList.toggle("dark");
    note(`dark mode ${card.classList.contains("dark") ? "on" : "off"}`);
});
document.querySelector("#load-sample").addEventListener("click", () => {
    updateProfile({
        name: "Alice Smith",
        bio: "UX designer and coffee enthusiast.",
        location: "Portland, OR",
        website: "https://alice.dev"
    });
});
