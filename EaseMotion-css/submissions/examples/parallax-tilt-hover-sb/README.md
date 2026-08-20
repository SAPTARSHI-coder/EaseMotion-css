# Parallax Tilt Hover

A `parallax-tilt-hover` keyframe utility class for the EaseMotion core animation library.

## What it does
A parallax tilt on hover using 3D rotateX/Y. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-parallax-tilt-hover` + `.ease-anim-parallax-tilt-hover` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-parallax-tilt-hover">Hello</div>
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

Closes #81682
