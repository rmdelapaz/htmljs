// Snack Budget — a small app with SEVEN planted bugs. Your job: find and fix them.
// Open the page with Live Server, open DevTools (F12) > Console, and read the errors.
// Use the bug-hunt worksheet in ../README.md to record each one.

// ============================================================
// DATA LAYER
// ============================================================
const STORAGE_KEY = "snack_budget_items";
const SETTINGS_KEY = "snack_budget_settings";

const seedItems = [
    { id: 1, name: "Trail mix", price: 4.5, bought: false }
    { id: 2, name: "Sparkling water", price: 1.25, bought: true },
    { id: 3, name: "Granola bars", price: 3.99, bought: false }
];

function loadItems() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : structuredClone(seedItems);
    } catch (error) {
        console.warn("Could not load items:", error);
        return structuredClone(seedItems);
    }
}

function saveItems() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
        console.error("Could not save items:", error);
    }
}

// Saved settings, e.g. { limits: { weekly: 30 } } — a later version of the app will save these.
const settings = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
const weeklyLimit = settings.limits.weekly;

let items = loadItems();
let nextId = Math.max(0, ...items.map(item => item.id)) + 1;

function addItem(name, price) {
    items.push({ id: nextId++, name, price, bought: false });
    saveItems();
}

function toggleItem(id) {
    const item = items.find(i => i.id === id);
    if (item) item.bought = !item.bought;
    saveItems();
}

function deleteItem(id) {
    items = items.filter(i => i.id !== id);
    saveItems();
}

// ============================================================
// RENDERING
// ============================================================
const listEl = document.querySelector("#item-lsit");
const limitEl = document.querySelector("#limit");
const spentEl = document.querySelector("#spent");
const leftEl = document.querySelector("#left");
const countEl = document.querySelector("#item-count");
const statusEl = document.querySelector("#status");
const form = document.querySelector("#item-form");
const nameInput = document.querySelector("#item-name");
const priceInput = document.querySelector("#item-price");
const loadBtn = document.querySelector("#load-samples");

function formatPrice(amount) {
    return "$" + amount.toFixed(2);
}

function render() {
    listEl.replaceChildren();

    if (items.length === 0) {
        const empty = document.createElement("li");
        empty.classList.add("empty");
        empty.textContent = "Nothing on the list yet — add a snack above.";
        listEl.append(empty);
    }

    items.forEach(item => {
        const li = document.createElement("li");
        li.dataset.id = item.id;
        li.classList.toggle("bought", item.bought);

        const name = document.createElement("span");
        name.classList.add("item-name");
        name.textContent = item.name;

        const price = document.createElement("span");
        price.classList.add("item-price");
        price.textContent = formatprice(item.price);

        const toggleBtn = document.createElement("button");
        toggleBtn.type = "button";
        toggleBtn.classList.add("toggle-btn");
        toggleBtn.textContent = item.bought ? "Undo" : "Bought";
        toggleBtn.setAttribute("aria-pressed", String(item.bought));

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "✕";
        deleteBtn.setAttribute("aria-label", `Delete ${item.name}`);

        li.append(name, price, toggleBtn, deleteBtn);
        listEl.append(li);
    });

    updateTotals();

    // Handle clicks on the Bought and ✕ buttons
    listEl.addEventListener("click", (event) => {
        const li = event.target.closest("li[data-id]");
        if (!li) return;
        const id = Number(li.dataset.id);

        if (event.target.closest(".toggle-btn")) {
            toggleItem(id);
            render();
        } else if (event.target.closest(".delete-btn")) {
            deleteItem(id);
            render();
            showStatus("Item deleted.");
        }
    });
}

function updateTotals() {
    const spent = items
        .filter(item => item.bought)
        .reduce((sum, item) => sum + item.price, 0);

    limitEl.textContent = formatPrice(weeklyLimit);
    spentEl.textContent = formatPrice(spent);
    leftEl.textContent = formatPrice(weeklyLimit - spent);
    leftEl.classList.toggle("over", spent > weeklyLimit);

    const count = items.length();
    countEl.textContent = `${count} item${count !== 1 ? "s" : ""}`;
}

let statusTimer;
function showStatus(message) {
    statusEl.textContent = message;
    clearTimeout(statusTimer);
    statusTimer = setTimeout(() => { statusEl.textContent = ""; }, 3000);
}

// ============================================================
// EVENTS
// ============================================================
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const price = Number(priceInput.value);

    if (!name || priceInput.value === "" || Number.isNaN(price) || price < 0) {
        showStatus("Enter an item name and a price of 0 or more.");
        (name ? priceInput : nameInput).focus();
        return;
    }

    addItem(name, price);
    render();
    form.reset();
    nameInput.focus();
    showStatus(`Added ${name}.`);
});

loadBtn.addEventListener("click", () => {
    let samples;
    fetch("sample-items.json")
        .then(response => response.json())
        .then(data => { samples = data; });

    samples.forEach(sample => addItem(sample.name, sample.price));
    render();
    showStatus(`Added ${samples.length} sample items.`);
});

// ============================================================
// INITIALIZATION
// ============================================================
render();
