# CSS Subgrid Layout Utilities

This submission adds utility classes for utilizing the CSS `subgrid` value, solving one of the most persistent alignment issues in web design.

## Bug / Feature Description
When creating a grid of cards, `display: flex; flex-direction: column; height: 100%;` is often used to push the footer to the bottom of each card. However, this doesn't align the internal elements (like headers or body paragraphs) across *different* cards. If Card A has a 2-line title and Card B has a 1-line title, their body text will be misaligned. CSS `subgrid` fixes this by allowing child grids to participate in the sizing of their parent grid.

## Fix / Implementation Details
- Added `.ease-grid-rows-subgrid` and `.ease-grid-cols-subgrid` utility classes.
- Created an `.ease-subgrid-card` example which spans 3 rows of its parent grid (`grid-row: span 3`) and uses `grid-template-rows: subgrid`.
- This ensures that the Header row, Body row, and Footer row heights are calculated globally across all cards in the grid row, enforcing perfect horizontal alignment of every internal component.

## How to Test
1. Open `demo.html` in a modern browser (Chrome 117+, Firefox, Safari).
2. Look at the three cards side-by-side. 
3. Notice that even though the titles and body texts are different lengths, the start of the body text and the placement of the "Read More" buttons align flawlessly in a straight horizontal line across all three cards.
