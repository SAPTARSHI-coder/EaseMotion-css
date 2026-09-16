# Scroll Image Parallax Tilt

An image that drifts vertically and tilts slightly as the page scrolls,
based on its position relative to the viewport, using scroll-driven
transforms rather than fixed keyframe animation.

**Level:** Advanced

## Usage

The `.tilt-img` is taller than its `.tilt-frame` container (`height: 130%`)
so it has room to drift without exposing empty space. A scroll listener
computes a 0–1 progress value from the frame's viewport position and maps
it to a `translateY` + `rotate` transform.

## Accessibility

- The transform is driven purely by scroll position, not a looping
  animation, so it never moves without direct user scrolling action.
- `prefers-reduced-motion` is checked in JS before applying any transform on
  scroll (the handler returns early), and CSS additionally forces
  `transform: none !important` as a hard guarantee the image stays static
  for motion-reduced users regardless of any residual inline style.
- Scroll listener is `{ passive: true }` for scroll performance.

## Notes

- Progress calculation:
  `(viewportHeight - elementTop) / (viewportHeight + elementHeight)`,
  clamped to `[0, 1]` — gives a smooth 0→1 sweep as the element travels
  through the viewport, independent of page length.
- Oversized image (`height: 130%`) combined with `overflow: hidden` on the
  frame is what allows the vertical drift without revealing gaps at the
  frame edges.