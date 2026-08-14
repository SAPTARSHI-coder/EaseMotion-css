# mask-composite Wipe Collection

## What does this do?
Four hover-triggered reveal animations built on `mask-composite`, demonstrating how stacking two CSS mask layers and controlling their composite mode produces reveals impossible with a single mask.

## How is it used?
Apply a variant class to any card element:

```html
<div class="mask-card mask-intersect" tabindex="0">
  <div class="card-bg"></div>
  <div class="card-content">Your content</div>
</div>
```

Available variants:
- `mask-intersect` — donut iris: only the ring between two expanding circles is revealed
- `mask-subtract` — linear sweep with a fixed circular cut-out punched through it
- `mask-exclude` — x-ray: pixels under exactly one mask layer show; overlapping areas re-hide
- `mask-add` — two independent circles expand and then merge into a full reveal

## Why is it useful?
`mask-composite` unlocks a class of reveals that a single `mask-image` layer cannot produce. The donut iris, for example, requires two radial gradients: one blocking the centre, one blocking the outer ring — `intersect` shows only the overlap between the two opaque areas. `@property` registers `--r1` and `--r2` as `<percentage>` types so the browser can properly interpolate them inside `mask-image` definitions. Cross-browser note: WebKit uses `-webkit-mask-composite` with different value names (`source-in`, `source-out`, `xor`, `source-over`) while the standard uses `intersect`, `subtract`, `exclude`, `add` — both are included. Animations are paused by default and start on `:hover` / `:focus-within`.
