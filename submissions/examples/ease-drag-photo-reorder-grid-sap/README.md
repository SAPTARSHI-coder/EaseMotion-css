# ease-drag-photo-reorder-grid-sap

A photo grid where tiles can be dragged and dropped to reorder, using native HTML5 drag and drop with a placeholder-swap technique.

## Usage
1. Include `style.css`.
2. Add markup: `.photo-tile draggable="true"` elements with `background-image` inside `.photo-reorder-sap`.

## Notes
- Reordering swaps DOM positions using a temporary placeholder node, avoiding directly manipulating `innerHTML` (which would lose event listeners).
- Respects `prefers-reduced-motion`: drag-feedback scale/opacity transitions are disabled.