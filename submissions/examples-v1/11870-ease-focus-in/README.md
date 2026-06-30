# Animation: ease-focus-in

This submission implements the `ease-focus-in` entrance utility for issue **#11870**.

## Description

The `ease-focus-in` animation reveals an element by transitioning its CSS filter state from a completely blurred image/text to sharp focus. It supports a custom `--ease-blur-start` CSS variable, which defaults to `20px`, and transitions to `blur(0)` while concurrently scaling up opacity from `0` to `1` using a smooth ease-out curve.

## Acceptance Criteria

- Starting state: `filter: blur(var(--ease-blur-start, 20px)) + opacity(0)`
- Ending state: `filter: blur(0) + opacity(1)`
- Animation timing: Smooth ease-out.
- Variable configuration: Must support `--ease-blur-start`.
- Focus visible indicators and reduced-motion override included.
