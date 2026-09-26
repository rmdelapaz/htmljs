// L10 Lab — Contact Book (STARTER)
// Write the five functions below, then uncomment the tests at the bottom.

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

// TODO 1. addContact(book, contact)
//    - Add a contact object to the book
//    - Don't add if a contact with the same name already exists
//    - Return true if added, false if duplicate


// TODO 2. findContact(book, name)
//    - Find and return the contact with the given name
//    - Return null if not found


// TODO 3. updateContact(book, name, updates)
//    - Find the contact by name, then apply the updates object
//    - Example: updateContact(contacts, "Alice", { phone: "555-9999" })
//    - Return true if updated, false if contact not found


// TODO 4. displayContact(contact)
//    - Show a formatted display of the contact:
//      "Name: Alice | Phone: 555-0101 | Email: alice@example.com | Group: work"


// TODO 5. listByGroup(book, group)
//    - Return an array of names of contacts in the given group


// Test your functions (remove the // from each line once it's written):
// addContact(contacts, { name: "Dave", phone: "555-0404", email: "dave@example.com", group: "family" });
// show(findContact(contacts, "Bob"));
// updateContact(contacts, "Alice", { phone: "555-9999", group: "friend" });
// displayContact(findContact(contacts, "Alice"));
// show(listByGroup(contacts, "work"));

show("Starter loaded — write your functions, then uncomment the tests.");
