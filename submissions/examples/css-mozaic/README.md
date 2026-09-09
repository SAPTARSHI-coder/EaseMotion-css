# CSS Mosaic Tile Card

A minimalist **Mosaic Tile Card** built using pure HTML and CSS.

The component combines multiple modular tiles into a single responsive composition. Each tile has its own content while maintaining a consistent visual language.

## Features

* Pure HTML and CSS
* No JavaScript
* No external libraries
* Responsive mosaic layout
* CSS Grid based structure
* Large feature tile
* Small metric tiles
* Status indicator
* Decorative CSS orb
* Hover elevation effects
* Shimmer sweep animation
* Responsive desktop, tablet, and mobile layouts
* Reduced-motion accessibility support

## File Structure

```text
css-mosaic-tile-card/
│
├── demo.html
├── style.css
└── README.md
```

## How to Run

1. Create a folder named `css-mosaic-tile-card`.
2. Create these files:

   * `demo.html`
   * `style.css`
   * `README.md`
3. Add the provided code to each file.
4. Open `demo.html` in any modern browser.

No installation or dependencies are required.

## Layout

The desktop version uses a three-column CSS Grid:

```css
.mosaic-card {
    display: grid;

    grid-template-columns:
        1.25fr
        0.85fr
        0.85fr;
}
```

The main tile occupies two rows:

```css
.tile-main {
    grid-column: 1;
    grid-row: 1 / 3;
}
```

The other tiles are positioned around it to create the mosaic effect.

## Responsive Behavior

### Desktop

The layout uses three columns with the main feature occupying the first column.

### Tablet

The layout changes to two columns:

```css
.mosaic-card {
    grid-template-columns: repeat(2, 1fr);
}
```

The main feature expands across the top.

### Mobile

The mosaic becomes a single-column layout:

```css
.mosaic-card {
    grid-template-columns: 1fr;
}
```

This keeps every tile readable on smaller screens.

## Decorative Orb

The circular graphic on the main tile is created entirely with CSS.

It uses:

* `border-radius`
* CSS borders
* radial gradients
* pseudo-elements
* box shadows
* transforms

No image or SVG is required.

## Hover Effects

Hovering over a tile creates:

* Slight upward movement
* Border highlighting
* Shadow enhancement
* Shimmer sweep
* Additional visual depth

The main orb also rotates slightly when its tile is hovered.

## Shimmer Effect

The tiles use a pseudo-element to create a subtle light sweep:

```css
.tile::before {
    content: "";

    position: absolute;

    top: 0;
    left: -100%;

    width: 45%;
    height: 100%;
}
```

On hover, the pseudo-element moves across the tile:

```css
.tile:hover::before {
    animation: tileShimmer 1s ease forwards;
}
```

## Customization

### Change Tile Content

Edit the content inside each tile in `demo.html`.

For example:

```html
<div class="tile tile-small">
    <span class="tile-label">USERS</span>
    <h3>24K</h3>
    <p>Active users</p>
</div>
```

### Change Number of Columns

The desktop grid can be changed by modifying:

```css
grid-template-columns:
    1.25fr
    0.85fr
    0.85fr;
```

For an equal-width grid:

```css
grid-template-columns: repeat(3, 1fr);
```

### Change Tile Spacing

Modify:

```css
.mosaic-card {
    gap: 12px;
}
```

For more spacing:

```css
.mosaic-card {
    gap: 20px;
}
```

### Change Corner Radius

Modify:

```css
.tile {
    border-radius: 18px;
}
```

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* CSS Flexbox
* CSS Gradients
* CSS Animations
* CSS Pseudo-elements
* CSS Media Queries

## Accessibility

The component includes a `prefers-reduced-motion` rule.

When reduced motion is enabled:

* Tile transitions are disabled.
* Status indicator animation is disabled.
* Shimmer animation is disabled.

```css
@media (prefers-reduced-motion: reduce) {
    .status-dot {
        animation: none;
    }
}
```

## Browser Support

Works in modern versions of:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

## License

Free to use, modify, and integrate into personal, educational, and open-source projects.

```
```
