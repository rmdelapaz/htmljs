// Lesson 17 — Registration Form with Real-Time Validation (reference solution)
// This is the lesson's solution, with three small accessibility upgrades
// marked "Kit upgrade": aria-invalid + aria-describedby on each field,
// and focus moved to the success message.

const form = document.querySelector("#register-form");
const strengthBar = document.querySelector("#strength-bar");
const strengthText = document.querySelector("#strength-text");
const successMessage = document.querySelector("#success-message");
const touched = new Set();

// 1. Helper functions
function showError(input, message) {
    input.classList.remove("input-success");
    input.classList.add("input-error");

    let error = input.parentElement.querySelector(".error-message");
    if (!error) {
        error = document.createElement("span");
        error.classList.add("error-message");
        error.setAttribute("role", "alert");
        error.id = `${input.id}-error`;
        input.after(error);
    }
    error.textContent = message;          // textContent, never innerHTML

    // Kit upgrade: tell assistive tech the field is invalid and why
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedby", error.id);
}

function showSuccess(input) {
    input.classList.remove("input-error");
    input.classList.add("input-success");
    const error = input.parentElement.querySelector(".error-message");
    if (error) error.remove();

    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-describedby");
}

function clearErrors(form) {
    form.querySelectorAll(".error-message").forEach(el => el.remove());
    form.querySelectorAll(".input-error, .input-success").forEach(el => {
        el.classList.remove("input-error", "input-success");
        el.removeAttribute("aria-invalid");
        el.removeAttribute("aria-describedby");
    });
}

// 2. Validation functions — each returns true or false
function validateUsername(input) {
    const value = input.value.trim();
    if (!value) {
        showError(input, "Username is required");
        return false;
    }
    if (value.length < 3 || value.length > 20) {
        showError(input, "Username must be 3–20 characters");
        return false;
    }
    if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        showError(input, "Only letters, numbers, and underscores");
        return false;
    }
    showSuccess(input);
    return true;
}

function validateEmail(input) {
    const value = input.value.trim();
    if (!value) {
        showError(input, "Email is required");
        return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        showError(input, "Please enter a valid email address");
        return false;
    }
    showSuccess(input);
    return true;
}

function validatePassword(input) {
    const value = input.value;
    if (!value) {
        showError(input, "Password is required");
        return false;
    }
    if (value.length < 8) {
        showError(input, "Password must be at least 8 characters");
        return false;
    }
    if (!/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/\d/.test(value)) {
        showError(input, "Include uppercase, lowercase, and a number");
        return false;
    }
    showSuccess(input);
    return true;
}

function validateConfirm(input) {
    const value = input.value;
    const password = form.elements.password.value;
    if (!value) {
        showError(input, "Please confirm your password");
        return false;
    }
    if (value !== password) {
        showError(input, "Passwords do not match");
        return false;
    }
    showSuccess(input);
    return true;
}

// 3. Password strength meter (score 0–5)
form.elements.password.addEventListener("input", () => {
    const value = form.elements.password.value;
    let score = 0;

    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[a-z]/.test(value)) score++;
    if (/\d/.test(value)) score++;
    if (/[^a-zA-Z0-9]/.test(value)) score++;

    const percent = (score / 5) * 100;
    strengthBar.style.width = percent + "%";

    const levels = [
        { label: "", color: "#e2e8f0" },
        { label: "Very weak", color: "#dc2626" },
        { label: "Weak", color: "#c2410c" },
        { label: "Fair", color: "#a16207" },
        { label: "Strong", color: "#15803d" },
        { label: "Very strong", color: "#166534" }
    ];

    strengthBar.style.backgroundColor = levels[score].color;
    strengthText.textContent = value ? levels[score].label : "";
    strengthText.style.color = levels[score].color;
});

// 4. Real-time validation: blur marks "touched", input re-validates touched fields
const validators = {
    username: validateUsername,
    email: validateEmail,
    password: validatePassword,
    "confirm-password": validateConfirm
};

Object.keys(validators).forEach(name => {
    const input = form.elements[name];

    input.addEventListener("blur", () => {
        touched.add(name);
        validators[name](input);
    });

    input.addEventListener("input", () => {
        if (touched.has(name)) {
            validators[name](input);
        }
        // Changing the password can make "confirm" match (or stop matching)
        if (name === "password" && touched.has("confirm-password")) {
            validateConfirm(form.elements["confirm-password"]);
        }
    });
});

// 5. Handle submission
form.addEventListener("submit", (event) => {
    event.preventDefault();               // first line — always

    // Mark all fields as touched
    Object.keys(validators).forEach(name => touched.add(name));

    // map() runs EVERY validator (so every error shows), then every() checks them
    const results = Object.entries(validators).map(
        ([name, fn]) => fn(form.elements[name])
    );

    if (results.every(Boolean)) {
        // In a real app you'd now send the data:
        //   fetch("/api/register", { method: "POST", body: new FormData(form) })
        // and the SERVER must re-check every rule above — client-side
        // validation is for user experience, not security.
        form.style.display = "none";
        successMessage.style.display = "block";
        successMessage.focus();           // Kit upgrade: announce + move focus
    } else {
        const firstInvalid = form.querySelector(".input-error");
        if (firstInvalid) firstInvalid.focus();
    }
});
