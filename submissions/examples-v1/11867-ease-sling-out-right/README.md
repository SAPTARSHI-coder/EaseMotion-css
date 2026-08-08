# Animation: ease-sling-out-right

This submission implements the `ease-sling-out-right` exit utility for issue **#11867**.

## Description

The `ease-sling-out-right` animation exits an element by slinging it to the right with high velocity. It transitions the element from `translateX(0)` to `translateX(200%)` rapidly with an accelerated feeling. This animation pairs perfectly with `ease-sling-in-left`.

## Acceptance Criteria
- Ending state: `translateX(200%)`
- Acceleration timing: Fast, snappy, slingshot-style exit.
- Directional variant (to the right).
- Focus visible indicators and reduced-motion override included.
