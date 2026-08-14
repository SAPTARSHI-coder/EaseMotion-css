# Slide Fade Diagonal

A `slide-fade-diagonal` keyframe utility class for the EaseMotion core animation library.

## What it does
An element slides in diagonally while fading in.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-slide-fade-diagonal` + `.ease-anim-slide-fade-diagonal` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-slide-fade-diagonal">Hello</div>
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

Closes #81878
