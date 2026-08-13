# ease-scratch-to-reveal-sap

A scratch card where a canvas overlay is "erased" by dragging over it, revealing a prize/message underneath — classic scratch-off ticket UX.

## Usage
1. Include `style.css`.
2. Add markup: content layer (`.scratch-prize`) + `<canvas>` overlay + hint text.
3. Attach the canvas drawing logic from `demo.html`.

## Customization
- Scratch brush radius (`22` in `arc()`) for coarser/finer erasing.
- Overlay texture pattern (currently random dot noise) — swap for a solid color or image.
- Underlying prize content/styling.

## Notes
- Uses `ctx.globalCompositeOperation = 'destination-out'` to erase pixels where the user drags, rather than drawing over them — this makes the covered canvas transparent, revealing the content layer beneath it.
- Canvas size is set from the card's actual rendered dimensions (`getBoundingClientRect()`), not hardcoded, so the scratch layer always matches the card exactly.
- Respects `prefers-reduced-motion`: this is a direct-manipulation interaction (drawing follows the cursor/finger 1:1), not decorative animation, so it isn't gated behind the media query — a `transition: none` rule is included defensively in case future styling adds one.