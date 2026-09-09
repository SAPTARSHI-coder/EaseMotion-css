# Tilt 3D Hover — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-tilt-3d-hover` keyframes and a `.ease-anim-tilt-3d-hover` utility class.

## What it does
A 3D tilt on hover using rotateX/Y. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ease-tilt-3d-hover.scss` — the mixin partial

## Usage
```scss
@use "./ease-tilt-3d-hover" as *;

.my-element {
  @include ease-anim-tilt-3d-hover;
}
```

### Configurable parameters
```scss
@include ease-anim-tilt-3d-hover($duration: 1.2s, $timing: ease-in-out, $fill: both);
```

Timing is also configurable at runtime via CSS custom properties:
```css
:root {
  --ease-duration: 1.2s;
  --ease-timing: ease-in-out;
}
```

## Accessibility
Includes a `@media (prefers-reduced-motion: reduce)` override that disables the animation.

Closes #81712
