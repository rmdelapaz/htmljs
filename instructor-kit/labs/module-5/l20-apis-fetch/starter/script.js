// Lesson 20 — GitHub User Search
// Work through the TODOs in order. The HTML and CSS are done for you.
//
// Classroom note: without logging in, GitHub allows about 60 requests per hour
// per IP address, and a whole classroom can share ONE IP. If you start getting
// 403 responses, temporarily fetch("mock-user.json") instead of the GitHub URL.
// It is an octocat-shaped sample profile saved in this folder, so you can keep
// building your showUser() function while the limit resets.

// TODO: Complete each task

// 1. Get DOM references:
//    - #search-input, #search-btn, #result

// 2. Write showLoading():
//    - Set result innerHTML to a loading spinner + "Searching..."

// 3. Write showError(message):
//    - Set result innerHTML to the error message with "error" class

// 4. Write showUser(user):
//    - Build a .user-card with:
//      - Avatar image (user.avatar_url)
//      - Name (user.name or "No name")
//      - Username with @ prefix (user.login)
//      - Bio (user.bio or "No bio available")
//      - Stats: repos (user.public_repos), followers, following
//    - Use textContent or escaping for all data!

// 5. Write async searchUser(username):
//    - Show loading
//    - fetch https://api.github.com/users/{username}
//    - If response.ok: parse JSON, call showUser
//    - If response.status === 404: showError "User not found"
//    - If 403 or 429: showError "Rate limit reached" (GitHub allows ~60/hour)
//    - If other error: showError with the status
//    - Catch network errors: showError "Network error"

// 6. Hook up events:
//    - Search button click → searchUser
//    - Enter key in input → searchUser
//    - Bonus: debounce the input event for auto-search

// 7. Bonus: Add a link to the user's GitHub profile
//    (user.html_url) in the card
