# Animation: ease-blur-in-right

This submission implements the `ease-blur-in-right` entrance utility for issue **#11878**.

## Description

The `ease-blur-in-right` animation rotates an element into view from the right direction. It translates the element starting at `translateX(30px)` with a `filter: blur(10px)` and `opacity: 0`, and smoothly transitions it to `translateX(0)`, `filter: blur(0)`, and `opacity: 1`. It features a smooth ease-out curve, ideal for sidebar items, notification panels, and content reveals.

## Acceptance Criteria
- Starting state: `translateX(30px) + blur(10px) + opacity(0)`
- Ending state: `translateX(0) + blur(0) + opacity(1)`
- Animation timing: Smooth ease-out.
- Directional variant (from the right).
- Focus visible indicators and reduced-motion override included.
