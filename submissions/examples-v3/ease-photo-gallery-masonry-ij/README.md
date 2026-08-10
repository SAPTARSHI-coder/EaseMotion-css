# Photo Gallery Masonry

A responsive masonry-style photo gallery with animated category filtering and a lightbox viewer. Uses CSS Grid, custom properties, and JavaScript for interactivity.

## Features

- Masonry grid layout with `grid-row-end` spanning for varied heights
- Animated filter by category — items fade and scale into new positions
- Click-to-expand lightbox with backdrop blur and scale transition
- Lazy-load entrance animation with staggered delay per item
- Fully customizable via `:root` CSS custom properties

## Usage

Open `demo.html` in any modern browser. Click filter buttons to show/hide categories. Click any card to open the lightbox; press `Escape` or click the backdrop to close.

## Customization

Edit `:root` in `style.css`:

```css
:root {
    --pgm-duration: 0.5s;
    --pgm-gap: 1rem;
    --pgm-radius: 12px;
    --pgm-item-bg: #1e293b;
    --pgm-overlay-bg: rgba(0, 0, 0, 0.75);
}
```

| Variable           | Purpose                 |
|--------------------|-------------------------|
| `--pgm-duration`   | Transition / animation speed |
| `--pgm-gap`        | Gap between grid items   |
| `--pgm-radius`     | Card border radius       |
| `--pgm-item-bg`    | Card background color    |
| `--pgm-overlay-bg` | Lightbox backdrop color  |

## Files

| File        | Purpose            |
|-------------|--------------------|
| `demo.html` | Entry page         |
| `style.css` | Styles & animation |
