# Tooltip Arrow Sway

This example adds a tooltip that appears on hover or keyboard focus with a small arrow sway.

## Files

- `demo.html` contains the button and tooltip markup.
- `style.css` defines the tooltip reveal, arrow motion, focus state, and reduced-motion fallback.

## Highlights

- Uses `aria-describedby` and `role="tooltip"` for the demo relationship.
- Keeps the button dimensions stable while the tooltip appears.
- Supports hover and keyboard focus.
- Removes transition and arrow animation for reduced-motion users.
