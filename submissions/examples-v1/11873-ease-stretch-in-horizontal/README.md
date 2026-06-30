# Animation: ease-stretch-in-horizontal

This submission implements the `ease-stretch-in-horizontal` entrance utility for issue **#11873**.

## Description

The `ease-stretch-in-horizontal` animation reveals an element by stretching it horizontally from a thin line at the left boundary. It simultaneously scales `scaleX` from `0` to `1` with a `transform-origin` set to `left`, while transitioning its opacity from `0` to `1`. This is ideal for animated divider lines, section separators, progress loaders, or navigation headers.

## Acceptance Criteria

- Starting state: `scaleX(0) + opacity(0)` with `transform-origin: left`
- Ending state: `scaleX(1) + opacity(1)`
- Animation timing: Smooth ease transition.
- Suitable for dividers, borders, and progress indicator rails.
- Focus visible indicators and reduced-motion override included.
