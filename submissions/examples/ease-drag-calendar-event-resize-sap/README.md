# ease-drag-calendar-event-resize-sap

A calendar event block with a bottom-edge resize handle — drag to change the event's duration, snapping to the underlying time-grid lines.

## Usage
1. Include `style.css`.
2. Add markup: `.cal-event` (with a `.resize-handle` at the bottom) inside a grid-lined calendar container.
3. Attach the resize drag logic from `demo.html`.

## Customization
- `gridSize` (JS): snapping increment in pixels — should match the visual grid line spacing (`40px` here, e.g. representing 30-min slots).
- `minHeight`: prevents the event from being resized smaller than a minimum duration.
- Event color/content.

## Notes
- `e.stopPropagation()` on the handle's `mousedown` prevents the resize drag from also triggering any drag-to-move behavior on the parent event block (not implemented in this demo, but a common pairing).
- Height snaps to `gridSize` increments via rounding, so the event always aligns to visible grid lines rather than landing at an arbitrary pixel height.
- Respects `prefers-reduced-motion`: the event has no decorative transition to begin with (resize is 1:1 direct drag input); a defensive `transition: none` is included in case one is added later.