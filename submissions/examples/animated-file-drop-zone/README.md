# ease-file-drop-zone-sap

A drag-and-drop file upload zone with animated hover/drag-over feedback — dashed border highlights and the icon lifts when a file is dragged over it.

## Usage
1. Include `style.css`.
2. Add markup (wrap in a `<label for="...">` tied to a hidden file input, see `demo.html`).
3. Attach the drag/drop event listeners from `demo.html`.

## Customization
- Border/background colors on `.drop-zone.drag-over` for theming.
- Icon swap: replace the inline `<svg>` with any upload icon.
- `transform: scale(1.02)` on drag-over: adjust for a stronger/subtler zoom feedback.

## Notes
- Uses a `<label for="fileInput">` wrapping pattern so clicking anywhere in the zone opens the file picker without extra JS.
- `dragenter`/`dragover` must call `e.preventDefault()` or the browser won't allow a drop at all.
- Respects `prefers-reduced-motion`: all transitions and the icon lift transform are disabled, drag-over state still applies via instant color change.