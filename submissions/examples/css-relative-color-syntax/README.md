# CSS Relative Color Syntax

Interactive demo of the CSS `oklch(from ...)` relative color syntax — derive new colors from an existing base color by adjusting lightness, chroma, and hue channels.

## Features

- Base color card shown in `oklch(55% 0.15 260)`
- Four derived colors: lighter, more saturated, complementary hue, muted
- Uses `oklch(from var(--base) L C H)` syntax
- Responsive grid layout with hover effects
- Dark theme with `prefers-reduced-motion` support

## Files

- `demo.html` — Color palette comparison layout
- `style.css` — Self-contained CSS (80 lines)

## Preview

Base color and four derived relatives displayed in a clean card grid.
