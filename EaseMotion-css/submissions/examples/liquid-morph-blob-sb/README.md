# Liquid Morph Blob

A `liquid-morph-blob` keyframe utility class for the EaseMotion core animation library.

## What it does
A liquid blob morphing its border-radius + scale. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-liquid-morph-blob` + `.ease-anim-liquid-morph-blob` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-liquid-morph-blob">Hello</div>
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

Closes #81670
