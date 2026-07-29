# CSS-Only Tooltip Component

A lightweight, JavaScript-free tooltip modifier component driven entirely by raw data attributes and native pseudo-elements.

## Technical Details
- Extracts display strings using the native `attr(data-tip)` structural selector.
- Handles floating overlay maps utilizing absolute placement translation coordinates.
- Drops transitional animation metrics instantly under system `prefers-reduced-motion` settings.