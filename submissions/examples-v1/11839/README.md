# Animation: ease-light-speed-in-right

This submission implements the `ease-light-speed-in-right` entrance utility GSSOC issue **#11838**.

## Description

The `ease-light-speed-in-right` animation blasts an element in from the right boundary at extremely high speed with a skew effect and motion blur. It starts at `translateX(100%)`, skewed at `skewX(-30deg)` with a motion blur `filter: blur(10px)` and transitions rapidly to its standard placement (`translateX(0)`, `skewX(0deg)`, and `filter: blur(0px)`) in `0.3s` to achieve a bold, punchy feel.

## Acceptance Criteria

- Starting state: `translateX(100%) + skewX(-30deg) + filter: blur(10px) + opacity(0)`
- Ending state: `translateX(0) + skewX(0deg) + filter: blur(0) + opacity(1)`
- Timing: Very fast easing (0.3s) for an instant, punchy feel.
- Motion blur effect via `filter: blur()`.
- Focus visible indicators and reduced-motion override included.
