# Animation: ease-spin-out

This submission implements the `ease-spin-out` exit utility for issue **#11869**.

## Description

The `ease-spin-out` animation rotates an element by `360deg` while simultaneously shrinking its scale to `0` and transitioning its opacity to `0`. This creates a fast, dramatic spinning exit ideal for dismissing cards, removing notifications, or closing modals.

## Acceptance Criteria

- Ending state: `rotate(360deg) + scale(0) + opacity(0)`
- Animation timing: Fast and dramatic exit.
- Counterpart to `ease-spin-in`.
- Focus visible indicators and reduced-motion override included.
