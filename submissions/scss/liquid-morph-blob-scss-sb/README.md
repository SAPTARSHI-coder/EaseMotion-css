# Liquid Morph Blob — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-liquid-morph-blob` keyframes and a `.ease-anim-liquid-morph-blob` utility class.

## What it does
A blob morphing between organic border-radius shapes. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_liquid-morph-blob.scss` — the mixin partial

## Usage
```scss
@use "./liquid-morph-blob" as *;

.my-element {
  @include ease-anim-liquid-morph-blob;
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

Closes #81671
