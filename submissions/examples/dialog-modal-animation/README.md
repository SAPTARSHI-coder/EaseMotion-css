## What It Does

Demonstrates the native `<dialog>` element with both `showModal()` (modal) and `show()` (non-modal) methods. Features CSS open/close animations using `@starting-style` and `allow-discrete` transitions. The `::backdrop` is styled with a blur effect and fades in. A form inside the modal collects email input and returns a value upon submission. A toast notification confirms successful subscription.

## Key Features

- Animated open (fade + scale + slide-up) and close transitions for the dialog
- `::backdrop` with semi-transparent background and `backdrop-filter: blur()`
- `@starting-style` enables entry animations from `display: none`
- Form with `method="dialog"` and return value handling
- Close on backdrop click and Escape key
- Non-modal variant allows background interaction
- Fully respects `prefers-reduced-motion`

## Usage Notes

Run from any local server or open directly in a browser. The `<dialog>` API requires JavaScript for `showModal()` / `show()`. All styles are self-contained in `style.css`. Works in all modern browsers that support the `<dialog>` element and `@starting-style`.
