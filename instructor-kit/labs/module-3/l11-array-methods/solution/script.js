// L11 Lab — Product Catalog Pipeline (SOLUTION)
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

// 1. All product names
const names = products.map(p => p.name);
show("1. Names:", names);

// 2. In-stock products
const inStock = products.filter(p => p.inStock);
show("2. In stock:", inStock.length);  // 6

// 3. In-stock accessories sorted by price
const accessories = products
    .filter(p => p.inStock && p.category === "accessories")
    .sort((a, b) => a.price - b.price);
show("3. Accessories:", accessories.map(p => p.name));
// ["Mousepad XL", "Wireless Mouse", "Mechanical Keyboard"]

// 4. Total value of in-stock products
const totalValue = products
    .filter(p => p.inStock)
    .reduce((sum, p) => sum + p.price, 0);
show("4. Total value:", totalValue.toFixed(2));  // "374.94"
show("   (raw value:", String(totalValue) + ")");  // 374.94000000000005

// 5. All rated 4.0+?
const allHighRated = products.every(p => p.rating >= 4.0);
show("5. All rated 4.0+?", allHighRated);  // true

// 6. Sale version
const saleList = products
    .filter(p => p.inStock)
    .map(p => ({
        ...p,
        salePrice: +(p.price * 0.80).toFixed(2)
    }))
    .sort((a, b) => a.salePrice - b.salePrice)
    .map(p => `${p.name} — $${p.salePrice.toFixed(2)} (was $${p.price.toFixed(2)})`);
show("6. Sale list:");
saleList.forEach(line => show("   " + line));
// Mousepad XL — $11.99 (was $14.99)
// Wireless Mouse — $23.99 (was $29.99)
// Desk Lamp — $31.99 (was $39.99)
// Monitor Stand — $39.99 (was $49.99)
// Mechanical Keyboard — $71.99 (was $89.99)
// Headphones — $119.99 (was $149.99)

// The original catalog is untouched: filter() ran before sort(),
// so sort() only reordered the NEW filtered array.
show("\nOriginal order kept:", products.map(p => p.id));  // [1,2,3,4,5,6,7,8]
