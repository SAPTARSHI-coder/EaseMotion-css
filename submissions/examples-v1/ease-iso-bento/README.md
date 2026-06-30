# Isometric Bento-Box Accordion Grid (`ease-iso-bento`)

A premium, luxury editorial-grade landing page bento box framework that projects tiles into a tilted 3D isometric plane, dynamically manipulating grid track weights when focused.

## Technical Composition

- **Isometric Transform Mapping:** Distorts a standard multi-column layout wrapper into an oblique layout configuration utilizing `rotateX(55deg) rotateZ(-45deg)` parameters inside a deep perspective matrix stage.
- **Dynamic Track Interpolation:** Implements modern CSS `:has()` parent conditional selectors to automatically scale up active column/row fractions (`fr`) while compressing adjacent cells smoothly.
- **Volumetric Extrusion Lift:** On hover interaction, the selected card utilizes `translate3d()` and an internal `translateZ()` shift on content vectors to dynamically pop forward toward the camera view with zero document reflow lag.

## File Manifest

- `demo.html`: Independent functional visual stage sandbox workspace.
- `style.css`: Composed high-fidelity layout grid helper rule sheets.

## By

Pari Dubey
