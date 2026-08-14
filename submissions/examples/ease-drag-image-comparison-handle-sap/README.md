# ease-drag-image-comparison-handle-sap

A minimal draggable comparison handle splitting two content layers (e.g., before/after treatments), simpler variant of the full image before/after slider.

## Usage
1. Include `style.css`.
2. Add markup: `.cmp-before` (base layer) + `.cmp-after` (clipped overlay, with inner content set to full container width) + `.cmp-handle`.

## Notes
- The "after" content span is fixed to the full container's width (not the clipped wrapper's), preventing distortion as the wrapper narrows during drag — same technique as the full before/after image slider.
- This variant focuses purely on the drag handle mechanic without image assets, useful as a lightweight base for any two-state comparison UI.
- Respects `prefers-reduced-motion`: no persistent transition exists to gate since dragging is 1:1 direct input; a defensive rule is included for future additions.