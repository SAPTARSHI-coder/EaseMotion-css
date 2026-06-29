# will-change GPU patterns

A self-contained example showing how to use the CSS `will-change` property to
get smooth, GPU-accelerated animations — and the usage patterns that keep it
from hurting performance.

## What does this do?

`will-change` hints to the browser that an element is about to change, so it can
promote the element to its own GPU compositing layer ahead of time. When paired
with composited properties (`transform`, `opacity`), animations run on the GPU
and avoid main-thread layout/paint jank.

## How is it used?

Add the relevant class to an element you intend to animate:

```html
<div class="will-change-good">Scoped hint on hover</div>
<div class="gpu-layer">Forced GPU compositing layer</div>
```

## Proper usage patterns

| Pattern | Class | Why |
|---|---|---|
| Hint only when needed | `will-change-good` | Promotes the layer on `:hover`/`:focus-visible`, then auto-resets when idle |
| Force a GPU layer | `gpu-layer` | `transform: translateZ(0)` + `backface-visibility: hidden` for transform animations |
| Reset after animating | `will-change-reset` | Set this back (e.g. via JS) when an animation ends to release layer memory |

### Do

- Hint `will-change` **just before** an element animates, not permanently.
- Only hint **`transform`** and **`opacity`** — the properties the GPU composites cheaply.
- **Remove/reset** the hint once the element is idle.
- Apply it to a **few key elements**, not everything.

### Don't

- Don't leave `will-change` on permanently — it keeps a compositing layer (and its
  memory) alive forever. The `will-change-bad` box in the demo shows this anti-pattern.
- Don't use `will-change: all` or hint layout-triggering properties — there's no GPU benefit.

## Why is it useful?

Transform- and opacity-heavy animations (cards, hover lifts, modals, carousels)
can stutter when the browser composites them on the fly. These patterns give
EaseMotion CSS users a correct, memory-safe way to opt into GPU acceleration.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser and hover the boxes to see the effect.

## Contribution Notes

- Class naming was handled by the contributor
- Maintainer will rename to `ease-*` convention before merging
