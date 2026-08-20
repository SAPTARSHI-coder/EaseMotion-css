# Radar Sweep Ping

A `radar-sweep-ping` keyframe utility class for the EaseMotion core animation library.

## What it does
A radar ping expanding and fading (scale + opacity). Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-radar-sweep-ping` + `.ease-anim-radar-sweep-ping` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-radar-sweep-ping">Hello</div>
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

Closes #81684
