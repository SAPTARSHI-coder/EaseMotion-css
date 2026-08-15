# ease-card-accordion-image-sap

A horizontal image accordion — hovering any panel expands it (via flexbox `flex` grow) while the others compress, revealing more of the hovered image.

## Usage
1. Include `style.css`.
2. Add markup: multiple `.acc-panel` (with an oversized `<img>` + `.acc-label`) inside `.img-accordion-sap`.
3. Attach the `mouseenter` expand handler from `demo.html`.

## Customization
- `flex: 4` on `.expanded`: how dominant the hovered panel becomes relative to others (`flex: 1`).
- Number of panels — works with any count since flex-basis is relative.
- Image `width: 160%` oversizing: ensures the image still fills the panel fully even at its narrowest (collapsed) width.

## Notes
- Expansion is achieved by animating the flexbox `flex` property, not `width` — this lets the browser handle the layout redistribution among all panels automatically rather than manually calculating percentages.
- Each image is deliberately oversized (`160%` width) so that even in a fully collapsed panel, the image still covers the panel without gaps.
- Respects `prefers-reduced-motion`: the flex-grow transition is removed, so hovering switches the expanded panel instantly instead of easing.