# Pure CSS 3D Isometric Grid with Altitude Elevation Hovers

## Abstract

This module provides a lightweight, pure CSS implementation of a 3D isometric layout grid featuring interactive altitude elevation and dynamic floor shadow decoupling on hover. By leveraging CSS 3D transforms (`rotateX`, `rotateZ`, `translateZ`) along with dynamic parent-relative pseudo-elements, it achieves realistic spatial depth and physical light behavior without requiring external JavaScript libraries or WebGL context.

## Spatial Rotation Mathematics

The isometric projection plane is established mathematically using CSS 3D transforms on the container (`.ease-iso-grid`):

```css
transform: rotateX(60deg) rotateZ(-45deg);
transform-style: preserve-3d;
```

1. **Perspective Setup**: The outer container (`.ease-iso-scene`) applies `perspective: 1200px` to create a vanishing point and depth perception for Z-axis translations.
2. **Axis Rotation Matrix Simulation**: 
   - `rotateZ(-45deg)` rotates the standard Cartesian grid 45 degrees counterclockwise, aligning grid items along diagonal axes ($X'$ and $Y'$).
   - `rotateX(60deg)` tilts the plane back along the X-axis by 60 degrees (closely approximating the true isometric projection angle of $\arcsin(\tan(30^\circ)) \approx 35.264^\circ$, adjusted for aesthetic modern UI proportion and grid clarity).
3. **Preserving 3D Hierarchy**: `transform-style: preserve-3d` ensures child elements remain within the shared 3D spatial coordinate space rather than flattening into the 2D plane of the grid wrapper.

## Altitude & Ground Shadows

The interactive elevation dynamic simulates physical altitude extrusion and decoupled cast shadows:

- **Block Extrusion**: On hover, `.ease-iso-block:hover` translates forward along the local Z-axis (`translateZ(40px)`), lifting the card physically off the grid floor toward the viewer.
- **Decoupled Ground Shadow Mechanics**:
  - The floor shadow is constructed using a `::before` pseudo-element positioned absolutely (`inset: 0`) behind the block (`z-index: -1`) and flattened against the base plane (`transform: translateZ(-1px)`).
  - When the card lifts up (`translateZ(40px)`), the pseudo-element counter-translates back down relative to its parent (`transform: translateZ(-40px)`). This keeps the shadow anchored to the original floor elevation (0px plane) rather than moving upwards with the card.
  - To mimic real-world light diffusion as distance from a surface increases, the shadow simultaneously scales down (`scale(0.85)`), diffuses (`filter: blur(15px)`), and fades (`opacity: 0.4`).
