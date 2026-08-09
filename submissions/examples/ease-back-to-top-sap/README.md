# ease-back-to-top-sap

A floating "back to top" button that fades/slides in once the page is scrolled down, and smooth-scrolls to top on click.

## Usage
1. Include `style.css`.
2. Add markup: fixed-position button placed anywhere in the body.
3. Attach the scroll/click listeners from `demo.html`.

## Customization
- `window.scrollY > 300` (JS): scroll distance before the button appears.
- `bottom`/`right` on `.back-to-top-sap`: reposition.
- Icon swap, background color, hover lift distance.

## Notes
- `visibility: hidden` is paired with `opacity: 0` (not just opacity alone) so the button is unclickable and unfocusable while hidden, not just invisible.
- `window.scrollTo({ behavior: 'smooth' })` handles the scroll-to-top animation natively — no JS animation loop needed.
- Respects `prefers-reduced-motion`: slide/lift transforms are removed (kept as instant position changes), while opacity fade is shortened but retained since appearing/disappearing needs some visibility signal; the smooth scroll-to-top can be swapped to `behavior: 'auto'` if stricter compliance is required.