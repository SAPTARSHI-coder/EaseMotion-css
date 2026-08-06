# Scroll Track mixin

> Issue: [#63563](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63563)

Cross-browser scrollbar styling, plus JavaScript-free scroll shadows.

## Mixins

### `scroll-track($thumb, $track, $size, $shadow, $surface)`

```scss
.panel { @include scroll-track($thumb: rgba(148, 163, 184, 0.3)); }
.report { @include scroll-track($shadow: true, $surface: #0b1120); }
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$thumb` | `Color` | `rgba(148,163,184,0.3)` | Thumb colour. |
| `$track` | `Color` | `transparent` | Track colour. |
| `$size` | `Number` | `10px` | Thickness (webkit only). |
| `$shadow` | `Bool` | `false` | Emit scroll shadows. |
| `$surface` | `Color` | `null` | **Required** when `$shadow` is true. |

### `scroll-shadow($surface, $size, $shade)`

Scroll shadows on their own.

### `scroll-track-hide`

Hides the scrollbar while keeping the element scrollable.

### `scroll-snap-x($align, $padding)`

Horizontal snap track.

## Why it fits EaseMotion

**Two independent scrollbar APIs exist and neither is a superset of the other.** `scrollbar-color` / `scrollbar-width` are the standard properties (Firefox, and more recently Chromium) but only accept colours and a coarse `thin`/`auto` width. `::-webkit-scrollbar-*` allows arbitrary sizing, radius and padding but is ignored by Firefox. Emitting both is the only way to cover the field, and they are ordered standard-first so the more capable pseudo-element rules win where an engine supports both.

**The scroll shadow needs no JavaScript.** It layers four gradients: two pinned to the content via `background-attachment: local`, and two pinned to the container via `scroll`. Layer order is load-bearing — the `local` covers are listed *first* so they paint over the shadow gradients at the extremes. At the top of the scroll range the cover sits flush over the top shadow and hides it; as content scrolls away the cover moves with it and the shadow is revealed.

`$surface` is **required** when shadows are enabled rather than defaulting to white, because the cover gradients must fade into the real background colour. Guessing wrong renders them as visible grey bars across the top and bottom of the container — so this fails the build instead.

`scroll-track-hide` documents its own cost: hiding a scrollbar removes an affordance, so it should only be used where another cue (arrows, peeking content) signals that the area scrolls.
