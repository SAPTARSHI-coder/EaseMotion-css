# Card Hover Collection

Six cards with distinct hover effects: lift + shadow, border glow, image zoom with overlay, scale background, tilt 3D, and reveal content slide.

## Features

- Six unique CSS hover effects without JavaScript
- Consistent card structure with image placeholder, title, and description
- Smooth transforms and transitions
- Dark theme with card surface at `#151b2e`
- `prefers-reduced-motion` disables all hover transitions

## Usage

Open `demo.html` in any modern browser. Each card uses a `<div class="card" data-effect="...">` wrapper. Extract individual CSS rules for specific effects. The image placeholder uses a gradient; swap it for a real `<img>` in production.

## Browser Support

Requires a browser that supports CSS `transform`, `perspective` (for tilt-3d), and `linear-gradient` for overlays. Compatible with Chrome 49+, Firefox 52+, Safari 10+, Edge 79+. Motion queries are respected for accessibility.
