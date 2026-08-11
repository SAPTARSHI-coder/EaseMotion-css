# CSS 3D Effect: Aurora Glow

A hardware-accelerated, JavaScript-free 3D animation utilizing `transform-style: preserve-3d`. Features a multi-layered glassmorphism card floating in 3D space, backed by shifting radial gradients simulating the Northern Lights.

## Features
- Pure CSS and HTML implementation. No JavaScript required for the 3D physics or animation.
- **Component Architecture**: 
  - **The 3D Scene Container**: The `.scene-3d` element establishes the 3D space using the `perspective: 1000px` property.
  - **Preserve 3D**: The `.object-3d` wrapper applies `transform-style: preserve-3d`. This is critical: it tells the browser that all child elements should exist in the same 3D space, rather than being flattened onto the parent's 2D plane.
  - **Z-Axis Layering**: Instead of relying solely on `z-index`, elements are physically pushed forward and backward in 3D space using `transform: translateZ()`. 
    - The `.card-face` is pushed forward (`translateZ(40px)`).
    - The content *inside* the card is pushed even further forward (`translateZ(20px)` and `translateZ(30px)`) to create a parallax pop-out effect.
    - The `.aurora-layer` elements are pushed backward into negative Z-space.
  - **Volumetric Aurora**: The aurora effect is achieved using two separate `div` layers pushed into the background. They use multi-stop `radial-gradient` backgrounds and heavy `filter: blur(50px)`. CSS `@keyframes` rotate and scale these gradients independently, while `mix-blend-mode: screen` composites them into a complex, shifting volumetric light.
  - **3D Shadow Projection**: The `.shadow-3d` element is pushed far down the Y-axis and rotated 90 degrees on the X-axis (`rotateX(90deg)`). This effectively lays the shadow flat on an imaginary "floor" beneath the floating object, grounding it in the 3D environment.
- **Theming**: Configured via CSS Custom Properties. The color palette relies on deep arctic night backgrounds to allow the vibrant teals, emeralds, and purples to glow properly.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by freezing all 3D rotations, floating animations, and gradient shifts, snapping the component to a static, flat 2D state for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Hover over the 3D scene to pause the continuous floating animation and shift the perspective, allowing you to inspect the layered depth of the aurora glows and the card.

## Files
- `demo.html`: The HTML structure defining the 3D scene, the preserve-3d object wrapper, the card face, the aurora layers, and the projected shadow.
- `style.css`: The styling, the `perspective` and `preserve-3d` mechanics, the Z-axis translations, and the `@keyframes` animations for floating and gradient shifting.
