# CSS :has() Form Validation Chain Demo

## What does this do?

Demonstrates the CSS `:has()` pseudo-class for form validation state detection. Enables styling labels, parent groups, and sibling fields based on validation states of individual inputs — without JavaScript.

## Key Features

- `.field:has(:invalid)` — highlights the entire field group when invalid
- `.field:has(:valid)` — applies success styling to field groups
- `label:has(~ input:invalid)` — changes label color based on input state
- `.field:has(:focus-within)` — keeps focus styling on the group
- Chained `:has()` for complex validation UI (e.g., password match)
- No JavaScript required for visual validation feedback

## Preview

Open `demo.html` in a supporting browser (Chrome 105+, Safari 15.4+).
