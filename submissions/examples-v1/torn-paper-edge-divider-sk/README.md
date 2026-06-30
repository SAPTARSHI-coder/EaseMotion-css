# Torn Paper Edge Divider

## What does this do?
A CSS-only section divider that looks like physically torn paper, with a subtle breathing microanimation that makes the ragged edge feel alive.

## How is it used?
Place the divider element between any two sections:

```html
<div class="section section-dark">Above content</div>
<div class="torn-divider torn-horizontal"></div>
<div class="section section-light">Below content</div>
```

Three variants available:
- `torn-horizontal` — straight horizontal tear across the full width
- `torn-diagonal` — tear that descends from left to right
- `torn-double` — standalone strip with ragged edges on both top and bottom

The paper colour is set by `--paper-color` and animation speed by `--flutter-speed`.

## Why is it useful?
The torn edge is a `clip-path: polygon()` with 40+ waypoints tracing an organic jagged silhouette on a `::before` pseudo-element. A gentle `@keyframes` shifts the polygon points by 2–3% at the 50% mark, creating a subtle flutter without any layout shift. No SVG, no raster images, no JavaScript. The effect degrades gracefully: `prefers-reduced-motion` disables the keyframe while keeping the torn shape.
