# Translate Transform Utilities

## What does this do?

Adds atomic translation utility classes to translate (shift) elements along the horizontal (X), vertical (Y), or both axes simultaneously.

## How is it used?

Apply the translation classes directly to any HTML element:

```html
<div class="ease-translate-x-4 ease-translate-y-neg-2">Your content here</div>
```

### Supported Scales

- **Translate X / Y Scale**: `0`, `1` (0.25rem), `2` (0.5rem), `3` (0.75rem), `4` (1rem), `5` (1.25rem), `6` (1.5rem), `8` (2rem), `10` (2.5rem), `12` (3rem), `16` (4rem).
- **Percentages**: `half` (50%), `full` (100%).
- **Negative offsets**: Prefixed with `neg-` (e.g. `ease-translate-x-neg-4` or `ease-translate-y-neg-full`).
- **Diagonal Shorthands**: `ease-translate-half` (50% on both), `ease-translate-full` (100% on both), and negative counterparts (`ease-translate-neg-half`, `ease-translate-neg-full`).

## Why is it useful?

In modern interactive UI design, positioning and offset shifts are widely used to create sliding sidebars, tooltips, modals, dropdowns, and transition animations. Instead of writing custom keyframes or CSS properties for basic translations, developer productivity is enhanced by applying human-readable classes directly inside the HTML structure.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the interactive hover effects.

## Contribution Notes

- Class naming: `ease-translate-x-*`, `ease-translate-y-*`, and `ease-translate-*` shorthand.
