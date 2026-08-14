# Infinite Auto-Scrolling Masonry Columns

A hero section with vertical image columns that auto-scroll infinitely —
alternating columns scroll up and down — built with pure CSS for a
GPU-accelerated, JS-free effect popularized by agency portfolio sites.

## How it works

- Each column's image set is **duplicated once** inside `.column-track`.
- A `translateY` keyframe animation moves the track from `0%` to `-50%`
  (or the reverse for downward columns).
- Because the track is exactly two copies of the same set, the moment the
  animation completes one full cycle, the second copy is pixel-identical
  to the first — creating a seamless, invisible loop with no JS and no
  reset flicker.
- `will-change: transform` and animating only `transform` keeps the
  effect GPU-accelerated and smooth.
- A top/bottom `mask-image` gradient fades the column edges so images
  don't feel abruptly clipped.

## Customizing

- **Speed:** change the `animation-duration` on `.scroll-up` /
  `.scroll-down` (or use the `.column-slow` modifier for a slower column).
- **Direction:** apply `.scroll-up` or `.scroll-down` to any `.column`.
- **Column count:** add/remove `.column` blocks in `demo.html`; the flex
  layout distributes width automatically.
- **Images:** swap the `<img>` `src` values — just make sure the same set
  appears twice in a row inside each `.column-track` for the loop to stay
  seamless.

## Accessibility

- Respects `prefers-reduced-motion: reduce` by disabling all animation.
- Decorative images use empty `alt=""` since they're purely visual.

## Browser support

Uses standard CSS `mask-image` (with `-webkit-` prefix for Safari) and
`animation` — supported in all modern evergreen browsers.