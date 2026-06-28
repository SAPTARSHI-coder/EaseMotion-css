# CSS Grid Masonry Layout Utilities

This submission adds CSS utility classes to create complex masonry (Pinterest-style) grid layouts without requiring JavaScript libraries like Masonry.js.

## Bug / Feature Description
Building masonry layouts usually involves heavy DOM manipulation to calculate absolute positions. However, we can use CSS Multi-column layouts today for a production-ready fallback, and prepare for the future `grid-template-rows: masonry` specification.

## Fix / Implementation Details
- Added `.ease-grid-masonry` for the cutting-edge native Grid Level 3 masonry feature (`grid-template-rows: masonry`).
- Added `.ease-columns-masonry` and `.ease-masonry-item` for the widely-supported CSS columns approach (`column-count`).
- Used `break-inside: avoid` to ensure cards do not get split across columns.
- Configured media queries natively within the CSS to ensure the masonry grid is responsive (1 to 4 columns).

## How to Test
1. Open `demo.html` in your browser.
2. Observe how the different-sized cards fit together cleanly into vertical columns without leaving massive horizontal gaps, exactly like Pinterest.
3. Resize the window to see the number of columns adapt dynamically.
