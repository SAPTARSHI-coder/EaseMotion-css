# 3D Flip Horizontal

A `3d-flip-horizontal` keyframe utility class for the EaseMotion core animation library.

## What it does
A horizontal 3D flip using rotateX. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-3d-flip-horizontal` + `.ease-anim-3d-flip-horizontal` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-3d-flip-horizontal">Hello</div>
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

Closes #81660
