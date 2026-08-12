# ease-animated-checkbox-list-sap

A custom checkbox list where checking an item draws an animated checkmark and strikes through the label — built entirely with the native checkbox input (no click-handled JS needed).

## Usage
1. Include `style.css`.
2. Add markup: `<label>` wrapping a real `<input type="checkbox">` + `.cb-box` (with an SVG checkmark) + `.cb-label-text`.

## Customization
- `.cb-box` size/border-radius/colors.
- Checkmark `stroke-dasharray`/`dashoffset` values if you change the SVG path.
- Strike-through color on checked label text.

## Notes
- Entirely CSS-driven using the native checkbox's `:checked` state combined with the adjacent-sibling (`+`) and general-sibling (`~`) combinators — no JS needed to toggle any visual state.
- The checkmark draw uses the same `stroke-dasharray`/`dashoffset` technique as the SVG-draw pattern, transitioning to `0` offset only when checked.
- Real `<input type="checkbox">` (visually hidden, not removed) preserves full keyboard and screen-reader accessibility — this isn't a fake div-based toggle.
- Respects `prefers-reduced-motion`: checkmark draw and label transitions are disabled; checked/unchecked state still displays instantly and correctly.