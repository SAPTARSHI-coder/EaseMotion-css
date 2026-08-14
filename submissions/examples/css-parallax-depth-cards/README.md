# CSS Parallax Depth Cards

Interactive 3D cards that tilt on hover, while internal elements physically lift off the surface using `translateZ` for deep parallax.

## Features
- Hardware-accelerated 3D environment via `perspective: 1000px` and `transform-style: preserve-3d`.
- Pure CSS parallax achieved by separating the background (`.card-bg`) and the content (`.card-content`) and applying different `translateZ` values on hover.
- Smooth, natural physics using a custom `cubic-bezier` transition curve.

## Files
- `demo.html`
- `style.css`
