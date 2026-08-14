# CSS Hyper Speed Warp Drive

A dynamic particle starfield effect simulating warp speed, generated entirely with CSS `box-shadow`/transform stars scaled through a central 3D perspective point.

## What it does
48 stars positioned around a circle each streak outward along the Z-axis via `translateZ`, creating an infinite warp-drive tunnel. No JavaScript.

## Files
- `demo.html` — interactive demo
- `style.css` — pure CSS animation
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="warp">
  <span class="warp__star" style="--x:120px;--y:0px"></span>
  ...
</div>
```

## Techniques
- `perspective` + `translateZ` for depth.
- Staggered `animation-delay` for a continuous starfield.
- Hardware-accelerated `transform`/`opacity` for 60 FPS.

## Accessibility
- `role="img"` + `aria-label` for screen readers.
- `prefers-reduced-motion` disables the streaks.

Closes #75227
