# ease-drag-splitter-panel-sap

A two-pane layout with a draggable vertical splitter handle to resize the panels, common in code editors and file browsers.

## Usage
1. Include `style.css`.
2. Add markup: `.split-pane.left` (fixed width) + `.split-handle` + `.split-pane.right` (`flex: 1`, fills remaining space).
3. Attach the drag logic from `demo.html`.

## Customization
- `Math.max(15, Math.min(85, pct))` clamp range: minimum/maximum pane width percentages.
- Handle width/hover color.
- Right pane uses `flex: 1` so it automatically fills whatever space the left pane doesn't take — no need to manually calculate its width in JS.

## Notes
- Only the left pane's `width` is set directly from drag position; the right pane's `flex: 1` handles the remainder automatically, avoiding redundant calculation.
- Clamping the percentage (15–85%) prevents either pane from being dragged down to zero or unusable width.
- Respects `prefers-reduced-motion`: handle hover color transition is disabled; live drag resizing is unaffected as direct input.