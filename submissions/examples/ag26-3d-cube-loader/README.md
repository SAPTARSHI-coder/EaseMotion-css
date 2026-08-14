# 3D Spinning Cube Loader

A pure CSS 3D cube that continuously rotates along multiple axes.

## Preview
Open `demo.html` in your browser. You will see a blue semi-transparent cube spinning in 3D space.

## Implementation
- Utilizes `perspective` on the parent to create depth.
- The `.cube` has `transform-style: preserve-3d` to maintain the 3D space for its child `.face` elements.
- Each face is rotated and translated in Z space to form a cube, which is then animated globally via keyframes.
