# Animation: ease-blur-in-up

This submission implements the `ease-blur-in-up` entrance utility for issue **#11879**.

## Description

The `ease-blur-in-up` animation rotates an element into view from the bottom direction. It translates the element starting at `translateY(20px)` with a `filter: blur(10px)` and `opacity: 0`, and smoothly transitions it upward to `translateY(0)`, `filter: blur(0)`, and `opacity: 1`. It features a smooth ease-out curve, ideal for rising card elements, form overlays, or item lists.

## Acceptance Criteria

- Starting state: `translateY(20px) + blur(10px) + opacity(0)`
- Ending state: `translateY(0) + blur(0) + opacity(1)`
- Animation timing: Smooth ease-out.
- Directional variant (rising from the bottom).
- Focus visible indicators and reduced-motion override included.
