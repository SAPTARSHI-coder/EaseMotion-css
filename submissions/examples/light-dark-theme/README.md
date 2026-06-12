# CSS light-dark() Theme

## What does this do?

Demonstrates the CSS `light-dark()` color function — a single declaration that adapts to light and dark color schemes without media queries or custom property overrides.

## How is it used?

Set `color-scheme` on the root, then use `light-dark()` anywhere:

```css
:root {
  color-scheme: light dark;
}

body {
  background: light-dark(#f1f5f9, #0f172a);
  color: light-dark(#1e293b, #e2e8f0);
}
```

## Why is it useful?

Traditional dark mode requires duplicating every color declaration inside `@media (prefers-color-scheme: dark)`, leading to hundreds of lines of overrides. The `light-dark()` function keeps both values in one place, making themes readable, maintainable, and tree-shakeable — which aligns with EaseMotion CSS's philosophy of human-readable, zero-dependency CSS.
