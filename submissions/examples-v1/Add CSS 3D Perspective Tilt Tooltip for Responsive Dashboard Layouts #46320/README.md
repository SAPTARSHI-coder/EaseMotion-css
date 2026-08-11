# CSS 3D Perspective Tilt Tooltip (Responsive Dashboard Aesthetics)

This example demonstrates how to create a highly polished, pure CSS animated Tooltip featuring a 3D Perspective Tilt interaction transition. 

## Features
- **Pure CSS**: Fully functional interactivity and 3D transforms without JavaScript.
- **3D Perspective Tilt Transition**: The tooltip is anchored in a 3D space (`perspective`) and rotates along the Y-axis (`rotateY`). Because this is a sidebar navigation, the tooltip is configured with `transform-origin: left center` to swing out from the left edge like a door opening.
- **Modern CSS APIs**: Uses `allow-discrete` and `@starting-style` to gracefully animate the tooltip from `display: none` to `display: block` upon hover or focus.
- **Dashboard Aesthetics**: Incorporates structured dashboard UI paradigms, including a collapsed dark-mode sidebar, bright utilitarian main content area, subtle drop shadows, and clean typographic hierarchy.
- **Fully Customizable**: Timing, easing curves, perspective depths, and rotation angles are all exposed via well-documented CSS Custom Properties (Variables).

## Custom Properties Configuration
You can tweak the 3D physics and animation speeds via these exposed CSS custom properties:
```css
:root {
  --tooltip-duration: 0.35s;
  --tooltip-easing: cubic-bezier(0.175, 0.885, 0.32, 1.2); /* Slight bounce */
  --tooltip-perspective: 600px;
  --tooltip-start-rotateY: 35deg; /* Swing out from left to right */
  --tooltip-start-translateX: -10px;
  --tooltip-start-opacity: 0;
}
```

## Browser Support
This demo uses modern CSS features. For the full experience, it relies on:
- **CSS `@starting-style` & `allow-discrete`** (Supported in Chrome 117+, Edge 117+, Firefox 129+, Safari 17.4+)
- **CSS 3D Transforms** (Baseline Support across all modern browsers)
