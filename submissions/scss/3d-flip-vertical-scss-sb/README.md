# 3D Flip Vertical — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-3d-flip-vertical` keyframes and a `.ease-anim-3d-flip-vertical` utility class.

## What it does
An element flipping in on the vertical (X) axis with a settle. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_3d-flip-vertical.scss` — the mixin partial

## Usage
```scss
@use "./3d-flip-vertical" as *;

.my-element {
  @include ease-anim-3d-flip-vertical;
}
```

### Configurable parameters
- `$duration` — animation duration (default: `var(--ease-duration, 1s)`)
- `$timing` — timing function (default: `var(--ease-timing, ease)`)
- `$fill` — fill mode (default: `both`)

### CSS variables
- `--ease-duration` — global default duration
- `--ease-timing` — global default timing function

## Accessibility
- `@media (prefers-reduced-motion: reduce)` disables the animation.

Closes #81663
