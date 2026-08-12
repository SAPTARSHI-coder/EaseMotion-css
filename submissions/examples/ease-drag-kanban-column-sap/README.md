# Drag Kanban Column

A simple three-column Kanban board where cards can be dragged between
columns via native HTML5 drag-and-drop, with an Alt+Arrow keyboard fallback
to move a focused card between columns.

**Level:** Advanced

## Usage

Cards are `draggable="true"` and `tabindex="0"`. Dropping on a `.card-list`
moves the card there via `appendChild`. Focused cards can also move via
`Alt+ArrowLeft`/`Alt+ArrowRight` to shift into the adjacent column.

## Accessibility

- Native drag-and-drop excludes keyboard users, so an explicit
  `Alt+ArrowLeft`/`Alt+ArrowRight` path moves the focused card between
  columns using the same DOM operation, independent of the drag handlers.
- An `aria-live="polite"` region (visually hidden via `.sr-only`)
  announces the card's new column after every move, whether by drag or keyboard.
- Cards remain focusable after being moved (`card.focus()` after a
  keyboard move), so users can continue moving the same card without
  losing their place.
- `prefers-reduced-motion` removes the card's transform transition, keeping
  only the opacity change during an active drag.

## Notes

- This demo covers card-to-column moves (left/right); reordering cards
  *within* a column isn't implemented — a natural next step would add
  `dragover` position detection within a list (similar to
  `ease-drag-vertical-reorder-sap`) plus Alt+Up/Down for the keyboard path.
- Column drop targets get a `.is-over` background highlight is not wired
  in this minimal version's `dragover` handler; only `dragover` +
  `preventDefault()` is used to permit the drop — visual drop-target
  feedback is a good follow-up enhancement, flagged here rather than
  silently omitted.