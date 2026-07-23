# Glitch Drawer Example (Standard)

## Description
A standard HTML/CSS example demonstrating a "Glitch" interactive state applied to a side drawer. When the drawer is open and the user interacts with it (hovers or focuses within), the drawer begins to shake rapidly (`drawer-shake-ag`) and a cyan scanning line (`drawer-glitch-scan-ag`) passes over it, creating a broken, digital interference effect.

## Files
- `demo.html`: The markup for a CSS-only drawer using the Checkbox Hack (`#drawer-toggle-ag`).
- `style.css`: Uses `:hover` and `:focus-within` to trigger the shaking animation and pseudo-element scanner.

## Accessibility
- Uses a CSS-only toggle for demonstration. Real implementations should use JS and `aria-expanded`.
- Connects focus states using `:focus-within` so keyboard users can trigger the interactive state.
- **Reduced Motion**: Completely disables the rapid shaking and scanning line. Safely falls back to a subtle background color change on the drawer to maintain interaction feedback without motion.
