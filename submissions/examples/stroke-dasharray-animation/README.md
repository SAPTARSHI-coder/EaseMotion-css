## stroke-dasharray-animation

Demonstrates SVG line-drawing animations using `stroke-dasharray` and `stroke-dashoffset`. Paths, circles, polygons, and checkmarks appear to "draw" themselves on screen via CSS `@keyframes` that animate `stroke-dashoffset` from the path length down to zero.

### Key Techniques

- `stroke-dasharray` set to the total path length (e.g., 400) defines the dash pattern
- `stroke-dashoffset` initially equals the path length, hiding the entire stroke
- `@keyframes` animate `stroke-dashoffset` to `0`, revealing the path progressively
- Multiple staggered animations (checkmark ring, then check) create sequential draw effects
- A 75% progress ring demonstrates partial stroke reveal with precise dashoffset calculation

### Accessibility Notes

- SVG elements have `fill="none"` and rely on stroke visibility; text labels describe the state (e.g., "75%")
- `prefers-reduced-motion` disables all SVG stroke animations and sets `stroke-dashoffset: 0` immediately
- Animations are purely decorative and do not convey essential information
