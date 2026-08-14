# Holographic Sheen — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-holographic-sheen` keyframes and a `.ease-anim-holographic-sheen` utility class.

## What it does
A sweeping holographic gradient with shifting hue and saturation. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_holographic-sheen.scss` — the mixin partial

## Usage
```scss
@use "./holographic-sheen" as *;

.my-element {
  @include ease-anim-holographic-sheen;
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

Closes #81667
