# Loading Skeleton Pulse

A skeleton loading placeholder (avatar + text lines) with a shimmering
highlight sweeping across each block, standing in for content while it loads.

**Level:** Beginner

## Usage

Wrap skeleton blocks in a `role="status"` container with a descriptive
`aria-label` (e.g. "Loading content"). Apply `.skel` to any placeholder
shape (avatar circle, text line bars).

## Accessibility

- The container uses `role="status"` with `aria-label="Loading content"`,
  so screen readers get a single concise announcement that content is
  loading, rather than trying to interpret empty gray shapes.
- The shimmer sweep is a `::after` pseudo-element layered over each block,
  purely decorative and not part of the accessible content.
- `prefers-reduced-motion` disables the shimmer animation, leaving static
  gray placeholder shapes — still a valid, if less dynamic, loading indicator.

## Notes

- Shimmer uses a `linear-gradient` translated across each block via
  `transform: translateX`, contained by `overflow: hidden` on `.skel` so it
  never bleeds outside individual placeholder shapes.
- This is a decorative loading state; swap the skeleton markup for real
  content (and toggle its visibility) once data has loaded, in real usage.