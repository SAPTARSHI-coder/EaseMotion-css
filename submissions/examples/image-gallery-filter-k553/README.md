# Animated Image Gallery Filter

An interactive portfolio-style image gallery with category filter buttons and smooth fade/scale transitions instead of instant content swaps.

## Features
- Gallery grid using CSS Grid, responsive across screen sizes
- Category filter buttons (All, Nature, City, People)
- Fade animation on filter change
- Scale transition (subtle zoom in/out) when items show/hide
- Active filter button highlighting

## Files
- `demo.html` — Markup and filtering logic
- `style.css` — Styling and animations

## Usage
1. Open `demo.html` in your browser.
2. Click any category button (e.g., "Nature") to filter the gallery.
3. Non-matching items fade and scale out; matching items fade and scale in.
4. Click "All" to reset the view.

## Customization
Adjust transition speed and easing in `.gallery-item`'s `transition` property, or change the grid density via `grid-template-columns` in `.gallery-grid`.