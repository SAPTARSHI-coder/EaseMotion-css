# Transform-Style: preserve-3d

Demonstrates `transform-style: preserve-3d` for creating 3D scenes with nested children. Includes a click-to-flip card, a rotating 3D cube, a backface-visibility comparison, and a layered depth scene.

## Features

- Clickable card flip with `transform-style: preserve-3d` and `backface-visibility: hidden`.
- Rotating 3D cube with six labelled faces (F, B, R, L, T, D).
- Backface-visibility comparison: `visible` vs `hidden` on a spinning element.
- Layered depth scene with three overlapping planes at different `translateZ` values.
- All scenes respect `prefers-reduced-motion`.

## Topics Covered

- `transform-style: preserve-3d` for nested 3D children
- `backface-visibility: hidden` vs `visible`
- 3D card flip pattern
- Building a CSS-only 3D cube
- `translateZ` for depth layering
- `perspective` on parent elements
