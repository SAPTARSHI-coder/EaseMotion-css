# Neon Pulse Glow

A `neon-pulse-glow` keyframe utility class for the EaseMotion core animation library.

## What it does
A pulsing neon glow using box-shadow + opacity. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-neon-pulse-glow` + `.ease-anim-neon-pulse-glow` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-neon-pulse-glow">Hello</div>
```

### Configurable timing
```css
:root {
  --ease-duration: 1.2s;
  --ease-timing: ease-in-out;
}
```

## Accessibility
Includes a `@media (prefers-reduced-motion: reduce)` override that disables the animation.

Closes #81668
