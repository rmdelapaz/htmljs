// L12 Lab — Text Formatting Utility (SOLUTION)
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

// 1. Truncate
function truncate(str, maxLength) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - 3) + "...";
}

// 2. Slugify
function slugify(str) {
    return str
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")   // Remove special chars
        .replace(/\s+/g, "-")            // Spaces to hyphens
        .replace(/-+/g, "-");            // Collapse multiple hyphens
}

// 3. Count Words
function countWords(str) {
    const trimmed = str.trim();
    if (trimmed === "") return 0;
    return trimmed.split(/\s+/).length;
}

// 4. Initials
function initials(fullName) {
    return fullName
        .trim()
        .split(/\s+/)
        .map(word => word[0])
        .join("")
        .toUpperCase();
}

// 5. Mask Email
function maskEmail(email) {
    const [local, domain] = email.split("@");
    const masked = local[0] + "*".repeat(local.length - 1);
    return `${masked}@${domain}`;
}

// Testing — each line shows the call, then its result.
// JSON.stringify puts quotes around strings so trailing spaces are visible.
function check(label, result) {
    show(`${label.padEnd(36)} → ${JSON.stringify(result)}`);
}

check('truncate("Hello World", 8)', truncate("Hello World", 8));          // "Hello..."
check('truncate("Hi", 10)', truncate("Hi", 10));                          // "Hi"
check('slugify("Hello World!")', slugify("Hello World!"));                // "hello-world"
check('slugify("  My Blog Post #1  ")', slugify("  My Blog Post #1  "));  // "my-blog-post-1"
check('countWords("Hello World")', countWords("Hello World"));            // 2
check('countWords("  lots   of   spaces ")', countWords("  lots   of   spaces ")); // 3
check('countWords("")', countWords(""));                                  // 0
check('initials("Ray de la Paz")', initials("Ray de la Paz"));            // "RDLP"
check('initials("Alice")', initials("Alice"));                            // "A"
check('maskEmail("ray@example.com")', maskEmail("ray@example.com"));      // "r**@example.com"
check('maskEmail("alice@gmail.com")', maskEmail("alice@gmail.com"));      // "a****@gmail.com"
