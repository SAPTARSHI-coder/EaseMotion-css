# Glitch Rgb Split — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-glitch-rgb-split` keyframes and a `.ease-anim-glitch-rgb-split` utility class.

## What it does
A glitch effect with RGB channel split via drop-shadow filters. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_glitch-rgb-split.scss` — the mixin partial

## Usage
```scss
@use "./glitch-rgb-split" as *;

.my-element {
  @include ease-anim-glitch-rgb-split;
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

Closes #81665
