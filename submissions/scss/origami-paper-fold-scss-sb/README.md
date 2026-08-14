# Origami Paper Fold — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-origami-paper-fold` keyframes and a `.ease-anim-origami-paper-fold` utility class.

## What it does
An element unfolding like origami paper via 3D perspective rotation. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_origami-paper-fold.scss` — the mixin partial

## Usage
```scss
@use "./origami-paper-fold" as *;

.my-element {
  @include ease-anim-origami-paper-fold;
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

Closes #81675
