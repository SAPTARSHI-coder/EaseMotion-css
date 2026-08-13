# Scroll Image Reveal Clip

An image that's initially clipped to zero visible width and wipes fully
into view (left to right) as it enters the viewport, via an animated
`clip-path`.

**Level:** Intermediate

## Usage

`.clip-img` starts fully clipped (`inset(0 100% 0 0)`). An
`IntersectionObserver` adds `.is-revealed` once the image crosses 30%
visibility, animating `clip-path` to `inset(0 0 0 0)` — a left-to-right wipe.

## Accessibility

- The `<img>` retains its full, real `alt` text at all times — the clip is
  a pure visual reveal effect and doesn't affect the image's presence or
  description in the accessibility tree.
- The reveal triggers once (`unobserve` after triggering), so re-scrolling
  past the image doesn't repeatedly re-clip and re-reveal it.
- `prefers-reduced-motion` sets the image to its fully-revealed clip state
  immediately with no transition, so the image is never left artificially
  hidden for motion-reduced users who might not trigger a scroll-based reveal.

## Notes

- Using `clip-path: inset()` (rather than `width`/`transform`) means the
  image element keeps its full final layout box the whole time — only the
  visible painted region changes — which avoids any layout reflow during
  the reveal animation.
- The `round 16px` argument on `inset()` keeps the image's rounded corners
  consistent throughout the wipe, rather than only appearing once fully revealed.