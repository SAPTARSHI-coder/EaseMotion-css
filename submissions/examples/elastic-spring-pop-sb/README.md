# Elastic Spring Pop

A `elastic-spring-pop` keyframe utility class for the EaseMotion core animation library.

## What it does
An elastic spring pop with overshoot (scale + opacity). Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-elastic-spring-pop` + `.ease-anim-elastic-spring-pop` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-elastic-spring-pop">Hello</div>
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

Closes #81678
