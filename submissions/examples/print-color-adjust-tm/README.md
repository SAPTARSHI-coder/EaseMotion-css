# Print Color Adjust

Forces or allows the browser to adjust colors for print output.

This submission demonstrates the `print-color-adjust` CSS property with multiple variants and interactive examples using EaseMotion's design token system.

## Features

- Multiple `print-color-adjust` variants demonstrated
- Uses EaseMotion CSS design tokens for colors, spacing, and typography
- Dark mode support via `prefers-color-scheme: dark`
- Reduced motion support via `prefers-reduced-motion: reduce`
- Responsive grid layout with CSS Grid and `auto-fit`
- Smooth hover transitions using `cubic-bezier(0.4, 0, 0.2, 1)` easing

## Usage

Apply the `print-color-adjust` class to any element:

```html
<div class="print-color-adjust">
  Your content here
</div>
```

## Tokens Used

- `--ease-color-primary` — Primary accent (#6c63ff)
- `--ease-color-neutral-50` through `--ease-color-neutral-900` — Neutral palette
- `--ease-radius-*` — Border radius scale
- `--ease-space-*` — Spacing scale
- `--ease-shadow-*` — Shadow tokens
- `--ease-font-sans` / `--ease-font-mono` — Typography
- `--ease-text-*` — Type scale

## Why it is useful

The `print-color-adjust` property is part of CSS's advanced layout and visual presentation capabilities. Using EaseMotion's token system ensures consistency with the framework's design language and enables dark mode and accessibility features to work automatically.
