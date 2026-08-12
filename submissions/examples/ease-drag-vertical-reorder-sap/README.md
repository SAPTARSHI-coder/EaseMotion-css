# Drag Vertical Reorder

A reorderable vertical list using native HTML5 Drag and Drop, plus a
keyboard-accessible Alt+Up/Down fallback for moving items without a mouse.

**Level:** Advanced

## Usage

Items are `draggable="true"` and `tabindex="0"`. Drag-and-drop reordering
uses `dragstart`/`dragover`/`dragend`; keyboard reordering uses
`Alt+ArrowUp`/`Alt+ArrowDown` on a focused item.

## Accessibility

- Native drag-and-drop alone is not keyboard-operable, so this component
  adds an explicit `Alt+Up`/`Alt+Down` keyboard path that performs the same
  reorder via `insertBefore`, kept independent of the drag handlers.
- Items are focusable (`tabindex="0"`) with a visible `:focus-visible` outline.
- `prefers-reduced-motion` removes the transform/box-shadow transition,
  keeping only the opacity change during an active drag.
- This demo omits `aria-live` position announcements for brevity; a
  production version should announce "Moved to position X of Y" on each
  keyboard reorder so screen reader users get confirmation of the new order.

## Notes

- `dragover` calculates whether the pointer is in the top or bottom half of
  the hovered item to decide whether to insert before or after it, giving
  smoother mid-drag reordering feedback than a fixed insert point.
- Keyboard reordering directly manipulates the DOM order via `insertBefore`,
  the same mechanism the pointer-drag path uses, so both stay consistent.