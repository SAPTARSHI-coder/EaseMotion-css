# Masonry Layout with auto-fill

Demonstrates CSS masonry layout using `repeat(auto-fill, minmax(...))` for responsive columns. Items of varying heights are placed into a masonry grid with configurable gap and column sizing.

## Usage

Open `demo.html` in a browser with masonry support (Firefox with `layout.css.grid.enable-masonry`). The masonry grid uses `auto-fill` to create as many 200px-minimum columns as the viewport width allows, stacking items by height.

## Notes

- `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))` creates responsive columns.
- `grid-template-rows: masonry` enables the experimental masonry layout.
- Items flow into the shortest column automatically, creating the classic brick-wall pattern.
- Combine with `gap` for consistent spacing between items.
- Experimental — not yet supported in all browsers. Use feature detection.
