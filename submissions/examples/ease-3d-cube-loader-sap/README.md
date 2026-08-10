# ease-3d-cube-loader-sap

A loading indicator built from a real 3D CSS cube (6 faces) continuously rotating on two axes — pure CSS 3D transforms, no image/sprite.

## Usage
1. Include `style.css`.
2. Add markup: 6 `.face` divs (front/back/left/right/top/bottom) inside `.cube`.

## Customization
- `60px` face dimensions and `translateZ(30px)` (half the face size) — must update together if resizing the cube.
- Face color/opacity/border.
- `cube-spin-sap` rotation speed and axis combination.

## Notes
- Each face is positioned via `rotate` + `translateZ(half-width)`, the standard technique for building a CSS cube — the translateZ distance must equal exactly half the face's own dimension for the faces to form a properly sealed cube.
- `transform-style: preserve-3d` on the `.cube` element is required for child faces to render in true 3D relative to each other rather than being flattened.
- Respects `prefers-reduced-motion`: the spin animation is disabled and the cube rests at a fixed tilted angle, still visually communicating "3D loader" without continuous motion.