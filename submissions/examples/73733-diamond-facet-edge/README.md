# CSS Glass Effect: Diamond Facet Edge

A pure CSS glassmorphism component inspired by the reflective
geometry of a diamond.

The component combines translucent glass surfaces with layered
polygonal facets to create a crystalline edge effect.

## Features

- Pure HTML and Vanilla CSS
- Diamond-inspired polygon facets
- Glassmorphism surface
- Layered translucent geometry
- Subtle ambient background lighting
- Smooth hover transitions
- Crystalline inner borders
- Soft cyan/violet highlights
- Responsive design
- Keyboard-accessible button
- Reduced-motion support
- No JavaScript
- No external dependencies

## Design

The diamond appearance is created using CSS `clip-path` polygons.

Four independently positioned facets represent:

- Top facet
- Right facet
- Bottom facet
- Left facet

Each facet uses translucent gradients to simulate different
reflective surfaces.

The main card uses:

```css
backdrop-filter: blur(28px);