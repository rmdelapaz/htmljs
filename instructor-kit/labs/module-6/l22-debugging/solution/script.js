// Snack Budget — FIXED version (instructor reference for the L22 bug hunt).
// Each planted bug is marked "FIX n" in the order the Console reveals them.
// Serve the folder with Live Server — "Load sample items" uses fetch().

// ============================================================
// DATA LAYER
// ============================================================
const STORAGE_KEY = "snack_budget_items";
const SETTINGS_KEY = "snack_budget_settings";

// FIX 1 (SyntaxError: Unexpected token '{'): the first object was missing
// the comma after its closing brace. The error pointed at the NEXT line.
const seedItems = [
    { id: 1, name: "Trail mix", price: 4.5, bought: false },
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

// FIX 2 (TypeError: Cannot read properties of undefined (reading 'weekly')):
// a first-time visitor has no saved settings, so settings.limits is undefined.
// Optional chaining + ?? gives a safe default (and keeps a real 0 limit).
const settings = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
const weeklyLimit = settings.limits?.weekly ?? 20;

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
// FIX 3 (TypeError: Cannot read properties of null (reading 'replaceChildren')):
// the selector was misspelled "#item-lsit", so querySelector returned null.
const listEl = document.querySelector("#item-list");
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
        name.textContent = item.name;               // user text -> textContent

        const price = document.createElement("span");
        price.classList.add("item-price");
        // FIX 4 (ReferenceError: formatprice is not defined): JavaScript is
        // case-sensitive — the function is formatPrice.
        price.textContent = formatPrice(item.price);

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
    // FIX 6: the delegated click listener used to be added HERE, so every
    // render stacked one more copy. It now lives below, added exactly once.
}

function updateTotals() {
    const spent = items
        .filter(item => item.bought)
        .reduce((sum, item) => sum + item.price, 0);

    limitEl.textContent = formatPrice(weeklyLimit);
    spentEl.textContent = formatPrice(spent);
    leftEl.textContent = formatPrice(weeklyLimit - spent);
    leftEl.classList.toggle("over", spent > weeklyLimit);

    // FIX 5 (TypeError: items.length is not a function): length is a
    // property, not a method — no parentheses.
    const count = items.length;
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
// FIX 6 (silent: "Bought" works once, then never again): one delegated
// listener, added ONCE, outside render().
listEl.addEventListener("click", (event) => {
    const li = event.target.closest("li[data-id]");
    if (!li) return;
    const id = Number(li.dataset.id);             // dataset values are strings

    if (event.target.closest(".toggle-btn")) {
        toggleItem(id);
        render();
    } else if (event.target.closest(".delete-btn")) {
        deleteItem(id);
        render();
        showStatus("Item deleted.");
    }
});

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

// FIX 7 (TypeError: Cannot read properties of undefined (reading 'forEach')
// when the button is clicked): fetch() is asynchronous — the old code used
// `samples` before the response arrived. await it inside an async handler.
loadBtn.addEventListener("click", async () => {
    try {
        const response = await fetch("sample-items.json");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const samples = await response.json();
        samples.forEach(sample => addItem(sample.name, sample.price));
        render();
        showStatus(`Added ${samples.length} sample items.`);
    } catch (error) {
        console.warn("Could not load samples:", error);
        showStatus("Couldn't load the samples. Are you using Live Server?");
    }
});

// ============================================================
// INITIALIZATION
// ============================================================
render();
