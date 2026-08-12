# CSS 3D Effect: Glassmorphism Blur

A hardware-accelerated, JavaScript-free 3D animation utilizing `transform-style: preserve-3d` and stacked `backdrop-filter: blur()` layers to create compounding optical depth.

## Features
- Pure CSS and HTML implementation. No JavaScript required for the 3D physics or animation.
- **Component Architecture**: 
  - **The 3D Scene Container**: The `.scene-3d` element establishes the 3D space using the `perspective: 1200px` property.
  - **Preserve 3D**: The `.object-3d` wrapper applies `transform-style: preserve-3d`. This is critical: it tells the browser that all child elements should exist in the same 3D space, allowing them to physically overlap and intersect as they rotate.
  - **Z-Axis Layering**: Elements are physically pushed forward in 3D space using `transform: translateZ()`. 
    - The `.base-geometry` sits at the origin (`Z=0`).
    - The first `.glass-pane` is pushed forward (`translateZ(40px)`).
    - The second `.glass-pane` is pushed even further forward (`translateZ(80px)`).
  - **Compounding Blur**: Because the browser calculates `backdrop-filter: blur(8px)` in 3D space, the front glass pane blurs both the base geometry *and* the glass pane behind it. As the object rotates, you can observe the refractive index changing as layers stack and unstack visually.
- **Theming**: Configured via CSS Custom Properties. Supports both light and dark OS themes (`prefers-color-scheme`). The background uses a subtle radial gradient that reflects cleanly through the moving glass panes.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by freezing the continuous 3D rotation, snapping the object to a static, visually interesting isometric angle for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Watch the continuous rotation to see how the glass layers compound their blurs. Hover over the 3D scene to pause the animation and interactively shift the perspective.

## Files
- `demo.html`: The HTML structure defining the 3D scene, the preserve-3d object wrapper, the base geometry, and the stacked glass panes.
- `style.css`: The styling, the `perspective` and `preserve-3d` mechanics, the Z-axis translations, the glassmorphism parameters, and the `@keyframes` rotation animation.
