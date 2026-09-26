// Lesson 20 — GitHub User Search (reference solution)
// This is the lesson's solution plus three classroom additions, each marked "Kit":
//   1. USE_MOCK: a clearly marked switch to use mock-user.json instead of GitHub
//      when the room is rate-limited (GitHub: ~60 unauthenticated requests/hour
//      PER IP, and a classroom usually shares one IP).
//   2. AUTO_SEARCH: the lesson's debounced search-as-you-type bonus. It is OFF by
//      default so a demo doesn't burn the room's hourly requests.
//   3. A stale-response guard: only the NEWEST search may update the page.

// ─────────────────────────────────────────────────────────────────────────────
// Kit: CLASSROOM SWITCHES
// Set USE_MOCK to true (or open the page as index.html?mock) to skip GitHub.
// In mock mode: "octocat" → sample profile, "ratelimit" → simulated 403,
// anything else → simulated 404. Needs Live Server (fetching a local file
// doesn't work from file://).
const USE_MOCK = false || new URLSearchParams(location.search).has("mock");
// Set AUTO_SEARCH to true to demo the debounced search-as-you-type bonus.
// Every pause in typing spends one of the ~60 hourly requests.
const AUTO_SEARCH = false;
// ─────────────────────────────────────────────────────────────────────────────

// 1. DOM references
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const result = document.querySelector("#result");

// 2. Loading state
function showLoading() {
    result.innerHTML = `
        <p class="status-message">
            <span class="loading-spinner" aria-hidden="true"></span> Searching...
        </p>
    `;
}

// 3. Error state
function showError(message) {
    result.innerHTML = `
        <p class="status-message error">${escapeHTML(message)}</p>
    `;
}

// Helper: escape HTML (the user's own search text goes into error messages)
function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

// 4. Display user — every piece of API text goes in with textContent
function showUser(user) {
    const card = document.createElement("div");
    card.classList.add("user-card");

    const img = document.createElement("img");
    img.src = user.avatar_url;
    img.alt = `${user.login}'s avatar`;

    const info = document.createElement("div");
    info.classList.add("user-info");

    const name = document.createElement("h2");
    name.textContent = user.name || "No name";

    // 7. Bonus: link to the profile
    const username = document.createElement("p");
    username.classList.add("username");
    const link = document.createElement("a");
    link.href = user.html_url;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = `@${user.login}`;
    username.append(link);

    const bio = document.createElement("p");
    bio.classList.add("bio");
    bio.textContent = user.bio || "No bio available";

    const stats = document.createElement("div");
    stats.classList.add("user-stats");
    // Safe to use innerHTML here: these three values are numbers from GitHub
    stats.innerHTML = `
        <span><strong>${Number(user.public_repos)}</strong> repos</span>
        <span><strong>${Number(user.followers)}</strong> followers</span>
        <span><strong>${Number(user.following)}</strong> following</span>
    `;

    info.append(name, username, bio, stats);
    card.append(img, info);

    result.innerHTML = "";
    if (USE_MOCK) {
        const badge = document.createElement("p");
        badge.className = "mock-badge";
        badge.textContent = "Mock mode — sample data, not live GitHub";
        result.append(badge);
    }
    result.append(card);
}

// Kit: one place that decides where the data comes from
async function requestUser(name) {
    if (!USE_MOCK) {
        return fetch(`https://api.github.com/users/${encodeURIComponent(name)}`);
    }
    // Mock mode: pretend to be GitHub, with a short delay so loading shows
    await new Promise(resolve => setTimeout(resolve, 400));
    const lower = name.toLowerCase();
    if (lower === "ratelimit") return new Response("{}", { status: 403 });
    if (lower !== "octocat") return new Response('{"message":"Not Found"}', { status: 404 });
    return fetch("mock-user.json");
}

// Kit: stale-response guard. With auto-search, "oc" and "octocat" can both be
// in flight; if "oc" answers LAST it would overwrite the right result.
let latestSearch = 0;

// 5. Search function
async function searchUser(username) {
    const trimmed = username.trim();
    if (!trimmed) return;

    const searchId = ++latestSearch;
    showLoading();

    try {
        const response = await requestUser(trimmed);
        if (searchId !== latestSearch) return;       // a newer search started

        if (response.status === 404) {
            showError(`User "${trimmed}" not found`);
            return;
        }

        if (response.status === 403 || response.status === 429) {
            showError("GitHub's hourly search limit reached — try again later");
            return;
        }

        if (!response.ok) {
            showError(`Server error: ${response.status}`);
            return;
        }

        const user = await response.json();
        if (searchId !== latestSearch) return;
        showUser(user);

    } catch (error) {
        // fetch() only rejects for network problems (offline, DNS, CORS)
        if (searchId !== latestSearch) return;
        console.warn(error);
        showError("Network error — check your connection");
    }
}

// 6. Event listeners
searchBtn.addEventListener("click", () => {
    searchUser(searchInput.value);
});

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchUser(searchInput.value);
    }
});

// Bonus: debounced auto-search (Lesson 18's debounce)
function debounce(fn, delay) {
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => fn(...args), delay);
    };
}

if (AUTO_SEARCH) {
    const autoSearch = debounce((value) => {
        if (value.trim().length >= 2) {
            searchUser(value);
        }
    }, 500);

    searchInput.addEventListener("input", (event) => {
        autoSearch(event.target.value);
    });
}

if (USE_MOCK) {
    console.info("GitHub search is in MOCK mode — try: octocat, ratelimit, anything else");
}
