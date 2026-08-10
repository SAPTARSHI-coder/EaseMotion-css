# CSS Subgrid Layout Demo

A responsive multi-column card layout demonstrating the CSS
`subgrid` feature.

## Features

- Pure CSS implementation
- CSS Grid Subgrid
- Responsive three-column layout
- Two-column tablet layout
- Single-column mobile layout
- Consistent card alignment
- Semantic HTML
- Keyboard-accessible links
- Hover effects
- Reduced-motion support
- No JavaScript
- No external dependencies

## Demo

Open `demo.html` in a modern browser.

The cards demonstrate how CSS Subgrid can keep content aligned
across different cards even when their descriptions have
different lengths.

## How Subgrid Works

The card grid uses CSS Grid:

```css
.card-grid {
  display: grid;
  grid-template-columns:
    repeat(3, minmax(0, 1fr));
}