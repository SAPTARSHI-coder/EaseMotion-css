# Animation: ease-focus-out

This submission implements the `ease-focus-out` exit utility for issue **#11871**.

## Description

The `ease-focus-out` animation rotates an element out of visual focus by transitioning its CSS `filter: blur(0px)` to `filter: blur(20px)` while simultaneously reducing its opacity to `0`. It uses an `ease-in` timing function for a natural, soft dismissal feeling.

## Acceptance Criteria

- Starting state: `filter: blur(0) + opacity(1)`
- Ending state: `filter: blur(20px) + opacity(0)`
- Animation timing: `ease-in`
- Exit blur animation counterpart to `ease-focus-in`.
- Focus visible indicators and reduced-motion override included.
