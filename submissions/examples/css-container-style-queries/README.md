# CSS Container Style Queries Example

Demo of CSS `@container style()` queries — apply styles based on a container's custom property values rather than its size.

## Features

- Theme cards that respond to a `--theme` custom property on the parent container
- Supports `light`, `dark`, and `sunset` themes
- Cards automatically adapt backgrounds, text colors, and accents
- Dark theme with `prefers-reduced-motion` support

## Files

- `demo.html` — Container with theme-switchable cards
- `style.css` — Self-contained CSS (110 lines)

## Preview

Three themed containers showing how `@container style()` can apply different styles based on CSS custom properties.
