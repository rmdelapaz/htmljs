// Lesson 17 — Registration Form with Real-Time Validation
// Work through the TODOs in order. The HTML and CSS are done for you.
// The form has `novalidate`, so the browser's own bubbles are off:
// every error message the user sees comes from YOUR code.

// TODO: Complete each task

// 1. Write helper functions:
//    - showError(input, message) — adds "input-error" class
//      and shows a .error-message span
//    - showSuccess(input) — adds "input-success" class
//      and removes any .error-message
//    - clearErrors(form) — removes all error states

// 2. Write validation functions for each field:
//    - validateUsername: required, 3–20 chars, letters/numbers/underscores
//    - validateEmail: required, valid email format
//    - validatePassword: required, 8+ chars, uppercase + lowercase + digit
//    - validateConfirm: required, matches password

// 3. Write a password strength meter:
//    - On "input" event on the password field
//    - Score: +1 for length >= 8, +1 for uppercase, +1 lowercase,
//      +1 digit, +1 special char
//    - Update the width and color of #strength-bar
//    - Update the text in #strength-text

// 4. Set up real-time validation:
//    - Track "touched" fields (blur marks a field as touched)
//    - On blur: validate the field
//    - On input: re-validate only if already touched

// 5. Handle form submission:
//    - preventDefault
//    - Run all validations
//    - If all valid: hide the form, show #success-message
//    - If invalid: focus the first invalid field
