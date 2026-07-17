# Halftone Hover Reveal

## What does this do?
A CSS-only halftone dot screen overlays a card; hovering dissolves the dots and reveals the clean content underneath.

## How is it used?
Add the base class plus a variant modifier to any card element:

```html
<div class="halftone-card halftone-mono" tabindex="0">
  <div class="card-body">
    <h2>Title</h2>
    <p>Content revealed on hover.</p>
  </div>
</div>
```

Available variants:
- `halftone-mono` — flat dot screen on a solid background
- `halftone-blend` — dark dots with `mix-blend-mode: multiply` over a gradient
- `halftone-print` — entrance animation that plays on load, then clears on hover

## Why is it useful?
The halftone effect is built entirely from a `radial-gradient` repeating pattern on a `::before` pseudo-element. No canvas, no SVG filters, no JavaScript. On hover (or `:focus-within`), `background-size` scales up and `opacity` drops to zero, spacing the dots apart until they vanish. The print variant drives the inverse: `@keyframes` compresses the dot grid from 2px to 6px on load, then the hover transition clears it. Three configurable custom properties — `--dot-size`, `--dot-color`, `--transition-speed` — let developers restyle without touching the animation logic.
