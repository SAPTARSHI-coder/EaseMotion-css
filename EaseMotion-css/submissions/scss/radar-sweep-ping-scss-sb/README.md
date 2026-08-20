# Radar Sweep Ping — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-radar-sweep-ping` keyframes and a `.ease-anim-radar-sweep-ping` utility class.

## What it does
A radar ping expanding and fading. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ease-radar-sweep-ping.scss` — the mixin partial

## Usage
```scss
@use "./ease-radar-sweep-ping" as *;

.my-element {
  @include ease-anim-radar-sweep-ping;
}
```

### Configurable parameters
```scss
@include ease-anim-radar-sweep-ping($duration: 1.2s, $timing: ease-in-out, $fill: both);
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

Closes #81685
