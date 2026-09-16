# ease-drag-volume-slider-sap

A custom-styled draggable volume slider with a thumb that enlarges while actively dragging.

## Usage
1. Include `style.css`.
2. Add markup: icon + `.vol-track` containing `.vol-fill` and `.vol-thumb`.

## Notes
- Position is computed from cursor X relative to the track's bounding box and clamped 0–100%, same click-to-seek pattern used across other custom sliders in this library.
- `:active` on the track enlarges the thumb, giving tactile feedback specifically while the user is actively pressing/dragging.
- Respects `prefers-reduced-motion`: the thumb scale-up transition is disabled.