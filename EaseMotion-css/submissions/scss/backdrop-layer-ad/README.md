# Backdrop Layer mixin

> Issue: [#63804](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63804)

Frosted surfaces and scrims with a fallback that stays legible when `backdrop-filter` is unavailable.

## Mixins

### `backdrop-layer($surface, $blur, $solid, $blurred, $saturate)`

```scss
.panel { @include backdrop-layer; }
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$surface` | `Color` | `#0b1120` | Base colour. |
| `$blur` | `Number` | `12px` | Blur radius. |
| `$solid` | `Number` | `0.92` | Fallback alpha. Must be ≥ `$blurred`. |
| `$blurred` | `Number` | `0.62` | Alpha once blur is confirmed. |
| `$saturate` | `Number` | `160%` | Saturation boost. |

### `backdrop-scrim($surface, $blur, $solid, $blurred)`

Full-viewport scrim behind a dialog, with a `forced-colors` fallback.

### `backdrop-edge($surface, $blur, $side)`

Sticky header/footer with the blur masked out at its inner edge.

### `backdrop-perf-hint`

Containment and compositing hints for frosted surfaces that move.

## Why it fits EaseMotion

**This is a legibility bug, not a cosmetic one.** The common pattern is a 40%-opaque background plus a blur. Where `backdrop-filter` is unsupported you are left with just the 40% scrim over whatever was behind it — and on a busy photo or a dense table, modal text becomes genuinely unreadable. The blur was doing the work, and the alpha alone cannot.

So the ordering is inverted from the usual: the **fallback is the opaque one** (`0.92`), legible with no blur at all, and the alpha is *reduced* to `0.62` only inside `@supports`, once the blur is confirmed to be carrying part of the load. A build error fires if `$solid` is set below `$blurred`, since that inverts the safety property the whole mixin depends on.

`saturate(160%)` accompanies the blur because heavy blurring desaturates — without it, colourful content behind a frosted panel goes flat and grey.

**`backdrop-edge` masks the blur at its inner edge.** A sticky header with a hard blur boundary reads as a pasted-on rectangle; fading it out removes the seam. The mask is gated on `@supports` for both `backdrop-filter` and `mask-image`, since a mask without a blur would just fade the header itself away.

`backdrop-perf-hint` exists because `backdrop-filter` is one of the most expensive things in CSS — it promotes the element to its own compositing layer and re-samples everything behind it every frame. The hint is documented as being for surfaces that *move*; on a static panel the extra layer is pure overhead, and `will-change` is dropped under `prefers-reduced-motion` where the animation will not run anyway.

`backdrop-scrim` restores an opaque `Canvas` background under `forced-colors: active`, where both the alpha and the filter are discarded and the scrim would otherwise vanish, leaving the dialog floating over live content.
