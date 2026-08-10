# Drag Handle Resize

A two-panel layout with a draggable vertical handle that resizes the left
panel, using pointer events (mouse, touch, and pen unified) and keyboard
arrow-key support.

**Level:** Advanced

## Usage

Drag `.handle` left/right to resize `#panel`. Width is clamped between a
`MIN` and `MAX` defined in the script (180px–520px by default). Keyboard
users can focus the handle and use ArrowLeft/ArrowRight to resize in 10px steps.

## Accessibility

- Handle uses `role="separator"` with `aria-orientation="vertical"` and
  `aria-valuemin`/`aria-valuemax`/`aria-valuenow` kept in sync on every resize.
- Fully keyboard-operable via Arrow keys, independent of pointer dragging.
- The only animation is a small hover/focus scale on the handle's grip
  indicator; `prefers-reduced-motion` removes that transition. The resize
  itself is a direct width change, not an eased animation, so reduced-motion
  users lose no functionality.

## Notes

- Uses Pointer Events (`pointerdown`/`pointermove`/`pointerup` +
  `setPointerCapture`) instead of separate mouse/touch listeners, so dragging
  keeps working smoothly even if the pointer leaves the handle mid-drag.
- `touch-action: none` on the handle prevents the browser from also trying to
  scroll/pan during a drag on touch devices.