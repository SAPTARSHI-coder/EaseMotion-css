# Bug Fix: Retina Display Text Blurriness Elimination

## Issue #32487

This submission resolves text blurriness issues observed during the scaling phases of the `.ease-bounce` animation on high-DPI (Retina) screens.

---

## 1. Description

When scaling elements containing text (`transform: scale(...)`), modern rendering engines (especially Blink and WebKit) rasterize the element block as a flat bitmap. Scaling this bitmap during transition causes noticeable interpolation blurriness.

By applying `will-change: transform`, `backface-visibility: hidden`, and forcing 3D acceleration using a perspective matrix or translation (`transform: translate3d(0, 0, 0) rotate(0.001deg)`), we instruct the rendering engine to render the text as vectors at target resolutions, avoiding blurriness.

---

## 2. Proposed Core Implementation

In [core/animations.css](file:///c:/Users/Harsh/EaseMotion-css/core/animations.css), update the `.ease-bounce` class properties:

```css
.ease-bounce {
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate3d(0, 0, 0) rotate(0.001deg);
  transform-style: preserve-3d;
}
```
