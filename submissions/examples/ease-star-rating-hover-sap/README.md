# ease-star-rating-hover-sap

A 5-star rating widget where hovering fills/scales stars up to the cursor position, and clicking locks in the selected rating.

## Usage
1. Include `style.css`.
2. Add markup: a row of `<svg class="star" data-value="N">` elements + a label.
3. Attach the hover/click handlers from `demo.html`.

## Customization
- `.active` fill color (locked-in rating) vs default `fill`.
- Hover scale/rotate on `.star:hover`.
- `rating-label` text format.

## Notes
- Two separate classes (`hovered` for preview, `active` for locked selection) let the hover preview and the committed rating coexist without conflicting — hovering never overwrites the actual selected value until clicked.
- `data-value` attributes drive the "fill up to N" logic generically, so the star count could be changed without touching JS.
- Respects `prefers-reduced-motion`: scale/rotate transform on hover is removed, fill-color feedback remains.