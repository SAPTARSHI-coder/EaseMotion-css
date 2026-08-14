# Drag Vertical Slider

A custom vertical slider (e.g. for volume) draggable via pointer, with full
Arrow key + Home/End keyboard support, built as a proper ARIA slider widget.

**Level:** Advanced

## Usage

The slider is a `role="slider"` div. Dragging computes a 0–100 value from
pointer Y position relative to the track; `ArrowUp`/`ArrowDown` step by 5,
`Home`/`End` jump to min/max.

## Accessibility

- Implements the ARIA slider pattern: `role="slider"`,
  `aria-orientation="vertical"`, `aria-label`, and `aria-valuemin`/
  `aria-valuemax`/`aria-valuenow` kept in sync on every change.
- Fully keyboard-operable independent of dragging: ArrowUp/ArrowDown adjust
  by a fixed step, Home/End jump to the extremes — the standard expected
  keys for an ARIA slider.
- The numeric value is also shown as visible text (`#vValue`), not conveyed
  by thumb position alone.
- `:focus-visible` outline shown on the slider track area.
- `prefers-reduced-motion` removes the fill/thumb position transitions,
  keeping the very short (50ms) easing disabled in favor of instant updates.

## Notes

- Uses Pointer Events with `setPointerCapture`, consistent with the other
  drag-based components in this set, so dragging stays reliable even if the
  pointer moves off the thin track mid-drag.
- Value calculation inverts the Y axis (`rect.bottom - clientY`) since
  "up" should increase the value for a vertical slider, matching users'
  physical expectations (like a mixing-desk fader).