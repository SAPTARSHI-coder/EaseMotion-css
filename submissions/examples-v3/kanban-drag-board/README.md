# Kanban-Style Drag Board (Multi-Column)

A multi-column task board where cards can be dragged both within a column to reorder, and across columns to change status. Built with the native HTML5 Drag and Drop API.

## Usage
Structure your board as `.kanban-board > .kanban-column > .kanban-card` elements, each card marked `draggable="true"`. Attach the drag event listeners shown in `demo.html` to the board container — a single set of listeners handles all columns via event delegation.

```html
<div class="kanban-board">
  <div class="kanban-column" data-column="todo">
    <h3>To Do</h3>
    <div class="kanban-card" draggable="true">Task name</div>
  </div>
</div>
```

## How it works
- `dragover` on the board determines which column the cursor is over and calculates the correct insertion point using each card's midpoint (`getDragAfterElement`)
- Cards can move within their own column (reorder) or into any other column (status change) — both are handled by the same logic
- `drag-over` class highlights the column currently being targeted

## Browser support
Uses the native HTML5 Drag and Drop API — supported in all modern desktop browsers. Native drag-and-drop has limited support on touch/mobile devices.

## Notes
No external libraries required. Uses event delegation on the board container rather than per-card listeners, so the logic scales to any number of columns/cards.