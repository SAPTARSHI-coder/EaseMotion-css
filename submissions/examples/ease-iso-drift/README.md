# Infinite Isometric Grid Drift (`ease-iso-drift`)

An immersive layout decoration utility that transforms asset grids into infinite, seamless 3D oblique matrix streams running entirely on hardware-accelerated layers.

## Geometric Formulation

The system stacks column lanes on a perspective viewport container to enable multi-axis spatial calculations.

- **The Axis Distortion Map:** Applies a composite rotation transformation (`rotateX(60deg) rotateZ(-45deg)`) to render a structural isometric depth map.
- **Flawless Loop Mathematics:** Translates the layout tracks down to exactly `-50%` of their total vertical size. Because card elements are cloned sequentially inside the markup, resetting back to `0%` is completely invisible, creating a smooth, infinite loop.
- **Inspection Dampening:** Uses standard hover triggers to pause the animation loops (`animation-play-state: paused`) for focal user inspections.

## Manifest Details
- `demo.html`: The standalone visual testing grounds interface.
- `style.css`: Composed native CSS animation styles rules.

## By
Pari Dubey