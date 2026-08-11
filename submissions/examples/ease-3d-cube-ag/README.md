# 3D Rotating Cube

A 3D cube with 6 distinct faces that continuously rotates in 3D space.

## Preview

Open `demo.html` in your browser to watch the cube rotate on both the X and Y axes simultaneously.

## Implementation Details

- **No JavaScript:** The 3D structure and animation are handled entirely by CSS.
- **3D Context:** The `body` element provides the `perspective: 1000px;` property to give the 3D scene depth. The `.cube` container uses `transform-style: preserve-3d;` to ensure its child faces exist in a 3D coordinate system rather than being flattened onto the screen.
- **Positioning Faces:** Each of the 6 `.face` elements is absolutely positioned in the center, and then rotated and translated outwards along the Z-axis (e.g., `transform: rotateY(90deg) translateZ(100px);`) to form the sides of the cube.
- **Animation:** A single `@keyframes` animation on the parent `.cube` element continuously increments its `rotateX` and `rotateY` transforms, tumbling the entire 3D structure.
