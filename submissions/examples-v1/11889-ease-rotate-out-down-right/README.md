# Animation: ease-rotate-out-down-right

This submission implements the `ease-rotate-out-down-right` exit utility for issue **#11889**.

## Description

The `ease-rotate-out-down-right` animation rotates an element out toward the lower-right corner. It transitions from its normal placement (`rotate(0deg)` and `opacity: 1`) to `rotate(-45deg)` with `transform-origin: right bottom` and `opacity: 0`.

## Acceptance Criteria

- Ending state: `rotate(-45deg) + opacity(0)` with `transform-origin: right bottom`
- Origin variant (right bottom).
- Focus visible indicators and reduced-motion override included.
