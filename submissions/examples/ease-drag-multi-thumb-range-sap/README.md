# Drag Multi Thumb Range

A three-segment range with two draggable boundary thumbs, splitting a track
into three colored proportional sections (e.g. shift scheduling), each
thumb independently draggable and keyboard-adjustable.

**Level:** Advanced

## Usage

Each thumb is `role="slider"` and clamped against the other thumb (with a
minimum gap) so boundaries can't cross or collapse a segment to zero width.
Segment widths/positions are recalculated from both thumb values on every change.

## Accessibility

- Each thumb has its own `role="slider"` with a descriptive `aria-label`
  identifying which boundary it represents ("Boundary between shift 1 and
  2"), and `aria-valuemin`/`aria-valuemax`/`aria-valuenow` kept in sync.
- Both thumbs are independently focusable and fully operable via
  ArrowLeft/ArrowRight, with the same clamping logic as pointer dragging.
- `:focus-visible` outline shown on whichever thumb has keyboard focus.
- `prefers-reduced-motion` has no continuous animation to disable (segment/
  thumb positions update directly); included for consistency with the rest
  of the set.

## Notes

- Each thumb's clamp uses a small minimum gap (3%) against the other
  thumb's current value, preventing a segment from ever fully collapsing to
  zero width, which would make it visually disappear and harder to
  re-select via dragging.
- This generalizes the two-thumb `ease-drag-range-dual-thumb-sap` pattern
  to three segments; the same approach extends to N segments/thumbs by
  clamping each thumb against its immediate neighbors only.