# Isometric Social Icons

Social media icons rendered as floating 3D isometric blocks with smooth hover animations.

## Preview

Open `demo.html` in your browser and hover over the icons to see them float upwards and change to their brand colors.

## Implementation Details

- **No JavaScript:** Powered completely by CSS `:hover` states and transitions.
- **Isometric Projection:** Uses `transform: rotate(-25deg) skew(25deg)` on the container to place the icons in an isometric perspective.
- **3D Blocks:** Uses `::before` and `::after` pseudo-elements with `skewX` and `skewY` to create the left and bottom faces of the 3D block.
- **Dynamic Coloring:** Uses CSS custom properties (variables) defined inline on the HTML elements (e.g. `--color: #1877f2;`) to dynamically color the blocks on hover using `filter: brightness()` to shade the sides.
