# Animation: ease-jack-in-the-box

This submission implements the `ease-jack-in-the-box` entrance utility GSSOC issue **#11842**.

## Description

The `ease-jack-in-the-box` animation creates a playful pop-in reveal similar to a classic toy. The element starts scaled down to `0.1` and rotated at `30deg` with its `transform-origin` fixed at the `bottom`. It then springs upward to its standard scale `1` and rotation `0deg`, settling with a soft bouncy spring timing effect.

## Acceptance Criteria
- Starting state: `scale(0.1) + rotate(30deg)` with `transform-origin: bottom`
- Ending state: `scale(1) + rotate(0)`
- Timing: Spring/bouncy custom easing curve.
- Origin variant (bottom).
- Focus visible indicators and reduced-motion override included.
