# Rotating Planet System

A miniature solar system featuring a glowing planet and an orbiting moon, built completely with CSS.

## Preview

Open `demo.html` in your browser to watch the moon orbit continuously around the central planet.

## Implementation Details

- **No Images/SVG/JS:** The planet, its craters, and the moon are drawn using pure CSS shapes (`border-radius: 50%`) and colored using gradients and `box-shadow`s.
- **3D Sphere Effect:** An inset `box-shadow` on the planet and moon simulates a light source, giving these flat HTML elements a realistic 3D spherical appearance.
- **Orbit Animation:** The moon is placed inside a circular `.orbit` container, positioned at its top edge. The `.orbit` container is then continuously rotated 360 degrees using a linear `@keyframes` animation, carrying the moon perfectly around the planet.
