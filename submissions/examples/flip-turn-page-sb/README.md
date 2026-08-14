# Flip Turn Page

A `flip-turn-page` keyframe utility class for the EaseMotion core animation library.

## What it does
A page-turn flip using rotateY (3D transform).

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-flip-turn-page` + `.ease-anim-flip-turn-page` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-flip-turn-page">Hello</div>
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

Closes #81882
