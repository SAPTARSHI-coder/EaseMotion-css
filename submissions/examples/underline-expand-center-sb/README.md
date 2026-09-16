# Underline Expand Center

A `underline-expand-center` keyframe utility class for the EaseMotion core animation library.

## What it does
An underline that expands outward from the center (scaleX).

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-underline-expand-center` + `.ease-anim-underline-expand-center` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-underline-expand-center">Hello</div>
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

Closes #81850
