# ease-signature-pad-sap

A canvas-based signature pad supporting mouse and touch drawing, with a fading placeholder and a clear button.

## Usage
1. Include `style.css`.
2. Add markup: canvas wrapped in a dashed container + placeholder text + clear button.
3. Attach the drawing logic from `demo.html`.

## Customization
- `ctx.strokeStyle`/`lineWidth`: stroke appearance.
- Canvas `height` in CSS for pad size.
- Placeholder text/styling.

## Notes
- Canvas is scaled by `devicePixelRatio` for crisp strokes on high-DPI screens.
- `touch-action: none` on the canvas prevents the browser from scrolling the page while drawing on touch devices.
- Border highlights (`.active` class) while actively drawing, giving a subtle focus cue without needing `:focus` (canvas isn't natively focusable in a meaningful way here).
- Respects `prefers-reduced-motion`: border/placeholder/button transitions are disabled; drawing itself is unaffected since it's direct user input, not decorative motion.