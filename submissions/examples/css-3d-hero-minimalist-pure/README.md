# 3D Hero Section: Minimalist

A pure CSS hero section featuring a slow-panning 3D architectural scene built with minimalist design principles, sharp typography, and monochrome aesthetics.

## Features
- Pure CSS and HTML implementation. No JavaScript required.
- **Component Architecture & Styling Mechanics**: 
  - **Minimalist / Architectural Aesthetics**: Embraces a stark, clean monochrome palette. The design relies on stark contrasts, sharp borders (`1px solid #e5e5e5`), and structural wireframes rather than heavy gradients or imagery.
  - **CSS 3D Engine Setup**: The parent `.hero-scene` establishes the depth of the 3D space using `perspective: 1200px`. The `.hero-3d-wrapper` acts as the primary rotating container and crucially applies `transform-style: preserve-3d;` to ensure all child elements are rendered within the same 3D coordinate system.
  - **Spatial Composition**: The elements on the screen exist in different Z-planes to create parallax and depth:
    - The typography (`.hero-content`) is pushed slightly forward (`translateZ(40px)`).
    - The background plane (`.plane-1`) is pushed back (`translateZ(-100px)`) and rotated away.
    - The middle focal plane (`.plane-2`) with the architectural wireframe is pushed forward (`translateZ(50px)`) and angled up.
    - The small accent plane (`.plane-3`) is pushed furthest forward (`translateZ(150px)`) to create extreme foreground parallax.
  - **The Slow Pan Animation**: The entire `.hero-3d-wrapper` is subjected to a 20-second infinite alternating animation (`slow-pan`) that gently oscillates the `rotateX` and `rotateY` values. Because of the established `preserve-3d` context, all the planes and text move relative to each other, creating a stunning, immersive 3D scene without WebGL.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling all rotations, translations, and panning animations if requested by the OS, falling back to a clean, flat 2D layout.

## Usage
Open `demo.html` in your browser. You will see a clean hero layout. The entire scene will slowly pan back and forth, revealing the physical depth and separation between the typography and the floating geometric planes.

## Files
- `demo.html`: The HTML structure defining the 3D wrapper and the various geometric planes.
- `style.css`: The styling, the 3D perspective setup, and the spatial positioning (`translateZ`, `rotateX/Y`).
