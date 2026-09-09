# CSS :user-valid/:user-invalid Form Validation

## What does this do?

Demonstrates the `:user-valid` and `:user-invalid` CSS pseudo-classes, which provide user-interaction-based validation feedback. Unlike `:valid`/`:invalid` (which fire immediately on page load), these only apply after the user has interacted with the form field, reducing premature error display.

## Key Features

- `:user-invalid` — applies only after user interaction + invalid value
- `:user-valid` — applies only after user interaction + valid value
- `:user-invalid` ignores empty required fields until user tries to submit
- Shows validation feedback only after user has begun interacting
- Combines with `:focus` and `:focus-within` for polished UX
- Registration form demo with multiple input types

## Preview

Open `demo.html` in a supporting browser (Chrome 131+, Firefox 133+, Safari 18.2+).
