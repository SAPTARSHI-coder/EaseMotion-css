# EaseMotion Subgrid Layout Demo

This example demonstrates how to use the modern CSS `subgrid` feature in conjunction with EaseMotion CSS framework tokens and animation utilities to create a perfectly aligned grid of cards.

## Why use Subgrid?
When building card grids, varying content lengths often cause headers, bodies, or footers to misalign. Traditional fixes involved setting fixed heights or using complex nested flexbox layouts.

CSS Subgrid solves this natively:
```css
.parent-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3; /* Spans across 3 rows defined by its internal content structure */
}
```

## Features Demonstrated
1. **Vertical Alignment**: The title, body, and footer of all three cards align perfectly across the horizontal axis, regardless of the text length inside each section.
2. **EaseMotion Variables**: Uses core tokens like `var(--ease-color-primary)`, `var(--ease-space-6)`, and `var(--ease-shadow-md)`.
3. **Entrance Animations**: Cards utilize the `.ease-slide-up` class with staggered `animation-delay` for a smooth initial load.
4. **Accessibility**: Includes a `@media (prefers-reduced-motion: reduce)` block to disable hover transforms and respect user system settings.

## How to View
Open `demo.html` in your browser.
*(Note: CSS subgrid is supported in all modern browsers: Chrome 117+, Firefox 71+, Safari 17+)*
