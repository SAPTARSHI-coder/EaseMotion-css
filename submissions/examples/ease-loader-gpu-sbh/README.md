# ease-loader-gpu

GPU-friendly loaders that animate only `transform` and `opacity`. Fixes the issue where nested loader animations animated layout properties (`width`/`height`/`top`/`left`), triggering layout reflows and heavy repaints.

## What does this do?

Four loaders, all compositor-only (no layout/paint on the main thread):

- **Spinner** — `@keyframes ease-spin` animates `transform: rotate()` only.
- **Dot bounce** — `@keyframes ease-dot-bounce` animates `transform: translateY()` only (staggered).
- **Bar sweep** — `@keyframes ease-bar` animates `transform: scaleY()` only (`transform-origin: bottom`).
- **Shimmer skeleton** — `@keyframes ease-shimmer` animates `transform: translateX()` only on a highlight band over a tinted block.

Each animated element sets `will-change: transform` to hint the compositor to promote it to its own layer.

## Why is this useful?

- **Directly fixes the issue** — the root cause was animating layout properties; `transform`/`opacity` are the canonical GPU-friendly properties that skip layout and paint.
- **No reflow** — layout-dependent properties (`width`, `height`, `top`, `left`, `margin`) are never animated, so siblings and ancestors don't reflow each frame.
- **`will-change`** — hints the browser to prepare a compositor layer up front, avoiding jank on the first frames.
- **Accessible** — each loader is `role="status"` with an `aria-label`; `prefers-reduced-motion` disables all animations.

## How is it used?

```html
<link rel="stylesheet" href="style.css" />

<div class="ease-loader ease-loader--spinner" role="status" aria-label="Loading"></div>

<div class="ease-loader ease-loader--dots" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>
```

## Files

- `demo.html` — self-contained showcase (4 loaders + the animated property for each). No CDNs/frameworks.
- `style.css` — 4 loaders, all `transform`/`opacity` keyframes, `will-change`, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions.
