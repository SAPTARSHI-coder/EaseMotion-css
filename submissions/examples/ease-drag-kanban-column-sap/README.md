# ease-drag-kanban-column-sap

Draggable kanban columns that can be reordered horizontally via native HTML5 drag and drop.

## Usage
1. Include `style.css`.
2. Add markup: `.col-sap draggable="true"` columns inside `.kanban-col-sap`.

## Notes
- Reordering compares DOM index of dragged vs target column to decide whether to insert before or after, keeping the swap direction correct regardless of drag direction.
- `prefers-reduced-motion` disables the drag/scale visual feedback transition; drag mechanics remain functional.