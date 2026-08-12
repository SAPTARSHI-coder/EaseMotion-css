# Hexagon Honeycomb Grid

A responsive, interlocking grid of hexagonal shapes created entirely using CSS.

## Preview

Open `demo.html` in your browser to see a photo gallery laid out in a perfect honeycomb grid. Hover over the hexagons to see them scale up.

## Implementation Details

- **The Hexagon Shape:** The 6-sided polygon shape is achieved using `clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);` on the `.hex-inner` div. This trims the rectangular div into a perfect hexagon.
- **Interlocking the Grid:** Hexagons naturally tessellate (fit together without gaps). To achieve this in CSS with standard box models, we use negative vertical margins (`margin: -40px 10px;`) to pull the rows closer together.
- **Staggering Rows:** To create the honeycomb offset (where the second row sits in the grooves of the first row), we use a media query and `:nth-child` selectors (e.g., `:nth-child(5n+4)`) to selectively apply `margin-left` and additional `margin-top` to specific items, pushing them into the correct indented positions.
- **No JavaScript:** The entire layout and hover effects are handled by the CSS engine.
