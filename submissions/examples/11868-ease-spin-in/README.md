# Animation: ease-spin-in

This submission implements the `ease-spin-in` entrance utility for issue **#11868**.

## Description

The `ease-spin-in` animation rotates an element by `-360deg` while simultaneously scaling it up from `0` to `1` and transitioning its opacity from `0` to `1`. This creates a smooth, engaging spinning reveal ideal for icon elements, modals, badges, or success status states.

## Acceptance Criteria
- Starting state: `rotate(-360deg) + scale(0) + opacity(0)`
- Ending state: `rotate(0deg) + scale(1) + opacity(1)`
- Animation timing: Smooth `ease-out`
- Dynamic entrance for badge/icon reveals.
- Focus visible indicators and reduced-motion override included.
