# CSS SVG Path Morphing Utilities

A collection demonstrating how to achieve seamless SVG path morphing using purely CSS, without requiring external SVG animation libraries like GSAP or Snap.svg.

## Features
- **Zero JavaScript**: Entirely powered by the CSS `transition: d` property on SVG paths.
- **Node Matching**: To morph an SVG path smoothly in CSS, both the starting state and the ending state must have the exact same number of data nodes/coordinates. These examples demonstrate the complex path data mapping required to morph a Play button into a Pause button, a Plus into a Checkmark, and a Hamburger into a Close button.
- **Smooth Easing**: Uses `cubic-bezier(0.4, 0, 0.2, 1)` for a fluid, snappy metamorphosis.
- **Accessible**: Fully supports `@media (prefers-reduced-motion: reduce)` by falling back to instantaneous shape changes rather than animated morphing for users with motion sensitivity.

## Usage
Open `demo.html` in your browser. 
Hover over the circular icon wrappers to trigger the `d: path(...)` CSS transition and watch the SVGs physically shift shapes.

## Files
- `demo.html`: The HTML structure containing the inline `<svg>` elements.
- `style.css`: The styling rules where the complex `d: path("")` coordinates are defined and transitioned.
