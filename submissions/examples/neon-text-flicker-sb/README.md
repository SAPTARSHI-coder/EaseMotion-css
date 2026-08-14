# Neon Text Flicker

A `neon-text-flicker` keyframe utility class for the EaseMotion core animation library.

## What it does
A flickering neon sign effect using opacity + text-shadow.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-neon-text-flicker` + `.ease-anim-neon-text-flicker` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-neon-text-flicker">Hello</div>
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

Closes #81866
