# 3D Flip Vertical

A `3d-flip-vertical` keyframe utility class for the EaseMotion core animation library.

## What it does
A vertical 3D flip using rotateY. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-3d-flip-vertical` + `.ease-anim-3d-flip-vertical` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-3d-flip-vertical">Hello</div>
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

Closes #81662
