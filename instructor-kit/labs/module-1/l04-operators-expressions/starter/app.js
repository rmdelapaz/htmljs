// ── L02 ── Linking Scripts & the Console
// My first external JavaScript file!
console.log("app.js is connected and running!");

// Experiment with different console methods
console.log("Regular log message");
console.warn("This is a warning");
console.error("This is an error (not a real one!)");
console.info("Here's some info");

// Try some math
console.log("5 + 3 =", 5 + 3);
console.log("10 * 4 =", 10 * 4);

// Try a table
console.table(["HTML", "CSS", "JavaScript"]);

// ── L03 ── Variables & Data Types
// User Profile
const firstName = "Ray";
const lastName = "de la Paz";
let age = 30;
const email = "ray@example.com";
let isPremiumMember = false;
let accountBalance = 149.99;
let nickname = null;

// Log each variable with its type
console.log(`firstName: ${firstName} (${typeof firstName})`);
console.log(`lastName: ${lastName} (${typeof lastName})`);
console.log(`age: ${age} (${typeof age})`);
console.log(`email: ${email} (${typeof email})`);
console.log(`isPremiumMember: ${isPremiumMember} (${typeof isPremiumMember})`);
console.log(`accountBalance: ${accountBalance} (${typeof accountBalance})`);
console.log(`nickname: ${nickname} (${typeof nickname})`);  // "object" — the typeof null bug

// Greeting with template literal
console.log(`Hello, ${firstName} ${lastName}! You are ${age} years old.`);

// Change some values
age = 31;
isPremiumMember = true;
nickname = "Ace";
accountBalance = accountBalance - 29.99;

console.log("\n--- After updates ---");
console.log(`Age: ${age}`);
console.log(`Premium: ${isPremiumMember}`);
console.log(`Nickname: ${nickname}`);
console.log(`Balance: $${accountBalance.toFixed(2)}`); // "120.00"
// (Without .toFixed(2) you'd see 120.00000000000001 — computers store
//  decimals in binary, so tiny rounding errors creep in. Lesson 4 has more.)

// Try changing a const — uncomment to see the error:
// firstName = "Raymond";  // TypeError: Assignment to constant variable

// ── L04 ── Operators & Expressions
// Tip Calculator

// TODO: Set up these variables
// const billAmount = 85.50;
// const tipPercentage = 20;  // 20%
// const numberOfPeople = 3;

// TODO: Calculate:
// 1. tipAmount (billAmount * tipPercentage / 100)
// 2. totalWithTip (billAmount + tipAmount)
// 3. perPerson (totalWithTip / numberOfPeople)

// TODO: Log the results using template literals
// "Bill: $85.50"
// "Tip (20%): $17.10"
// "Total: $102.60"
// "Per person: $34.20"

// BONUS: Check if the bill is "expensive" (over $100 after tip)
// Log whether it is using a comparison
