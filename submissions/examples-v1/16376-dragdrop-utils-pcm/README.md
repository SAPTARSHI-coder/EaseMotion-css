# Drag and Drop Visual State Utility Classes

## What does this submission do?

Adds CSS utility classes for drag-and-drop visual states — draggable items, drop targets, drag-over highlights, invalid drop feedback, ghost clones, and drag handles. Includes an interactive demo with a sortable list, file drop zone with validation, and ghost clone tracking.

## How was it implemented?

- **CSS** (`style.css`): Seven utility classes are defined:
  - `.draggable` — Sets `cursor: grab; user-select: none` as the base draggable state.
  - `.dragging` — Applied via JS during a drag operation: reduces opacity to 0.5, sets `cursor: grabbing`, and scales down to 0.95 for a "lifted" effect.
  - `.dropzone` — Base drop target with a 2px dashed border and rounded corners.
  - `.drag-over` — Applied on `dragover` event: highlights with primary color border and subtle blue background.
  - `.drag-invalid` — Applied on invalid drops: red border and a `shake` keyframe animation (translateX oscillation).
  - `.drag-ghost` — Fixed-position clone with `pointer-events: none`, 0.8 opacity, slight rotation, and deep shadow.
  - `.drag-handle` — Grab handle with `cursor: grab; touch-action: none`.
  - `@keyframes shake` — 0.35s horizontal shake animation for invalid drop feedback.
- **HTML/JS** (`demo.html`): Three interactive demos:
  - **Sortable List**: 5 items with drag handles, `dragstart` adds `.dragging`, `dragover` adds a blue bottom-border (`drop-over`), `drop` reorders in the DOM and updates an order display string.
  - **Drop Zone**: Two draggable file cards (valid `.pdf` and invalid `.exe`), dragging over the zone adds `.drag-over`, dropping a valid item shows success + updates the zone text, dropping an invalid item adds `.drag-invalid` (shake animation) + rejection message. Real files can also be dropped with 1MB size validation.
  - **Ghost Clone**: Dragging creates a floating `.drag-ghost` element positioned at the cursor, with `setDragImage` for native ghost + a visible positioned clone for the demo.

## Why these choices?

- **CSS utility classes** keep the styling decoupled from JS — developers apply classes declaratively and the drag logic just toggles them.
- **Shake animation** provides clear invalid drop feedback without blocking interaction.
- **3 demos** cover the most common drag-and-drop patterns: reordering lists, file upload zones, and ghost trail effects.
- **Real file drop support** in the drop zone demo validates that the classes work with native browser file drag-and-drop, not just custom elements.
- **CSS custom properties** (`--drag-primary`, `--drag-danger`, `--drag-border`) make the colors easy to theme per project.

## Files

| File | Purpose |
|---|---|
| `demo.html` | Interactive demos: sortable list, file drop zone with validation, ghost clone tracking |
| `style.css` | 7 utility classes + shake animation + demo styles |
| `README.md` | This documentation |
