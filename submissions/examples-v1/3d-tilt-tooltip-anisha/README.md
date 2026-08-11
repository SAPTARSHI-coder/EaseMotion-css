CSS 3D Perspective Tilt Tooltip
A pure CSS animated Tooltip utilizing a smooth 3D Perspective Tilt interaction transition, styled for Product Catalog layouts. It creates a stunning multi-layered depth effect entirely without JavaScript.

Core CSS Features Used
perspective: 1200px: Establishes the 3D space camera lens on the parent container.
transform-style: preserve-3d: Allows child elements to maintain their own Z-axis positions relative to the parent's 3D rotation.
translateZ(): Used extensively to push the tooltip towards the user on hover, and to create internal parallax layers for text.
rotateX() / rotateY(): Creates the physical tilt angles.

Standard Component Classes
.ease-product-container - The master context wrapper providing 3D perspective.
.ease-product-card - The target anchor element triggering the hover state.
.ease-3d-tooltip - The tooltip housing structure utilizing pop-out translateZ animations.
.ease-tooltip-title / .ease-tooltip-desc - Inner text elements utilizing independent translateZ values for a parallax depth effect.
