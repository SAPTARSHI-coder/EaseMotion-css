# Glitch Icon Example (Standard)

## Description
A standard HTML/CSS example demonstrating a "Glitch" Attention Seeker animation applied to an icon. When hovered or focused, the SVG icon jitters rapidly and exhibits chromatic aberration using `filter: drop-shadow` combined with cyan and magenta offsets.

## Files
- `demo.html`: Contains an accessible button wrapping an inline SVG icon (a warning triangle).
- `style.css`: Implements the `@keyframes icon-glitch-anim-ag` which rapidly shifts `transform` and `filter` drop-shadows to simulate RGB splitting.

## Accessibility
- The SVG icon is wrapped in a `<button>` with an `aria-label`, making it accessible to keyboards and screen readers.
- `aria-hidden="true"` is applied to the decorative SVG to prevent redundant readout.
- **Reduced Motion**: Disables the rapid jitter and RGB-split animation. Replaces it with a static, non-moving drop-shadow glow to provide interaction feedback without risking photosensitive triggers.
