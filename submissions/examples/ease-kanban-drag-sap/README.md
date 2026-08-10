# ease-kanban-drag-sap

A drag-and-drop kanban board — cards can be dragged between columns, with visual feedback on both the dragged card and the drop target.

## Usage
1. Include `style.css`.
2. Add markup: `.kanban-col` sections, each containing `draggable="true"` `.kanban-card` elements.
3. Attach the native HTML5 Drag and Drop event listeners from `demo.html`.

## Customization
- Column/card colors and spacing.
- `.dragging`/`.drag-over` visual states.
- Add more columns/cards — logic works with any count via `querySelectorAll`.

## Notes
- Built on the native HTML5 Drag and Drop API (`draggable="true"`, `dragstart`/`dragover`/`drop`), not a pointer-events reimplementation — lighter weight but note it has limited mobile/touch support by design.
- `e.preventDefault()` on `dragover` is required for `drop` to fire at all.
- Respects `prefers-reduced-motion`: hover-lift and drag-over background transitions are removed; the drag interaction itself is unaffected since it's functional, not decorative.