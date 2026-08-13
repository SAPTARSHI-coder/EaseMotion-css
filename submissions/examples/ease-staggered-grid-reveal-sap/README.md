# ease-staggered-grid-reveal-sap

A grid of tiles that fade/scale in one after another in a staggered cascade on page load.

## Usage
1. Include `style.css`.
2. Add markup: `.grid-tile` elements inside `.staggered-grid-sap`, each with an incrementing `animation-delay` (JS or hardcoded inline).

## Customization
- `i * 0.06s` stagger interval: cascade speed.
- Grid columns/gap for layout.
- Entrance distance/scale in the keyframe.

## Notes
- Stagger is achieved purely via per-tile `animation-delay`, requiring no JS animation orchestration beyond assigning the delay value.
- `forwards` fill-mode keeps each tile at its final visible state after animating, rather than reverting to the 0% keyframe state.
- Respects `prefers-reduced-motion`: entrance animation is disabled, tiles appear instantly in their final state.