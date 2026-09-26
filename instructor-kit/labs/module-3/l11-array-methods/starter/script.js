// L11 Lab — Product Catalog Pipeline (STARTER)
// Solve each challenge using array methods — no for/while loops!

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

const products = [
    { id: 1, name: "Wireless Mouse", price: 29.99, category: "accessories", rating: 4.5, inStock: true },
    { id: 2, name: "Mechanical Keyboard", price: 89.99, category: "accessories", rating: 4.8, inStock: true },
    { id: 3, name: "USB-C Hub", price: 34.99, category: "accessories", rating: 4.2, inStock: false },
    { id: 4, name: "Monitor Stand", price: 49.99, category: "furniture", rating: 4.0, inStock: true },
    { id: 5, name: "Desk Lamp", price: 39.99, category: "furniture", rating: 4.6, inStock: true },
    { id: 6, name: "Webcam HD", price: 59.99, category: "electronics", rating: 4.3, inStock: false },
    { id: 7, name: "Headphones", price: 149.99, category: "electronics", rating: 4.7, inStock: true },
    { id: 8, name: "Mousepad XL", price: 14.99, category: "accessories", rating: 4.1, inStock: true }
];

// TODO 1. Get an array of all product names
// Expected: ["Wireless Mouse", "Mechanical Keyboard", ...]
// const names = ...
// show("1. Names:", names);


// TODO 2. Get only in-stock products
// Expected: array of 6 product objects
// const inStock = ...
// show("2. In stock:", inStock.length);


// TODO 3. Get in-stock accessories sorted by price (cheapest first)
// Expected: [Mousepad XL, Wireless Mouse, Mechanical Keyboard]
// const accessories = ...
// show("3. Accessories:", accessories.map(p => p.name));


// TODO 4. Calculate the total value of all in-stock products
// Expected: 374.94 (sum of prices where inStock is true)
// Tip: show it with .toFixed(2) — the raw number has a floating-point tail.
// const totalValue = ...
// show("4. Total value:", totalValue.toFixed(2));


// TODO 5. Are all products rated 4.0 or higher?
// Expected: true
// const allHighRated = ...
// show("5. All rated 4.0+?", allHighRated);


// TODO 6. Create a "sale" version: in-stock products with 20% off,
//    formatted as "Product Name — $XX.XX (was $XX.XX)"
//    sorted by sale price ascending
// const saleList = ...
// show("6. Sale list:");
// saleList.forEach(line => show("   " + line));

show("Starter loaded — solve each challenge, then uncomment its show() line.");
