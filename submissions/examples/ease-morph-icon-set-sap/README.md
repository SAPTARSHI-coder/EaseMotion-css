# ease-morph-icon-set-sap

A like/heart icon toggle where the outline stroke changes color and a filled heart pops in underneath with a bouncy scale-up on activation.

## Usage
1. Include `style.css`.
2. Add markup: button containing a two-layer SVG (fill path + outline path sharing the same `d`).
3. Attach the click toggle from `demo.html`, syncing `.active` class with `aria-pressed`.

## Customization
- Swap the heart path `d` for any other icon shape (star, bookmark, etc) — keep both `.heart-fill` and `.icon-path` using the same `d` value.
- Colors for active/inactive states.
- Scale-up easing on `.heart-fill` for a snappier/softer pop.

## Notes
- Two stacked `<path>` elements share identical `d` coordinates: one is always-visible outline, one is a fill that scales in only when active — this avoids needing true SVG shape morphing (animating the `d` attribute itself), which has poor cross-browser support without a JS library.
- `aria-pressed` is kept in sync with the visual state since this is a toggle control, not a static icon.
- Respects `prefers-reduced-motion`: the bouncy scale-in becomes a simple state change (fill still appears/disappears via opacity, just without the elastic scale).