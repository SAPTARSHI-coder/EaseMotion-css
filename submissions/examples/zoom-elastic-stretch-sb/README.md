# Zoom Elastic Stretch

A `zoom-elastic-stretch` keyframe utility class for the EaseMotion core animation library.

## What it does
An elastic zoom with a stretch overshoot (asymmetric scale).

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-zoom-elastic-stretch` + `.ease-anim-zoom-elastic-stretch` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-zoom-elastic-stretch">Hello</div>
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

Closes #81880
