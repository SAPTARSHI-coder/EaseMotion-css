# ease-hover-spotlight-grid-sap

A feature grid where each cell reveals a soft radial "spotlight" glow that follows the cursor while hovering.

## Usage
1. Include `style.css`.
2. Add markup: `.grid-cell` items inside `.spotlight-grid-sap`, each with a heading and description.
3. Attach the `mousemove` listener from `demo.html`, which sets `--mx`/`--my` custom properties per cell.

## Customization
- Spotlight `radial-gradient` color/size on `::before`.
- Grid columns/gap for different layouts.
- Cell background/text colors.

## Notes
- Spotlight position is driven by `--mx`/`--my` CSS custom properties updated on every `mousemove`, read by the `::before` pseudo-element's `left`/`top` — this keeps the glow following the cursor smoothly within each individual cell's bounds.
- Each cell tracks its own cursor position independently (relative to its own `getBoundingClientRect()`), so the spotlight never leaks from one cell into a neighboring one.
- Respects `prefers-reduced-motion`: opacity fade-in transition is removed on hover, so the spotlight appears instantly rather than easing in; position tracking (direct 1:1 cursor following) is unaffected since it's not decorative motion.