# CSS 3D Effect: Neumorphic Soft Shadow

A hardware-accelerated, JavaScript-free 3D animation utilizing `transform-style: preserve-3d`. Features a rotating neumorphic plate where the `box-shadow` properties dynamically shift to simulate a fixed light source in the 3D environment.

## Features
- Pure CSS and HTML implementation. No JavaScript required for the 3D physics or lighting logic.
- **Component Architecture**: 
  - **The 3D Scene Container**: The `.scene-3d` element establishes the 3D space using the `perspective: 1000px` property.
  - **Preserve 3D**: The `.object-3d` wrapper applies `transform-style: preserve-3d` and rotates continuously on the Y and X axes via a CSS `@keyframes` animation.
  - **Z-Axis Layering**: Elements are physically pushed forward in 3D space using `transform: translateZ()`. The `.neu-plate` is pushed forward (`translateZ(20px)`), the inner `.neu-core` is pushed slightly further (`translateZ(10px)` relative to the plate), and the icon pops out at the front.
  - **Dynamic "Fixed Light" Shadows**: In standard CSS, if you apply a `box-shadow` to an element and rotate that element in 3D space, the shadow rotates *with* it, destroying the illusion of a fixed light source (like the sun or a lamp in a room). To fix this, this component utilizes `@keyframes` animations on the `box-shadow` property itself. As the object rotates left (`rotateY(-30deg)`), the shadow offsets shift right, and vice versa. This creates a highly realistic, dynamic Neumorphic lighting effect purely in CSS.
- **Theming**: Configured via CSS Custom Properties. Supports both light and dark OS themes (`prefers-color-scheme`). Neumorphism relies heavily on specific, low-contrast background colors and perfectly matched highlight/shadow hex codes to function, which are calculated and provided for both modes.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by freezing the 3D rotation and the dynamic shadow shifting, snapping the object to a static, isometric angle with static shadows for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Watch the continuous rotation and observe how the drop shadows and inner shadows shift in relation to the object's angle, simulating a static light source.

## Files
- `demo.html`: The HTML structure defining the 3D scene, the preserve-3d object wrapper, the extruded plate, and the depressed core.
- `style.css`: The styling, the `perspective` and `preserve-3d` mechanics, the Z-axis translations, the Neumorphic shadow math, and the synchronized `@keyframes` animations for rotation and dynamic lighting.
