# Native Form Validation UX Architecture

## What does this do?
Proposes a vital structural UX refactor to natively support HTML5 form validation feedback (such as red error borders and tinted backgrounds) across all input components by heavily implementing the modern `:user-invalid` pseudo-class.

## How is it used?
Maintainers and core contributors must systematically audit all form-related components—specifically targeting `components/inputs.css`, `components/textarea.css`, and `components/select.css`. 

Currently, if a user types an invalid email address into an EaseMotion input field, absolutely nothing happens visually. The developer is forced to write custom JavaScript to manually attach `.is-error` classes.

To fix this natively, all input elements must be updated to utilize `:user-invalid` (with an `:invalid:not(:placeholder-shown)` fallback for legacy browsers):

```css
/* ✅ GOOD: Perfect native form validation UX */
.ease-input:user-invalid,
.ease-input:invalid:not(:placeholder-shown) {
  border-color: var(--ease-color-danger, #ef4444);
  background-color: var(--ease-bg-danger-light, #fef2f2);
}

/* Ensure focus rings map to the error state */
.ease-input:user-invalid:focus-visible {
  outline-color: var(--ease-color-danger, #ef4444);
}
```

## Why is it useful?
Currently, the entire framework completely lacks native HTML5 validation styling. If a developer utilizes EaseMotion to build a complex registration form utilizing standard HTML attributes like `required`, `minlength="5"`, or `type="email"`, the browser natively understands when the input is invalid. However, because EaseMotion lacks `:invalid` CSS selectors, the end-user receives absolutely zero visual feedback (no red borders, no warning colors) when they make a typo or miss a requirement.

Furthermore, we must strictly use the modern `:user-invalid` pseudo-class rather than the raw `:invalid` class. If we only use `:invalid`, every single `required` field on the page will instantly turn bright red the second the page loads, resulting in a hostile and broken UX. By utilizing `:user-invalid`, the browser intelligently waits until the user has actually typed something and blurred the input before turning the field red, perfectly simulating complex JavaScript validation libraries using purely native, lightweight CSS.
