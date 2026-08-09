# CSS 3D Image Cube

A hardware-accelerated, infinitely rotating 3D cube built entirely with CSS transforms, featuring distinct images on every face.

## Features
- Pure CSS and HTML (Zero JavaScript required for math, perspective calculations, or rotation animations).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adjusting border opacities and shadows to match.
- **Hardware-Accelerated 3D Transforms (Documented in Code)**: 
- This component utilizes modern CSS 3D capabilities to build a physical object in the browser.
- **The Scene (`perspective`)**: The outer container establishes the camera distance, giving depth to the 3D space.
- **The Core (`preserve-3d`)**: The `.cube` container uses `transform-style: preserve-3d;` to ensure its children exist in the same 3D space, rather than being flattened onto it.
- **The Faces**: The 6 image faces are pushed outward from the center by exactly half the cube's size using `translateZ()`, and rotated to face the correct direction (`rotateY` and `rotateX`).
- **Infinite Rotation Keyframes**: The entire cube container is smoothly rotated on both the X and Y axes using a single infinite CSS `@keyframes` animation. Because these are `transform` animations, the heavy lifting is handled entirely by the GPU.
- Fully accessible with `prefers-reduced-motion` support. The spinning animation is completely disabled for motion-sensitive users, locking the cube into a beautiful static 3/4 isometric view.

## Usage
Open `demo.html` in your browser. You will see a rotating 3D cube, perfectly assembled with placeholder images on all 6 faces. The component uses `https://picsum.photos` to fetch random seed images. 

## Files
- `demo.html`: The HTML structure for the cube, detailing the 6 absolute-positioned faces.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the math required for the `translateZ` spatial positioning.
