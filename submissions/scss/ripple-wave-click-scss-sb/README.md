# Ripple Wave Click — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-ripple-wave-click` keyframes and a `.ease-anim-ripple-wave-click` utility class.

## What it does
A ripple expanding outward on click via scale and opacity. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ripple-wave-click.scss` — the mixin partial

## Usage
```scss
@use "./ripple-wave-click" as *;

.my-element {
  @include ease-anim-ripple-wave-click;
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

Closes #81681
