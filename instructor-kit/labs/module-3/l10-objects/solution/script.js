// L10 Lab — Contact Book (SOLUTION)
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

// Contact book — an array of contact objects
const contacts = [
    { name: "Alice", phone: "555-0101", email: "alice@example.com", group: "work" },
    { name: "Bob", phone: "555-0202", email: "bob@example.com", group: "family" },
    { name: "Carol", phone: "555-0303", email: "carol@example.com", group: "work" }
];

function addContact(book, contact) {
    const exists = book.find(c => c.name === contact.name);
    if (exists) {
        show(`Contact "${contact.name}" already exists.`);
        return false;
    }
    book.push(contact);
    return true;
}

function findContact(book, name) {
    const contact = book.find(c => c.name === name);
    return contact || null;
}

function updateContact(book, name, updates) {
    const contact = findContact(book, name);
    if (!contact) {
        show(`Contact "${name}" not found.`);
        return false;
    }
    Object.assign(contact, updates);
    return true;
}

function displayContact(contact) {
    if (!contact) {
        show("No contact to display.");
        return;
    }
    const parts = Object.entries(contact)
        .map(([key, value]) => `${key[0].toUpperCase() + key.slice(1)}: ${value}`)
        .join(" | ");
    show(parts);
}

function listByGroup(book, group) {
    return book
        .filter(c => c.group === group)
        .map(c => c.name);
}

// Testing
show("— addContact —");
show("Dave added?", addContact(contacts, {
    name: "Dave", phone: "555-0404",
    email: "dave@example.com", group: "family"
}));
// Dave added? true
show("Alice added?", addContact(contacts, {
    name: "Alice", phone: "555-0000",
    email: "new@example.com", group: "other"
}));
// Contact "Alice" already exists.  →  Alice added? false

show("\n— findContact —");
show(findContact(contacts, "Bob"));
// {"name":"Bob","phone":"555-0202","email":"bob@example.com","group":"family"}
show(findContact(contacts, "Zed"));
// null

show("\n— updateContact + displayContact —");
updateContact(contacts, "Alice", { phone: "555-9999", group: "friend" });
displayContact(findContact(contacts, "Alice"));
// Name: Alice | Phone: 555-9999 | Email: alice@example.com | Group: friend
updateContact(contacts, "Zed", { phone: "555-0000" });
// Contact "Zed" not found.

show("\n— listByGroup —");
show("family:", listByGroup(contacts, "family"));
// family: ["Bob","Dave"]
show("work:", listByGroup(contacts, "work"));
// work: ["Carol"]   (Alice moved to "friend" above)
