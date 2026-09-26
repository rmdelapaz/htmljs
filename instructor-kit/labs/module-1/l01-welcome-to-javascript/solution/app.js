// L01 reference — the "Spot JavaScript in the Wild" console steps, saved as a script.
// Students type these into the Console one at a time; nothing here is new syntax
// to teach — it's a way to replay the demo on the projector.

// Step 4: read the page's title (a string)
console.log("document.title is:", document.title);

// Step 5: change the title — look at the browser tab
document.title = "I changed this with JavaScript!";
console.log("document.title is now:", document.title);

// Step 6: change the page's background color
document.body.style.backgroundColor = "lightyellow";
console.log("Background is now:", document.body.style.backgroundColor);

// Refresh the page: the title and color come back, because this only
// changed the copy of the page in your browser — never the site's files.
