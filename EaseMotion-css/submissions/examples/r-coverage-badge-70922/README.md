# CSS Coverage Badge

A responsive CSS-only coverage badge component for displaying code
coverage percentages with color-coded status indicators.

## Features

- Pure HTML and CSS
- High, medium, and low coverage states
- Color-coded percentage badges
- Animated progress bars
- Accessible progressbar attributes
- Responsive card layout
- Hover interactions
- Reduced-motion support
- Forced-colors support
- No JavaScript required

## Files

- `demo.html` — Demonstration page
- `style.css` — Component styles and animations
- `README.md` — Documentation

## Usage

A basic coverage badge can be created with:

```html
<span class="badge badge--high">
  <span class="badge-dot" aria-hidden="true"></span>
  Coverage 95%
</span>