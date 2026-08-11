# ease-context-menu-sap

A custom right-click context menu that appears at the cursor position with a quick scale-in, closes on outside click or item selection, and stays within viewport bounds.

## Usage
1. Include `style.css`.
2. Add markup: a target element + a separate `.context-menu-sap` with `.menu-item` entries.
3. Attach the `contextmenu`/click handlers from `demo.html`.

## Customization
- Menu item list/icons/`.danger` styling for destructive actions.
- `window.innerWidth - 200` / `innerHeight - 220` bounds checks: adjust to match actual menu dimensions.
- Scale-in transform origin/duration.

## Notes
- `e.preventDefault()` on `contextmenu` suppresses the native browser right-click menu so the custom one can take over.
- Position is clamped against viewport edges (`Math.min`) so the menu never renders partially off-screen near window edges.
- A top-level document `click` listener closes the menu on any outside interaction, including selecting a menu item itself (each item also explicitly closes it).
- Respects `prefers-reduced-motion`: scale-in transform is removed, leaving a fast opacity/visibility toggle only.