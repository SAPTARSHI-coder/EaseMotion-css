# Parallax Tilt Hover — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-parallax-tilt-hover` keyframes and a `.ease-anim-parallax-tilt-hover` utility class.

## What it does
A 3D parallax tilt cycling rotation and depth on hover. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_parallax-tilt-hover.scss` — the mixin partial

## Usage
```scss
@use "./parallax-tilt-hover" as *;

.my-element {
  @include ease-anim-parallax-tilt-hover;
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

Closes #81683
