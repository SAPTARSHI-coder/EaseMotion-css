# List CSS Subgrid Alignment

## Description
This PR implements modern CSS `subgrid` across the `list` component to solve the classic "uneven card heights" problem. By using `grid-template-rows: subgrid`, the internal structural elements (header, body, footer) of adjacent components are forced to align perfectly with each other across the parent grid row, regardless of differing content lengths.

This eliminates the need for JavaScript height-matching scripts or brittle `min-height` CSS hacks.

## Key CSS Subgrid Features
- `grid-template-rows: subgrid`: Allows a child grid to adopt the track sizing of its parent grid.
- `grid-row: span 3`: Tells the parent grid that this component occupies 3 rows (header, body, footer).
- Perfect horizontal alignment of headers, bodies, and footers across completely different content lengths.

## Changes
- `style.css`: 80+ lines implementing the subgrid parent/child relationship.
- `demo.html`: A 3-card demo proving perfect footer alignment despite radically different body text lengths.
- `README.md`: Describes the feature and subgrid syntax.
\nFixes #55935\n