# Floating Ghost Drift

A `floating-ghost-drift` keyframe utility class for the EaseMotion core animation library.

## What it does
A floating ghost that drifts side-to-side and up-down on a loop.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-floating-ghost-drift` + `.ease-anim-floating-ghost-drift` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-floating-ghost-drift">Hello</div>
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

Closes #81847
