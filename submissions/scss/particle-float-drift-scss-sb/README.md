# Particle Float Drift — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-particle-float-drift` keyframes and a `.ease-anim-particle-float-drift` utility class.

## What it does
A particle drifting and fading upward with translate3d. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_particle-float-drift.scss` — the mixin partial

## Usage
```scss
@use "./particle-float-drift" as *;

.my-element {
  @include ease-anim-particle-float-drift;
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

Closes #81677
