## Overview

Demonstrates a masonry-style card layout using pure CSS `column-count`, `column-gap`, and `break-inside: avoid`. No JavaScript, Grid, or Flexbox is used — the browser's native multi-column engine arranges cards of varying heights into a flowing vertical masonry. Cards have a dark-theme gallery aesthetic with hover elevation effects.

## Techniques

- **`column-count: 4`** defines four equal columns that reflow responsively at breakpoints (3, 2, 1 columns)
- **`column-gap`** controls the spacing between columns
- **`break-inside: avoid`** prevents cards from splitting across column boundaries
- **`min-height`** variations on `.card__img` create the varied-height masonry effect
- Responsive breakpoints at 1024px, 768px, and 480px adjust column counts
- `prefers-reduced-motion` disables all transitions and hover transforms

## Usage

Open `demo.html` in any modern browser. Resize the viewport to see the column count adapt. The layout uses no external dependencies or JavaScript — it is entirely self-contained within the HTML and CSS files.
