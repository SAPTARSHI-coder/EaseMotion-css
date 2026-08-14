# Drag Annotation Pin

A numbered annotation pin draggable across an image (like a design-review
or feedback tool), with hover/press scale feedback and full keyboard
repositioning.

**Level:** Advanced

## Usage

`.pin` is positioned by percentage over `.canvas`. Dragging (Pointer
Events, clamped 0–100%) or Arrow keys (2% steps, same clamping) reposition
it relative to the image.

## Accessibility

- The pin is a real `<button>` with a full descriptive `aria-label`
  summarizing both its annotation content and that it's draggable/keyboard-movable.
- Fully keyboard-operable via Arrow keys, entirely independent of pointer dragging.
- `:focus-visible` outline shown distinctly from the hover/active scale feedback.
- `prefers-reduced-motion` removes the hover/press scale transition; the
  pin still visibly responds to interaction state, just without eased scaling.

## Notes

- Uses Pointer Events with `setPointerCapture`, consistent with other
  drag components in this set.
- This demo covers repositioning a single existing pin; a full annotation
  tool would also need creation (click-to-place a new pin) and a way to
  view/edit each pin's associated comment text — both left out here to keep
  the submission focused on the drag-to-reposition interaction itself.
- `aria-label` is static in this demo; a production version should update
  it if the pin's position changes in a way that affects its meaning (e.g.
  "top-left corner" vs "center"), similar to the crop-frame component's
  `aria-valuetext` note.