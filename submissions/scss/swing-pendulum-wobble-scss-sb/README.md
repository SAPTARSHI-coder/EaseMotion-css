# Swing Pendulum Wobble — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-swing-pendulum-wobble` keyframes and a `.ease-anim-swing-pendulum-wobble` utility class.

## What it does
A pendulum swing wobble using rotate + opacity. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ease-swing-pendulum-wobble.scss` — the mixin partial

## Usage
```scss
@use "./ease-swing-pendulum-wobble" as *;

.my-element {
  @include ease-anim-swing-pendulum-wobble;
}
```

### Configurable parameters
```scss
@include ease-anim-swing-pendulum-wobble($duration: 1.2s, $timing: ease-in-out, $fill: both);
```

Timing is also configurable at runtime via CSS custom properties:
```css
:root {
  --ease-duration: 1.2s;
  --ease-timing: ease-in-out;
}
```

## Accessibility
Includes a `@media (prefers-reduced-motion: reduce)` override that disables the animation.

Closes #81710
