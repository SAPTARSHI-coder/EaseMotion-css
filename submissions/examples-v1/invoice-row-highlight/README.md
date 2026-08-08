# Invoice Row Highlight

This example adds invoice rows with a sliding highlight for hover, focus, and active states.

## Files

- `demo.html` contains the invoice list markup.
- `style.css` defines the row highlight transition, responsive layout, and reduced-motion fallback.

## Highlights

- Keyboard-focusable rows using `tabindex="0"`.
- Sliding highlight uses a pseudo-element outside the text flow.
- Keeps row height stable during hover and active states.
- Uses static highlight behavior when reduced motion is requested.
