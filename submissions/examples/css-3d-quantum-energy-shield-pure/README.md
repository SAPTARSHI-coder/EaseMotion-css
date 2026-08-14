# CSS 3D Effect: Quantum Energy Shield

A hardware-accelerated, JavaScript-free 3D animation utilizing `transform-style: preserve-3d`. Features nested, multi-axis rotating rings to simulate a volumetric quantum energy field (a gyroscopic effect).

## Features
- Pure CSS and HTML implementation. No JavaScript, Canvas, or SVG required for the 3D rotation logic.
- **Component Architecture**: 
  - **The 3D Scene Container**: The `.scene-3d` element establishes the depth perspective (`perspective: 800px`). The `.quantum-shield` wrapper applies `transform-style: preserve-3d` and tumbles continuously so the viewer can appreciate the full 3D spherical volume of the nested rings.
  - **Gyroscopic Ring Engine**: Creating a sphere out of CSS borders requires intersecting multiple 2D rings in 3D space. 
    1. We define 3 distinct `.shield-ring` elements, each slightly smaller than the last.
    2. Crucially, each ring applies a distinct `@keyframes` animation that targets a *different* set of axes. For example, `ring-1` rotates on the Y and Z axes, `ring-2` on X and Z, and `ring-3` on Y and X. 
    3. Because they are all inside a `preserve-3d` container, rotating them on different axes causes them to smoothly intersect and orbit each other, creating a complex, gyroscope-like spherical volume.
  - **Counter-Rotation**: The central `.quantum-core` features a complex `counter-tumble-core` animation. Because the parent container is tumbling to show off the rings, any text or icon inside the core would tumble upside-down. This animation applies the exact mathematical inverse of the parent's rotation, ensuring the icon perfectly faces the camera at all times while the rings orbit around it.
- **Theming**: Configured via CSS Custom Properties. Supports both light and dark OS themes (`prefers-color-scheme`). The energy rings utilize heavy `box-shadow` techniques (both outset and inset) to simulate glowing plasma. Different CSS `border-style` properties (`dashed`, `double`, `dotted`) are used on the rings to create distinct, high-frequency energy textures.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by freezing all continuous rotations and pulsing animations. For motion-sensitive users, the CSS falls back to hardcoded static rotations, presenting the rings frozen in a beautiful, intersecting geometric sculpture.

## Usage
Open `demo.html` in your browser. Watch the continuous gyroscopic rotation and observe how the nested, multi-axis ring animations create the illusion of a volumetric spherical shield.

## Files
- `demo.html`: The HTML structure defining the 3D scene, the preserve-3d container, the 3 nested gyroscopic rings, and the counter-rotating inner core.
- `style.css`: The styling, the `preserve-3d` mechanics, the heavy glowing `box-shadow` parameters, the distinct multi-axis `@keyframes` for the rings, and the mathematical counter-rotation for the central core.
