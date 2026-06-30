# Animation: ease-light-speed-out-left

This submission implements the `ease-light-speed-out-left` exit utility GSSOC issue **#11840**.

## Description

The `ease-light-speed-out-left` animation exits an element toward the left at high speed with a skew effect. It rapidly translates the element to `translateX(-100%)` while skewing it at `skewX(30deg)` and fading its opacity to `0` using a fast ease-in curve.

## Acceptance Criteria

- Ending state: `translateX(-100%) + skewX(30deg) + opacity(0)`
- Timing: Fast ease-in curve.
- Focus visible indicators and reduced-motion override included.
