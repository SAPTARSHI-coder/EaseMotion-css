# align-tracks — Grid Masonry Track Alignment

Demonstrates the experimental `align-tracks` property for aligning items within masonry layout tracks. Shows start, end, and center alignment of varying-height items in a grid with `grid-template-rows: masonry`.

## Usage

Open `demo.html` in a browser that supports CSS masonry (e.g., Firefox with `layout.css.grid.enable-masonry` enabled). Each section applies a different `align-tracks` value to position items within their tracks.

## Notes

- `align-tracks` controls block-axis alignment of items within masonry tracks.
- Requires `grid-template-rows: masonry` (or `grid-template-columns: masonry` for horizontal masonry).
- Works similarly to `align-content` but operates per-track in a masonry layout.
- Experimental — check browser support before using in production.
