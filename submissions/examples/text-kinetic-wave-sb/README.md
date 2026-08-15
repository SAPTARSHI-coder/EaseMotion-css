# Text Kinetic Wave

A `text-kinetic-wave` keyframe utility class for the EaseMotion core animation library.

## What it does
Text rises and falls in a gentle kinetic wave (translateY + scale).

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-text-kinetic-wave` + `.ease-anim-text-kinetic-wave` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-text-kinetic-wave">Hello</div>
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

Closes #81845
