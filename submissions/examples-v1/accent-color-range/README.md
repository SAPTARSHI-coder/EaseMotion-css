# Accent Color Range

Showcases the CSS `accent-color` property applied to native form controls including range inputs, checkboxes, radio buttons, and progress bars. Demonstrates how a single property can theme browser-drawn UI widgets without custom styling.

## Usage

Open `demo.html` in a browser. Each section groups controls by type. Compare the default accent with teal (`#14b8a6`), pink (`#ec4899`), and amber (`#f59e0b`) variants. The `color-scheme: dark` declaration ensures proper dark mode rendering.

## Notes

- `accent-color` only affects browser-drawn form parts; full custom styling requires `appearance: none` plus custom CSS.
- Not all browsers support `accent-color` on all form elements — check caniuse for compatibility.
- Pair with `color-scheme` for consistent themed appearance across operating system defaults.
