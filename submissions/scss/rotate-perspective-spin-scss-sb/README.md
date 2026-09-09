# Rotate Perspective Spin — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-rotate-perspective-spin` keyframes and a `.ease-anim-rotate-perspective-spin` utility class.

## What it does
A 3D perspective spin using rotate3d. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ease-rotate-perspective-spin.scss` — the mixin partial

## Usage
```scss
@use "./ease-rotate-perspective-spin" as *;

.my-element {
  @include ease-anim-rotate-perspective-spin;
}
```

### Configurable parameters
```scss
@include ease-anim-rotate-perspective-spin($duration: 1.2s, $timing: ease-in-out, $fill: both);
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

Closes #81885
