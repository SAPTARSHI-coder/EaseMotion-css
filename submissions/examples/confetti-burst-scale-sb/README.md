# Confetti Burst Scale

A `confetti-burst-scale` keyframe utility class for the EaseMotion core animation library.

## What it does
Confetti pieces burst outward with an overshoot scale pop.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-confetti-burst-scale` + `.ease-anim-confetti-burst-scale` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-confetti-burst-scale">Hello</div>
```

### Configurable timing
```css
:root {
  --ease-duration: 1.2s;
  --ease-timing: ease-in-out;
}
```

## Accessibility
Includes a `@media (prefers-reduced-motion: reduce)` override that disables the animation. Hardware-accelerated using `transform` + `opacity` for 60 FPS.

Closes #81841
