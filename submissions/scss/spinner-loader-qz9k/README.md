# spinner-loader-qz9k

A ring loading spinner mixin built from a `conic-gradient` masked to a ring
shape, giving a soft-fading tail rather than the hard-edged gap the common
`border-top-color` spinner trick produces.

## Usage

```scss
@use 'spinner-loader' as *;

.loading-ring {
  @include spinner-loader($size: 2.5rem, $color: #34a853, $duration: 700ms);
}
```

```html
<div class="loading-ring" role="status" aria-label="Loading"></div>
```

| Param | Default | Description |
|---|---|---|
| `$size` | `2rem` | Overall diameter. |
| `$thickness` | `3px` | Ring stroke width. |
| `$color` | `#4c6ef5` | Spinner colour. |
| `$duration` | `800ms` | Time for one full rotation. |

## Why is it useful?

The most common CSS spinner is a circle with three solid border sides and
one transparent (`border-top-color: transparent`), rotated continuously —
simple, but it reads as a ring with a literal missing quarter-section
rather than a smoothly fading trail, which looks noticeably more mechanical
than spinners in most native OS/app loading indicators. Using a
`conic-gradient` from transparent to the spinner colour, masked down to a
ring shape via `radial-gradient`-based `mask`, produces a continuous
gradient sweep with a soft fade at the tail instead of a hard edge —
closer to how most platform-native spinners actually render.

Under `prefers-reduced-motion: reduce`, the spinner doesn't just stop
rotating (which would leave a static ring with an oddly abrupt-looking
transparent gap, since the gap's softness depends on continuous motion to
read correctly) — it swaps to a distinct low-contrast, evenly-toned ring
instead, so the reduced-motion state is a deliberately different, calmer
visual rather than the animated design simply paused mid-frame.

## Why mask instead of border-radius clipping

```scss
mask: radial-gradient(farthest-side, transparent calc(100% - #{$thickness}), #000 calc(100% - #{$thickness}));
```

Cutting a solid disc down to a ring shape needs to remove the *interior*
of the circle while keeping the outer edge, which a simple
`border-radius` alone can't do (that only rounds corners of a box, it
doesn't punch a hole in the middle). A `radial-gradient`-based mask can:
it's opaque (`#000`, fully masking-through) everywhere except the inner
region up to `100% - $thickness`, which is transparent (fully masked-out) —
so only a ring of the specified thickness at the outer edge survives the
mask, letting the underlying `conic-gradient` show through only there.

## Providing a fallback for engines without mask support

`mask`/`-webkit-mask` have broad support in current browsers, but for a
codebase that needs to support older engines without it, a reasonable
fallback is the classic `border-top-color: transparent` spinner as a
simpler alternative — accepting the harder-edged look in exchange for not
depending on `mask` at all:

```scss
@supports not ((mask: none) or (-webkit-mask: none)) {
  .spinner-loader-demo {
    background: none;
    border: 3px solid rgba(76, 110, 245, 0.2);
    border-top-color: #4c6ef5;
  }
}
```

## Accessible labeling

The spinner element itself communicates nothing to assistive technology on
its own — pairing it with `role="status"` and an `aria-label` (as shown in
the usage example) is what actually announces "loading" to a screen reader.
Without that, a purely decorative spinning ring is silently skipped by
assistive tech, leaving no indication to a non-sighted user that content is
still loading.
