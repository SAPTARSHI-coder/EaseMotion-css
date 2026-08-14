# CSS Route Map Line

An animated dashed line tracing a route across a map, powered entirely by CSS `stroke-dashoffset` keyframe animations on an SVG path.

## Features
- Pure CSS and HTML implementation without any JavaScript calculations.
- **Component Architecture**: 
  - **The Map Base**: Built using standard HTML/CSS. A `linear-gradient` is used to create a subtle grid background simulating a map overlay.
  - **SVG Path Tracing**: The core technique utilizes an inline `<svg>` element containing two `<path>` definitions with bezier curves (`C`). The first path acts as a faded underlying "track". The second path is brightly colored and overlayed perfectly on top.
  - **The `stroke-dashoffset` Animation**: To create the illusion of movement along the route, the top `<path>` is given a dashed pattern using `stroke-dasharray: 15 15`. A CSS `@keyframes` animation then continuously shifts the `stroke-dashoffset` property from `30` down to `0`. This mathematically forces the dashes to travel along the exact curve of the SVG path, simulating a car driving the route.
  - **Waypoints**: CSS absolute positioning is used to map standard HTML `div` elements (pins and tooltips) precisely onto the start and end coordinates of the SVG bezier curve.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the map background, grid lines, and route colors.
- Fully accessible semantic structure. The map container uses an `aria-label` to provide context to screen readers, treating the animation as a single decorative graphic. Honors the `prefers-reduced-motion` accessibility standard by freezing the route animation and pin pulsing for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the animated route moving between the two waypoints.

## Files
- `demo.html`: The HTML structure defining the SVG paths, the map container, and the waypoints.
- `style.css`: The styling, absolute coordinate mapping, and the `stroke-dashoffset` keyframes.
