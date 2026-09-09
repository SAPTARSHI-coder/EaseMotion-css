# Lightning Flash Burst

A `lightning-flash-burst` keyframe utility class for the EaseMotion core animation library.

## What it does
A lightning bolt that flashes in bursts with scale + opacity.

## Files
- `demo.html` — interactive demo
- `style.css` — `@keyframes ease-lightning-flash-burst` + `.ease-anim-lightning-flash-burst` utility class

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-anim-lightning-flash-burst">Hello</div>
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

Closes #81868
