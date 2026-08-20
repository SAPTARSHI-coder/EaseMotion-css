# Gradient Flow Shift

A `gradient-flow-shift` keyframe utility class for the EaseMotion core animation library.

## What it does
A flowing gradient that shifts its background-position in a loop.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-gradient-flow-shift` + `.ease-anim-gradient-flow-shift` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-gradient-flow-shift">Hello</div>
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

Closes #81843
