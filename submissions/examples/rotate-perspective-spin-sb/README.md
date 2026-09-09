# Rotate Perspective Spin

A `rotate-perspective-spin` keyframe utility class for the EaseMotion core animation library.

## What it does
A 3D perspective spin using rotate3d.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-rotate-perspective-spin` + `.ease-anim-rotate-perspective-spin` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-rotate-perspective-spin">Hello</div>
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

Closes #81884
