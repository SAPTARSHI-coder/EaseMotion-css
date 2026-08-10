# ease-carousel-3d-sap

A 3D cube carousel — slides are positioned as faces of a rotating cube in 3D space, rotated into view via prev/next controls.

## Usage
1. Include `style.css`.
2. Add markup: 4 `.carousel-slide` elements inside `.carousel-track`, plus prev/next buttons.
3. Attach the index-tracking click handlers from `demo.html`.

## Customization
- `translateZ(220px)` per slide: cube "radius" — should roughly match half the carousel width for a proportional cube.
- `perspective(1200px)` on the container: 3D depth intensity.
- Number of slides: works with exactly 4 faces at 90° apart in this demo; more faces need recalculated angles (360° / count).

## Notes
- Each slide is positioned as a cube face via `rotateY(N * 90deg) translateZ(radius)`, and the whole track rotates in the opposite direction to bring each face to the front — this is the standard CSS 3D cube carousel technique.
- `backface-visibility: hidden` prevents slides from showing through each other when the cube rotates.
- Respects `prefers-reduced-motion`: the track's rotation transition is removed, so slide changes are instant rather than an animated spin; nav button hover transform is also disabled.