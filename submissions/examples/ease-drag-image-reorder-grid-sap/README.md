# ease-drag-image-reorder-grid-sap

A photo grid where tiles can be dragged and swapped in place, with the dragged tile shrinking/tilting and the drop target getting a highlight ring.

## Usage
1. Include `style.css`.
2. Add markup: `.grid-tile draggable="true"` elements with `background-image` inside `.reorder-grid-sap`.

## Notes
- Reordering uses a three-way swap via a temporary placeholder node, exchanging the two tiles' DOM positions directly rather than removing/re-adding content (preserves each tile's own listeners).
- The dragged tile's slight rotation + scale-down + opacity fade gives clear "lifted" visual feedback distinct from the drop target's highlight ring.
- Respects `prefers-reduced-motion`: all drag-feedback transitions are disabled; drag mechanics remain functional.