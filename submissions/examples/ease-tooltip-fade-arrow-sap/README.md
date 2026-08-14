# Tooltip Fade Arrow

A hover/focus tooltip that fades and rises slightly into place above its
trigger, with a small pointing arrow rendered via a CSS border-triangle.

**Level:** Beginner

## Usage

Pure CSS, no JS. Pair a trigger element (with `aria-describedby` pointing
to the tooltip's `id`) with a sibling `<span role="tooltip">`, shown via the
`~` sibling combinator on `:hover`/`:focus-visible`.

## Accessibility

- The trigger has `aria-describedby` referencing the tooltip's `id`, so
  screen readers announce the tooltip text as supplementary description
  regardless of its visual hover-only state.
- The tooltip itself uses `role="tooltip"`.
- Tooltip appears on `:focus-visible` as well as `:hover`, so keyboard users
  tabbing to the trigger see the same tooltip mouse users get.
- `pointer-events: none` on the tooltip prevents it from intercepting
  clicks/hover meant for content underneath it.
- `prefers-reduced-motion` removes the rise transform and fade transition
  timing is shortened; the tooltip still appears/disappears correctly on
  hover/focus, just without the slide-up motion.

## Notes

- The arrow is a zero-size element with only a top border colored, a
  standard CSS-triangle technique — no extra image or SVG needed.
- This is a pure CSS hover/focus tooltip; it doesn't reposition dynamically
  to avoid viewport edges (no JS collision detection) — fine for a fixed
  layout position like this demo, but worth adding for tooltips near
  screen edges in production use.