## What It Does

Builds a responsive pricing card grid using CSS `subgrid`. Each card is split into three rows (header, body, footer) that align perfectly across all rows because the grid items use `grid-template-rows: subgrid`. The result is consistent header heights, body spacing, and footer alignment regardless of content length.

## Key Features

- `grid-template-rows: subgrid` on each card with `grid-row: span 3` for row alignment
- Cards span 3 rows (header, body, footer) that align across the grid
- Responsive grid with `auto-fill` and `minmax()` columns
- Hover effect lifts the card and highlights its border
- Featured card variant with accent styling
- Clean BEM naming for readability and maintenance
- Fully respects `prefers-reduced-motion`

## Usage Notes

Open `demo.html` in a browser that supports CSS Subgrid (Firefox 71+, Chrome 117+, Safari 16.2+). The subgrid feature is used for row alignment; fallback rendering in non-supporting browsers still produces a functional layout without the aligned row heights.
