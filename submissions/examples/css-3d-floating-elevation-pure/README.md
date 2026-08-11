# CSS 3D Effect: Floating Elevation

A hardware-accelerated, JavaScript-free 3D animation utilizing `transform-style: preserve-3d`. Features synchronized shadow animations that realistically respond to the object's Z-axis elevation.

## Features
- Pure CSS and HTML implementation. No JavaScript required for the 3D physics or the shadow logic.
- **Component Architecture**: 
  - **The 3D Scene Container**: The `.scene-3d` element establishes the depth using `perspective: 1200px`. The `.object-3d` wrapper applies `transform-style: preserve-3d` and rotates the entire scene into an isometric viewing angle (`rotateX(60deg)`).
  - **The Levitation Physics**: The `.elevation-card` uses a `@keyframes` animation to continuously translate up and down the Z-axis (`translateZ(20px)` to `translateZ(100px)`). 
  - **Decoupled Shadow Logic**: A standard CSS `box-shadow` applied to the card would move *with* the card up the Z-axis, destroying the illusion of elevation over a fixed floor. Instead, this component uses a dedicated `.elevation-shadow` element. This shadow element is locked to the floor (`translateZ(0)`) directly beneath the card. 
  - **Synchronized Optics**: As the card animates up the Z-axis, a perfectly synchronized `@keyframes` animation scales the floor shadow up slightly, increases its blur (`filter: blur()`), and decreases its opacity. This mimics real-world light diffusion as an object moves further from the surface it casts a shadow upon.
- **Theming**: Configured via CSS Custom Properties. Supports both light and dark OS themes (`prefers-color-scheme`). The shadow opacities and base colors are automatically adjusted to ensure realistic contrast in both modes.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by freezing the continuous levitation and panning animations, locking the card at a static, elevated Z-index with a fixed, diffused shadow for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Watch the continuous levitation and observe how the dedicated shadow element on the floor plane realistically diffuses and expands as the card gains altitude.

## Files
- `demo.html`: The HTML structure defining the 3D scene, the isometric container, the floor shadow element, and the floating card.
- `style.css`: The styling, the `preserve-3d` mechanics, the Z-axis translations, and the perfectly synchronized `@keyframes` governing the card's levitation and the shadow's optical diffusion.
