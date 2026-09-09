# Tooltip Follow Cursor

A tooltip that tracks the mouse position within a hover zone, useful for
labeling data points or interactive canvas/chart regions — with a fixed,
centered fallback position for keyboard focus.

**Level:** Intermediate

## Usage

`mousemove` on `.hover-zone` repositions `#followTip`'s `left`/`top`
relative to the pointer. `mouseenter`/`mouseleave` toggle visibility.
Keyboard `focus` shows the tooltip at a fixed position above the zone
(since there's no cursor position to follow for keyboard users) and `blur` hides it.

## Accessibility

- The hover zone has `aria-describedby` pointing at the tooltip's `id`, so
  the tooltip content is exposed to screen readers as a description
  regardless of visual/cursor state.
- Keyboard focus shows the tooltip at a sensible fixed position (top-center
  of the zone) rather than either not showing it at all or leaving it at a
  stale last-known cursor position — since cursor-following has no
  keyboard equivalent, this is an explicit, documented fallback rather than
  an assumption.
- `pointer-events: none` on the tooltip prevents it from ever intercepting
  interaction with the zone underneath.
- `prefers-reduced-motion` removes the position/scale transition, keeping
  a simple opacity fade; the fixed keyboard-focus position is unaffected either way.

## Notes

- This demo tracks cursor position within a generic hover zone; the same
  pattern applies well to per-data-point tooltips in charts (position the
  tooltip near the specific point being hovered, not the raw cursor, in
  that case).
- The `+16px` offset on both axes keeps the tooltip from sitting directly
  under the cursor, where it could obscure the pointer or get triggered
  into flicker by overlapping the hover boundary.