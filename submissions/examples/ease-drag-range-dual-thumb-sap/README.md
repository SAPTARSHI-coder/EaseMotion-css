# Drag Range Dual Thumb

A dual-handle range slider (e.g. min/max price filter) with two
independently draggable thumbs, a connecting fill bar, and full keyboard support.

**Level:** Advanced

## Usage

Both thumbs are `role="slider"` buttons positioned by percentage along
`.range-track`. Dragging (Pointer Events) or Arrow keys adjust each thumb's
value, with each clamped to stay a minimum distance from the other so they
can't cross.

## Accessibility

- Each thumb is an independent `role="slider"` with its own descriptive
  `aria-label` ("Minimum price"/"Maximum price") and
  `aria-valuemin`/`aria-valuemax`/`aria-valuenow` kept in sync.
- Both thumbs are focusable (`tabindex="0"`) and fully operable via
  ArrowLeft/Right/Up/Down independent of dragging.
- The current range is also shown as visible text
  ("$20 — $80"), not conveyed by thumb position alone.
- `:focus-visible` outline shown on whichever thumb has keyboard focus.
- `prefers-reduced-motion` has no continuous animation to disable here
  (positions update directly); included for consistency with the rest of
  the set and to cover any future transition additions.

## Notes

- Each thumb's movement is clamped against the other's current value (with
  a small buffer) so the min thumb can never be dragged/keyed past the max
  thumb and vice versa.
- Uses Pointer Events with `setPointerCapture` per thumb, consistent with
  other drag components in this set, for reliable independent dragging of
  each handle.