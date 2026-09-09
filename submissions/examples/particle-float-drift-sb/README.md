# Particle Float Drift

A `particle-float-drift` keyframe utility class for the EaseMotion core animation library.

## What it does
A particle drifting upward and fading (translate3d + opacity). Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-particle-float-drift` + `.ease-anim-particle-float-drift` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-particle-float-drift">Hello</div>
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

Closes #81676
