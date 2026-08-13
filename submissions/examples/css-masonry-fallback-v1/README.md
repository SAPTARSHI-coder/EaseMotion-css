# CSS-Only Masonry Grid Fallback

## Description
This submission addresses Issue #68983 by providing a lightweight, pure CSS fallback for masonry layouts. While native `grid-template-rows: masonry` remains experimental and lacks cross-browser support, this solution uses the CSS Columns module to achieve a visually similar effect without requiring JavaScript like Masonry.js.

## Features
- **Zero JavaScript**: Built purely on CSS properties.
- **CSS Columns Module**: Utilizes `column-count` and `column-gap` to distribute items into columns.
- **Responsive by Design**: Easily adapts column counts via media queries.
- **Break-Inside Avoidance**: Applies `break-inside: avoid;` to ensure individual cards/items do not get split abruptly across columns.

## Limitations
Due to the nature of CSS columns, items are ordered sequentially from **top-to-bottom** and then left-to-right (column by column). This is different from Flexbox or Grid, which typically order items left-to-right first. This solution is ideal for visual galleries, blogs, or varied-height cards where exact left-to-right chronological ordering is not strictly required.

## Usage
Simply wrap your items inside a container with the `.ease-masonry-grid` class.

```html
<div class="ease-masonry-grid">
  <!-- Your cards here -->
  <div class="card" style="height: 200px;">Item 1</div>
  <div class="card" style="height: 400px;">Item 2</div>
  <div class="card" style="height: 150px;">Item 3</div>
</div>
```
