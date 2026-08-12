# CSS Retro Grid Floor

An 80s outrun-style perspective grid floor built entirely in CSS without any JavaScript or WebGL.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Grid Texture**: The `.retro-floor` uses two intersecting `linear-gradient` backgrounds to draw a flat, repeating 2D grid pattern.
  - **3D Perspective Rendering**: The wrapper `.retro-scene` establishes a 3D vanishing point using `perspective: 600px`. The `.retro-floor` is then heavily rotated (`transform: rotateX(75deg)`) so it lays "flat" towards the horizon. A CSS mask gradient fades the grid out seamlessly at the horizon line.
  - **Forward Motion Animation**: Rather than animating complex 3D transforms, the forward movement is simulated simply by animating the `background-position` of the 2D linear gradient downwards continuously. This creates a perfect illusion of infinite forward travel over the grid.
  - **The Sliced Sun & Scanlines**: The neon sun uses a `repeating-linear-gradient` mask to slice out the horizontal bars. A CRT scanline effect is laid over the entire scene using a semi-transparent repeating gradient with `pointer-events: none`.
- Fully accessible semantic structure. The container uses `role="img"` and `aria-label` to provide context to screen readers, treating the entire animation as a single decorative image. Honors the `prefers-reduced-motion` accessibility standard by disabling the grid animation for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the retro scene.

## Files
- `demo.html`: The HTML structure containing the scene wrapper, the sun, the floor, and the scanlines overlay.
- `style.css`: The styling, the 3D perspective definitions, the masking tricks, and the grid animation.
