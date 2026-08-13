# CSS Micro-interactions: 3D Perspective Tilt

A collection of hardware-accelerated, JavaScript-free micro-interactions focused on spatial physics, 3D transforms, and isometric projections.

## Features
- Pure CSS and HTML implementation. No JavaScript mouse-tracking or external 3D libraries (like Three.js) required.
- **Component Architecture**: 
  - **Isometric Pop Button**: An interactive button that tilts into a 3D isometric plane on hover. It utilizes `rotateX` and `rotateY` for the tilt. Depth is created by applying a `translateZ` value to the main `.btn-face` while simultaneously fading in a pseudo-element behind it that acts as the physical "base" of the button.
  - **Grid-Tilt Pseudo-Tracking Card**: A pure CSS technique to simulate 3D mouse tracking. The `.tilt-card-container` establishes a 3D perspective and houses a 3x3 grid of invisible `.trigger` divs positioned absolutely over the entire area. Using the adjacent sibling selector (`~`), hovering a specific trigger applies a corresponding `rotateX` and `rotateY` transform to the `.tilt-card` beneath it. (e.g., Hovering the top-left trigger tilts the card back and to the right).
  - **3D Fold Icon**: An icon constructed from two `.fold-plane` halves (top and bottom). By setting the `transform-origin` to the `bottom` of the top half, and the `top` of the bottom half, we create a physical hinge. Hovering the container applies opposing `rotateX` values, causing the flat shape to fold in 3D space like a piece of paper.
- **Theming**: Configured via CSS Custom Properties. The `perspective` value is centralized (`--scene-perspective: 1000px`), allowing you to easily adjust the intensity of the 3D distortion across all components.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling all spatial transforms and 3D transitions for users who prefer less motion, ensuring the interface remains flat and usable.

## Usage
Open `demo.html` in your browser to view the gallery of micro-interactions. Hover over the isometric button to see it pop out, move your mouse around the four corners of the grid-tilt card to see it track your cursor dynamically, and hover the fold icon to see the geometry bend.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for each of the 3 spatial micro-interactions (including the 3x3 trigger grid).
- `style.css`: The styling, the `preserve-3d` mechanics, the sibling selector hover logic, and the `transform-origin` hinge configurations.
