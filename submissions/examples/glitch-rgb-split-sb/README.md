# Glitch RGB Split

A `glitch-rgb-split` keyframe utility class for the EaseMotion core animation library.

## What it does
A glitch effect with RGB-split text-shadow and translate. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-glitch-rgb-split` + `.ease-anim-glitch-rgb-split` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-glitch-rgb-split">Hello</div>
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

Closes #81664
