# [Submission] Ease Glow Tilt Card

## What this is
A motion idea demo: “Glow Tilt Card” — combines:
- transform-based tilt on hover/focus
- radial highlight glow (shine overlay)
- reduced-motion fallback

## Files
- `demo.html` — interactive showcase page
- `style.css` — submission-local styling for the demo

## How to preview
Open:
- `submissions/examples/ease-glow-tilt-card/demo.html`

## Notes for maintainers
- Animations use `transform` (and not layout-thrashing properties).
- Card is focus-visible friendly (`:focus-visible`).
- `prefers-reduced-motion: reduce` is respected.

## Proposed naming (if you integrate later)
- `ease-glow-tilt-card` (container)
- `ease-glow-tilt-card__shine` (overlay)
