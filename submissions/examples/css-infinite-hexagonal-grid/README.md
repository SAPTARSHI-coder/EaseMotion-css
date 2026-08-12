# CSS Infinite Hexagonal Grid

A mathematically tessellated background pattern using cleverly overlapping `linear-gradient` triangles and angles to simulate an infinite geometric honeycomb grid.

## Features
- Zero HTML elements required; the entire pattern is generated purely via CSS `background` properties on a single element.
- Highly optimized rendering using hard-stop `linear-gradient` intersections at 60 and 120-degree angles to mathematically construct perfect hexagons.
- Infinite panning animation achieved by smoothly translating the `background-position` precisely over the bounds of the `background-size` dimensions (`60px` by `104px`).

## Files
- `demo.html`
- `style.css`
