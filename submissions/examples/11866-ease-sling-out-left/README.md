# Animation: ease-sling-out-left

This submission implements the `ease-sling-out-left` exit utility for issue **#11866**.

## Description

The `ease-sling-out-left` animation exits an element by slinging it to the left with high velocity and acceleration. It transitions the element to `translateX(-200%)` rapidly, using a custom cubic-bezier timing function to achieve a "slingshot" or quick accelerated exit behavior.

## Acceptance Criteria
- Ending state: `translateX(-200%)`
- Acceleration timing: Fast, snappy, slingshot-style exit.
- Directional variant (to the left).
- Focus visible indicators and reduced-motion override included.
