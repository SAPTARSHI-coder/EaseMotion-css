# Curtain Slide Reveal — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-curtain-slide-reveal` keyframes and a `.ease-anim-curtain-slide-reveal` utility class.

## What it does
An element revealing like a curtain dropping (scaleY from top). Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_curtain-slide-reveal.scss` — the mixin partial

## Usage
```scss
@use "./curtain-slide-reveal" as *;

.my-element {
  @include ease-anim-curtain-slide-reveal;
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

Closes #81673
