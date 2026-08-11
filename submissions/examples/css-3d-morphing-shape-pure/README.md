# CSS 3D Effect: Morphing Shape

A hardware-accelerated, JavaScript-free 3D animation utilizing `transform-style: preserve-3d` and complex, multi-axis `border-radius` animations to simulate a fluid, morphing 3D object.

## Features
- Pure CSS and HTML implementation. No JavaScript required for the 3D physics or the fluid morphing calculations.
- **Component Architecture**: 
  - **The 3D Scene Container**: The `.scene-3d` element establishes the depth using `perspective: 800px`. The `.object-3d` wrapper applies `transform-style: preserve-3d` and continuously rotates on the X and Y axes via a CSS `@keyframes` animation to show off the volumetric depth of the child elements.
  - **Volumetric Construction**: It is not currently possible to render true, solid 3D curved geometry in pure CSS. To fake a 3D morphing blob, this component stacks three `.morph-plane` elements inside the 3D space, intersecting them by rotating them 0deg, 60deg, and 120deg on the Y-axis.
  - **The Morphing Engine**: The fluid, organic shape is achieved using complex 8-point `border-radius` animations. The CSS `@keyframes morph-blob` cycles between different extreme values (e.g. `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%`). 
  - **Asynchronous Fluidity**: Crucially, each intersecting plane uses a staggered `animation-delay` (0s, -2s, -4s). This ensures the planes don't pulse synchronously, creating the illusion of a single, chaotic, organically shifting fluid volume in 3D space.
  - **Glassmorphism Blending**: A subtle `backdrop-filter: blur(4px)` is applied to the planes. As they intersect and rotate over one another, this blur compounds, helping to visually fuse the separate flat planes into a single cohesive object.
- **Theming**: Configured via CSS Custom Properties. Supports both light and dark OS themes (`prefers-color-scheme`). The gradients use semi-transparent coral, orange, and pink hues to enhance the visual blending.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by freezing the continuous 3D rotation and snapping the 8-point `border-radius` to a static, organic shape for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Watch the continuous rotation and observe how the overlapping, asynchronously animated border-radii create the illusion of a volumetric fluid shape.

## Files
- `demo.html`: The HTML structure defining the 3D scene, the rotating container, the three intersecting planes, and the inner core.
- `style.css`: The styling, the `preserve-3d` mechanics, the intersecting Y-axis rotations, the glassmorphism blending, and the complex 8-point `border-radius` morphing `@keyframes`.
