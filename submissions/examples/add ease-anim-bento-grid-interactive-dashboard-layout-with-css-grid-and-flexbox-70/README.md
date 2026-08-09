# Bento Grid Interactive Dashboard Layout (Vibrant Gradient Version)

A high-quality, modern dashboard UI component built with HTML and CSS Grid. This layout embraces the popular "Bento Grid" aesthetic, featuring a mosaic of variously sized cards that beautifully display different types of information.

## Features

- **CSS Grid Architecture**: Utilizes `grid-template-columns` and `grid-row`/`grid-column` span utilities to create a responsive, masonry-like bento layout.
- **Glassmorphism & Gradients**: Features dark mode styling with subtle translucent card backgrounds (`backdrop-filter: blur`), glowing ambient backgrounds, and vibrant text/UI gradients.
- **Micro-Animations**: Smooth hover transitions on the bento cards (scale, translate, shadow increase, border glow) make the dashboard feel alive and interactive.
- **Flexbox Internals**: Each bento card uses Flexbox for perfect internal alignment of charts, lists, and statistics.
- **Responsive Layout**: The grid automatically reflows from a single column on mobile, to a 2-column layout on tablets, and a 4-column complex grid on desktop.

## Files Included

- `demo.html`: The HTML structure containing the bento wrapper, cards, and mock dashboard data.
- `style.css`: The CSS variables, grid setup, glassmorphism styles, and hover effects.

## Usage Guide

1. Open `demo.html` in a web browser.
2. Hover over the various cards to see the smooth scaling and glow interactions.
3. Resize the browser window to see how the Bento Grid elegantly collapses and expands using media queries.
4. Customize the grid layout by adding or removing cards and adjusting their `grid-column: span X` or `grid-row: span Y` properties in `style.css`.
