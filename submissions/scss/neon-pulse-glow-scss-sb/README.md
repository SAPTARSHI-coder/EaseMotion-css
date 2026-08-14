# Neon Pulse Glow — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-neon-pulse-glow` keyframes and a `.ease-anim-neon-pulse-glow` utility class.

## What it does
A pulsing neon glow with layered box-shadows and opacity. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_neon-pulse-glow.scss` — the mixin partial

## Usage
```scss
@use "./neon-pulse-glow" as *;

.my-element {
  @include ease-anim-neon-pulse-glow;
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

Closes #81669
