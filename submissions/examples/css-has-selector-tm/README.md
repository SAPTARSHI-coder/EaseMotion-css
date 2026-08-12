# CSS :has() Selector

This submission demonstrates the CSS `:has()` selector — a parent selector and conditional pseudo-class — across four real-world patterns: card differentiation, form validation states, interactive checkboxes, and pricing card highlighting. Built with EaseMotion design tokens.

## Features

- **Card differentiation**: `:has(.card-img)` styles cards with images differently from those without
- **Form validation**: `:has(input:invalid:not(:placeholder-shown))` shows error messages without JavaScript
- **Interactive checkboxes**: `:has(input[type="checkbox"]:checked)` styles the parent list item when checked
- **Pricing card highlight**: `:has(.badge-recommended)` scales and highlights the recommended plan
- Uses `--ease-color-*` palette including `--ease-color-primary-alpha` and `--ease-color-danger-alpha`
- `--ease-shadow-*` tokens for card elevation
- `--ease-speed-fast` and `--ease-ease` for all transitions
- Dark mode support via `prefers-color-scheme: dark`
- Reduced motion support via `prefers-reduced-motion: reduce`

## Usage

```css
/* Style a card differently if it contains an image */
.card:has(.card-img) {
  border: 2px solid var(--ease-color-primary);
}

/* Show error message when input is invalid */
.form-group:has(input:invalid:not(:placeholder-shown)) .error-msg {
  display: block;
}
```

## Why is it useful?

The `:has()` selector solves the long-standing "parent selector" problem in CSS. It lets you write conditional styles based on children or previous siblings — patterns that previously required JavaScript. Powered by EaseMotion's `--ease-*` tokens for consistent spacing, color, and elevation across all :has() demo patterns.
