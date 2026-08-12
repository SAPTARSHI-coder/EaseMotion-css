# ease-map-pin-drop-sap

Click anywhere on the surface to drop an animated map pin that falls, bounces slightly on landing, and leaves a small shadow ring — pure CSS animation triggered by JS placement.

## Usage
1. Include `style.css`.
2. Add markup: a positioned container (`.map-pin-sap`) to click within.
3. Attach the click listener from `demo.html`, which creates a `.pin` element at the click coordinates.

## Customization
- `pin-drop-sap` keyframes: drop height/bounce intensity.
- Pin color (`fill`) and size.
- Background grid pattern — swap for a real map image/tile if desired.

## Notes
- Each click creates a new pin element positioned at click coordinates; the drop/bounce/ring-pop animations run automatically via CSS on element insertion (`both` fill-mode ensures the pin starts from its 0% state immediately).
- Pins are not removed automatically — multiple clicks stack multiple pins, useful for multi-location marking demos.
- Respects `prefers-reduced-motion`: pins appear directly in their landed position with no drop/bounce animation.