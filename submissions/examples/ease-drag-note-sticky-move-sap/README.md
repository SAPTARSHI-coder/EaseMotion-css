# Drag Note Sticky Move

Freely draggable sticky notes on a corkboard-style canvas, lifting with a
shadow and straightening out of their default tilt while being moved, with
full keyboard repositioning.

**Level:** Advanced

## Usage

Each `.sticky-note` is absolutely positioned within `.board`. Dragging
(Pointer Events, clamped to stay within the board bounds) or Arrow keys
(12px steps, same clamping) reposition each note independently.

## Accessibility

- Each note is `role="group"` with a full `aria-label` describing its
  content and that it's draggable/keyboard-movable.
- Fully keyboard-operable via Arrow keys per note, entirely independent of
  pointer dragging.
- `:focus-visible` outline shown, distinct from the drag-lift shadow/scale feedback.
- `prefers-reduced-motion` removes the lift shadow/scale/rotate transition
  during drag; notes still move correctly, just without the eased lift effect.

## Notes

- Both drag and keyboard movement are clamped against the board's own
  bounds (accounting for each note's width/height), so notes can never be
  dragged or keyed outside the visible corkboard area.
- The slight default rotation (alternating ±2deg per note) straightens to
  0deg while actively dragging, giving a "picked up and being placed
  straight" feel, then returns to its tilt once released (via CSS, not JS,
  since the tilt is a static per-note style rather than drag-driven state).
- This demo doesn't persist note positions between page loads; wire up
  storage (e.g. `localStorage` or a backend) in real usage.