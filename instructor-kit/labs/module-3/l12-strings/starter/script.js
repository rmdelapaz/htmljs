// L12 Lab — Text Formatting Utility (STARTER)
// Write each function using string methods (no manual character loops!)

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

// TODO 1. truncate(str, maxLength)
//    Shorten a string and add "..." if it exceeds maxLength
//    truncate("Hello World", 8)  → "Hello..."
//    truncate("Hi", 10)          → "Hi"


// TODO 2. slugify(str)
//    Convert a title to a URL-friendly slug
//    slugify("Hello World!")         → "hello-world"
//    slugify("  My Blog Post #1  ") → "my-blog-post-1"
//    Hint: this one needs replace() with a regular expression —
//    /[^a-z0-9\s-]/g removes "anything that isn't a letter, digit, space or hyphen";
//    /\s+/g matches "one or more whitespace characters".


// TODO 3. countWords(str)
//    Count the number of words in a string
//    countWords("Hello World")          → 2
//    countWords("  lots   of   spaces ") → 3


// TODO 4. initials(fullName)
//    Get initials from a full name
//    initials("Ray de la Paz")  → "RDLP"
//    initials("Alice")          → "A"


// TODO 5. maskEmail(email)
//    Mask an email address for privacy
//    maskEmail("ray@example.com")     → "r**@example.com"
//    maskEmail("alice@gmail.com")     → "a****@gmail.com"


// Test your functions (remove the // from each line once it's written):
// show(truncate("Hello World", 8));            // "Hello..."
// show(truncate("Hi", 10));                    // "Hi"
// show(slugify("Hello World!"));               // "hello-world"
// show(slugify("  My Blog Post #1  "));        // "my-blog-post-1"
// show(countWords("Hello World"));             // 2
// show(countWords("  lots   of   spaces "));   // 3
// show(countWords(""));                        // 0
// show(initials("Ray de la Paz"));             // "RDLP"
// show(initials("Alice"));                     // "A"
// show(maskEmail("ray@example.com"));          // "r**@example.com"
// show(maskEmail("alice@gmail.com"));          // "a****@gmail.com"

show("Starter loaded — write your functions, then uncomment the tests.");
