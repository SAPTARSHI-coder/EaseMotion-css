# Drag Image Crop Frame

A draggable crop selection frame over an image, with a rule-of-thirds grid
overlay and a darkened mask outside the selection — plus keyboard arrow-key
repositioning.

**Level:** Advanced

## Usage

`.crop-frame` is positioned absolutely (by percentage) over `.crop-stage`.
Dragging uses Pointer Events with clamped bounds so the frame can't leave
the image area; Arrow keys nudge the frame in 3% steps with the same clamping.

## Accessibility

- The frame is `role="slider"` with `tabindex="0"` and a descriptive
  `aria-label`/`aria-valuetext` summarizing its current position/size in
  words, since a 2D crop position doesn't map to a single ARIA
  min/max/now numeric value cleanly.
- Full keyboard support via Arrow keys, entirely independent of the
  pointer-drag path, with the same edge-clamping logic applied.
- `outline` via `:focus-visible` shows clear keyboard focus on the frame.
- `prefers-reduced-motion` has no continuous/looping animation to disable
  here (position changes are direct, not eased) — included for consistency
  and to cover any future transition additions.

## Notes

- `aria-valuetext` is set once in the initial markup for this demo; a
  production implementation should update it dynamically after each
  drag/keyboard move (e.g. via a computed description of position) so
  assistive tech always reflects the current crop area, not just the
  initial one — flagged here rather than fully implemented to keep the
  demo focused.
- The darkened surrounding mask uses a giant `box-shadow` spread
  (`0 0 0 9999px`) rather than four separate overlay divs, a common
  lightweight crop-mask technique.