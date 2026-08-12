# CSS Overlap Image Grid (#70969)

Pure CSS layered grid composition where items overlap each other using z-index hierarchy, dynamically promoting hovered or focused elements to the foreground.

## Features
- **CSS Grid Layering:** Utilizes overlapping grid column and row spans to construct composite card layouts.
- **Dynamic Z-Index Elevation:** Elevates hovered (`:hover`) and focused (`:focus-within`) items to `z-index: 10` with scale physics.
- **Pure CSS Implementation:** Zero JavaScript required for layout recalculations or stack ordering.
- **Accessible & Responsive:** Screen reader accessible links, focus ring indicators, and full `@media (prefers-reduced-motion: reduce)` support.

## Structure
- `style.css` - Component grid template, overlap spans, layering rules, and interactive transform state.
- `demo.html` - Interactive demo featuring three layered gallery cards.
