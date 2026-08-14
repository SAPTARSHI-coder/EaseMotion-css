# Flash Pulse Sparkle

A `flash-pulse-sparkle` keyframe utility class for the EaseMotion core animation library.

## What it does
A sparkle that pulses in and out with scale + opacity.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-flash-pulse-sparkle` + `.ease-anim-flash-pulse-sparkle` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-flash-pulse-sparkle">Hello</div>
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

Closes #81876
