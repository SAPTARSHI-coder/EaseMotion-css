# CSS Validation Shake Input

A pure CSS form input that provides a visual horizontal shake animation when an invalid submission is attempted. 

## Features

- **Pure CSS Validation**: Utilizes native HTML form validation coupled with the `:user-invalid` pseudo-class to ensure the shake animation only triggers after a genuine user submission attempt, avoiding aggressive animations on fresh empty fields.
- **Micro-Animations**: Uses `transform: translateX(...)` in a custom cubic-bezier `@keyframes` animation to deliver a crisp, horizontal shake without triggering layout repaints.
- **Accessible Design**: 
  - Standard `<label>`, native `<input type="email" required>`, and `aria-describedby` connect the elements.
  - Fully navigable and submittable using a keyboard.
  - Generates clear, non-color-reliant error messages explicitly shown via CSS sibling selectors (`~`).
- **Focus Rings**: Employs `:focus-visible` for both standard and invalid states to maintain usability and high visibility across interactions.
- **Reduced Motion Support**: Captures system preferences via `@media (prefers-reduced-motion: reduce)` to gracefully disable the shake animation while preserving the static visual invalid styling and error message text.

## Usage

1. Open `demo.html` in a web browser.
2. Ensure the input is empty or contains an invalid email address (e.g. `foo`).
3. Click "Subscribe" or hit `Enter`.
4. Observe the native browser validation block the submission, while CSS `:user-invalid` styling kicks in to apply the error colors, render the text message, and perform the shake animation.
