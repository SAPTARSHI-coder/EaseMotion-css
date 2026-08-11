# Synthwave Retrowave Grid Floor

## What does this do?
Renders an infinite 3D perspective grid floor with a retrowave sunset sky, animated in a continuous forward-scroll loop using only CSS transforms and background-position keyframes.

## How is it used?
Drop the scene structure into any full-viewport container:

```html
<div class="retro-scene">
  <div class="retro-sky">
    <div class="retro-sun"></div>
  </div>
  <div class="retro-horizon"></div>
  <div class="retro-floor">
    <div class="retro-grid-plane"></div>
  </div>
</div>
```

Speed is controlled by the `--grid-speed` custom property (default `1.6s`).

## Why is it useful?
The infinite depth illusion comes from a single CSS trick: `background-position` animating along the Y axis on a plane that is `rotateX(72deg)` inside a `perspective` container. As the background scrolls forward, the forced perspective makes it read as motion toward the viewer. No JavaScript scroll events, no canvas, no SVG — just `@keyframes` on `background-position`. The striped sun uses a `repeating-linear-gradient` with a `mask-image` to produce the classic halftone-stripe cutout. All colors are CSS custom properties, so the entire palette can be reskinned from `:root`.
