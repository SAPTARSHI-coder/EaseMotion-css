# CSS 3D Effect: Retro Arcade Pixel

A hardware-accelerated, JavaScript-free 3D animation utilizing `transform-style: preserve-3d`. Features stacked `box-shadow` pixel art to create true 3D volumetric voxels from 2D CSS sprites.

## Features
- Pure CSS and HTML implementation. No JavaScript, canvas, or WebGL required for the 3D voxel rendering.
- **Component Architecture**: 
  - **The 3D Scene Container**: The `.scene-3d` element establishes the depth perspective (`perspective: 1000px`). The `.voxel-assembly` wrapper applies `transform-style: preserve-3d` and tumbles continuously via a CSS `@keyframes` animation to show off the 3D volume.
  - **Volumetric Pixel Art Engine**: It is highly inefficient to render 100+ individual HTML elements to build a 3D pixel object (one div per voxel). This component uses a highly performant CSS trick instead:
    1. We define a single 1x1 base unit element (`.pixel-layer`).
    2. We draw an entire 2D retro sprite (a Space Invader) using a massive, comma-separated `box-shadow` definition relative to that single unit. This renders the entire flat sprite using only one DOM node.
    3. To make it true 3D, we duplicate that node 10 times in the HTML.
    4. In the CSS, we apply `transform: translateZ()` to stack those 10 layers tightly together (4px apart) on the Z-axis.
  - **Ambient Occlusion Shading**: To enhance the 3D effect, the inner layers (layers 2 through 9) are given a `filter: brightness(0.7)`. This ensures that when the object turns sideways, the "sides" appear darker than the front and back faces, simulating basic 3D ambient occlusion lighting without any complex shaders.
- **Theming**: Configured via CSS Custom Properties. Supports both light and dark OS themes (`prefers-color-scheme`), automatically swapping the sprite colors from Yellow/Amber to neon Green depending on the system theme.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by freezing the continuous tumbling animation and locking the voxel object at a static, dramatic isometric angle for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Watch the continuous tumbling animation and observe the solid, volumetric depth achieved by stacking the 2D `box-shadow` layers.

## Files
- `demo.html`: The HTML structure defining the 3D scene, the preserve-3d assembly, the floor shadow, and the 10 stacked pixel layers.
- `style.css`: The styling, the `preserve-3d` mechanics, the massive `box-shadow` mapping defining the Space Invader sprite, the Z-axis stacking logic, and the `brightness()` ambient occlusion filters.
