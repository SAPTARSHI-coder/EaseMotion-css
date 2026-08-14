# ease-svg-icon-morph-menu-sap

An SVG-based hamburger-to-X menu icon, using `<line>` elements transformed via CSS rather than repositioning coordinates — smooth rotate + translate morph.

## Usage
1. Include `style.css`.
2. Add markup: button containing an SVG with 3 `<line class="bar">` elements.
3. Attach the click toggle from `demo.html`, syncing `.open` with `aria-expanded`.

## Customization
- `transform-origin: center` ensures each bar rotates around its own center — critical for the X to align correctly.
- Bar color/thickness/spacing (via `y1`/`y2` values).
- Transition easing for a snappier or softer morph.

## Notes
- Using `<line>` elements with CSS `transform` (rather than `stroke-dasharray` path morphing or `d` attribute animation) keeps the effect lightweight and broadly supported, since transform-based SVG animation works identically to HTML transforms.
- `transform-origin: center` on each bar is essential — without it, rotation happens around the SVG's own origin point, not each bar's own center, producing a broken-looking X.
- `aria-expanded` toggling reflects the functional open/closed state for assistive tech.
- Respects `prefers-reduced-motion`: rotate/translate transforms are removed, leaving only the middle bar's opacity fade as the open/close signal.