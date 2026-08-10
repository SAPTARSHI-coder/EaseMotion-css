# ease-image-before-after-slider-sap

A draggable before/after image comparison slider — drag the handle horizontally to reveal more or less of the "after" image over the "before" image.

## Usage
1. Include `style.css`.
2. Add markup: base "before" `<img>` + `.after-wrap` (clipped container with the "after" `<img>` at full container width) + `.slider-handle`.
3. Attach the drag logic from `demo.html`.

## Customization
- Initial split position — set `afterWrap` starting `width` (default 50%).
- Handle icon/size/color.
- Label text/position.

## Notes
- The "after" image sits inside a width-clipped `.after-wrap`, while the image itself is set to the *container's* full width (not the wrap's) — this is what keeps the after-image content correctly aligned as the wrap narrows/widens, rather than the image scaling/distorting with its clipped parent.
- Drag position is computed from cursor X relative to the container's own bounding box, then clamped to 0–100%.
- Respects `prefers-reduced-motion`: the only transition present (`after-wrap` width, only relevant if animated programmatically elsewhere) is disabled; drag-following remains 1:1 direct input, unaffected either way.