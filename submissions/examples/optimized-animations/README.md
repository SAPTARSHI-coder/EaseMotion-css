# Optimize Animations to Reduce Layout Shifts

Demo submission for issue **#47381 — [PERFORMANCE] Optimize animations to reduce layout shifts**.

## What this demonstrates

A side-by-side comparison of two ways to animate an element:

| | Bad ❌ | Good ✅ |
|---|---|---|
| Properties animated | `left`, `width` | `transform`, `opacity` |
| Triggers layout (reflow) | Yes, every frame | No |
| Triggers paint | Yes | Only on composite layer |
| GPU accelerated | No | Yes |
| Typical performance | Janky on low-end devices | Smooth 60fps |

## Why this matters

Animating geometric properties like `top`, `left`, `width`, or `height` forces the
browser to recompute layout on every animation frame (a "reflow"), then repaint,
then composite. This is expensive and is the main cause of jank and dropped
frames, especially on low-end mobile devices.

Animating `transform` and `opacity` instead skips layout and paint entirely —
the browser can hand the whole animation off to the GPU as a composited layer,
which is dramatically cheaper.

## Files

- **`demo.html`** — Markup with two animated boxes and buttons to trigger each animation.
- **`style.css`** — Contains both the layout-triggering (`.box--bad`) and GPU-friendly
  (`.box--good`) keyframe animations, with comments explaining the difference.
- **`README.md`** — This file.

## How to view

Open `demo.html` in any modern browser. Click **"Animate (bad)"** and
**"Animate (good)"** to compare. Optionally open DevTools → Performance/Rendering
tab and enable **"Paint flashing"** or record a performance trace — you'll see the
bad animation triggers layout/paint on every frame while the good one only
triggers compositing.

## Optimization techniques applied

- ✅ Used `transform` (`translateX`, `scale`) instead of `left`/`width`
- ✅ Animated `opacity` instead of visibility-related properties
- ✅ Avoided animating `box-shadow`; used a static shadow instead
- ✅ Added `will-change: transform, opacity` as a compositing hint on the optimized element
- ✅ No layout-dependent properties (`top`, `left`, `width`, `height`, `margin`) are animated in the "good" example