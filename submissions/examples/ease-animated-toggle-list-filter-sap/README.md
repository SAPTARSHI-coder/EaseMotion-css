# ease-animated-toggle-list-filter-sap

A filterable list where switching category pills smoothly collapses non-matching rows (fade + height collapse) rather than instantly hiding them.

## Usage
1. Include `style.css`.
2. Add markup: filter pills with `data-cat` + list rows with matching `data-cat`.
3. Attach the filter click handler from `demo.html`, toggling `.hidden` on non-matching rows.

## Customization
- Category pill styling for active/inactive states.
- Row collapse/fade transition duration.
- Category set — works with any number of `data-cat` values.

## Notes
- Row collapse uses the `grid-template-rows: 1fr → 0fr` technique (paired with opacity/transform) rather than `display: none`, so hiding non-matching rows animates smoothly instead of snapping away instantly.
- Filtering compares `data-cat` on each row against the clicked pill's `data-cat`, with `"all"` matching everything.
- Respects `prefers-reduced-motion`: the grid-row collapse and transform are removed, leaving a quick opacity fade only.