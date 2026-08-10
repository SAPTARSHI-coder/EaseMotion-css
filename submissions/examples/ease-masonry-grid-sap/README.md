# ease-masonry-grid-sap

A Pinterest-style masonry grid using CSS multi-column layout, with items fading/rising in on load with a staggered delay, and lifting on hover.

## Usage
1. Include `style.css`.
2. Add markup: any number of `.masonry-item` children (varying heights) inside `.masonry-grid-sap`.

## Customization
- `columns: 3 220px` on `.masonry-grid-sap`: column count/min-width — browser auto-adjusts column count responsively.
- Per-item `height` and `animation-delay` via `:nth-child` for stagger timing.
- Hover lift distance/shadow.

## Notes
- Pure CSS multi-column layout (`columns`) achieves the masonry effect with no JS reflow calculation needed; `break-inside: avoid` prevents items from splitting across columns.
- Stagger effect comes from per-item `animation-delay` values assigned via `:nth-child`, not JS timing.
- Respects `prefers-reduced-motion`: entrance animation and hover-lift transition are both disabled; items appear instantly in final position.