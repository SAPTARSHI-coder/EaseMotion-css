# Matrix Rain Fall

A `matrix-rain-fall` keyframe utility class for the EaseMotion core animation library.

## What it does
Matrix-style rain falling down (translateY + opacity). Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-matrix-rain-fall` + `.ease-anim-matrix-rain-fall` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-matrix-rain-fall">Hello</div>
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

Closes #81692
