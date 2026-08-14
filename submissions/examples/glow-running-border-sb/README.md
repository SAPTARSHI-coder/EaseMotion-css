# Glow Running Border

A `glow-running-border` keyframe utility class for the EaseMotion core animation library.

## What it does
A glowing border running around via animated background-position. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-glow-running-border` + `.ease-anim-glow-running-border` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-glow-running-border">Hello</div>
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

Closes #81713
