# Bounce Retina Text-Blur Fix (Issue #32487)

## 1. What does this do?

Prevents text inside a bouncing element from becoming blurry or pixelated on
high-DPI (retina) displays by forcing GPU compositor-layer creation at full
pixel density **before** the animation starts, eliminating mid-animation
re-rasterisation.

## 2. How is it used?

```html
<div class="bounce-crisp">
  <p>Sharp text during bounce!</p>
</div>
```

```css
.bounce-crisp {
  /* ① GPU layer at full retina DPI from the very first paint */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);

  /* ② Lock rasterisation mode for the entire animation lifetime */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  /* ③ Greyscale antialiasing — the only hinting mode safe on composited layers */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* ④ Pre-allocate GPU texture before the first frame */
  will-change: transform;

  animation: bounce-crisp 1.8s cubic-bezier(0.8, 0, 1, 1) infinite;
}

@keyframes bounce-crisp {
  0%, 100% {
    transform: translateY(0) translateZ(0);   /* translateZ(0) at every stop */
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(-22px) translateZ(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .bounce-crisp {
    animation: none !important;
    transform: translateZ(0) !important;
    will-change: auto;
  }
}
```

## 3. Why is it useful?

### Root cause

When a CSS animation uses `translateY()`, the browser may decide to promote
the element to a **GPU compositor layer** at the moment the transform first
changes — i.e., during the first animation frame. On retina displays the GPU
texture for that layer is created at the element's current subpixel position,
which means the rasteriser doesn't have enough information to correctly
anti-alias the text glyphs. The result is blurry, soft, or pixelated text at
every frame where the element is not at an integer pixel boundary.

### Why `translateZ(0)` fixes it

Setting `translateZ(0)` (or any non-trivial 3D transform) on the **element
itself** — not just inside the keyframes — forces the browser to create the
compositor layer immediately during the initial layout paint, before any
animation frame runs. At that moment the element is at rest at a clean integer
position, so the GPU texture is rasterised at the correct full-DPI resolution.
When `translateY` then moves the element, it is simply shifted as a texture
on the GPU — no re-rasterisation occurs.

### Why `translateZ(0)` must appear in every keyframe stop too

Without `translateZ(0)` in the keyframes, some browsers (notably older Safari)
infer the compositor layer is no longer needed at the `0%, 100%` stops and
drop it back to the CPU path. When the animation loops it re-creates the layer
at whatever sub-pixel position the element is at — reproducing the blur.
Including `translateZ(0)` at every stop keeps the GPU layer continuously
active.

### Why `-webkit-font-smoothing: antialiased`

Browsers disable **subpixel antialiasing** on composited (GPU) layers because
the compositing engine doesn't have access to the surrounding pixel colours
needed for subpixel hinting. When subpixel smoothing is the default (macOS
standard displays) and the element enters a composited layer, the browser
falls back to **no antialiasing at all** on some rendering paths, producing
jagged glyphs. Setting `-webkit-font-smoothing: antialiased` explicitly
selects greyscale antialiasing, which is fully supported on GPU layers.

### Retina prevalence

As of 2024, all MacBook models, all iPhones, and most flagship Android devices
ship with ≥ 2× DPI screens. The `devicePixelRatio` will be `2` or higher for
the majority of EaseMotion CSS users on Apple hardware.

This submission follows EaseMotion CSS's philosophy of **pure-CSS,
zero-dependency fixes** — the correction is entirely declarative and requires
no JavaScript.
