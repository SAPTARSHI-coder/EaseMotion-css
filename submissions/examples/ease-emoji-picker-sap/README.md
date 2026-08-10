# ease-emoji-picker-sap

A compact emoji picker that pops open above its trigger button in a grid, closes on selection or outside click, and updates the trigger to show the picked emoji.

## Usage
1. Include `style.css`.
2. Add markup: trigger button + `.emoji-panel` grid of `.emoji-btn` elements.
3. Attach the open/select/outside-click handlers from `demo.html`.

## Customization
- Emoji set: add/remove `.emoji-btn` buttons freely — grid reflows automatically.
- `grid-template-columns: repeat(6, 1fr)`: emojis per row.
- Panel position (`bottom`, `left`) for opening direction.

## Notes
- Panel uses `visibility` + `opacity` + `transform` together (not `display: none`) so the open/close has something to animate and doesn't jump instantly.
- `transform-origin: bottom left` makes the panel scale in from the trigger's corner, reinforcing that it "belongs" to the button.
- Outside-click listener closes the panel automatically for a clean default state.
- Respects `prefers-reduced-motion`: scale/slide transform is removed from the panel's open animation, and hover scale is removed from trigger/emoji buttons — visibility fade remains as the minimum needed open/close signal.