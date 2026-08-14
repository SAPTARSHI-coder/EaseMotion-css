# CSS Sci-Fi HUD: Cyberpunk Neon

A hardware-accelerated, JavaScript-free Head-Up Display (HUD) interface featuring aggressive cyberpunk styling, neon glows, data visualizations, and radar systems.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, SVG rendering, or JavaScript logic required.
- **Component Architecture**: 
  - **The Grid Overlay**: A moving 3D grid effect applied to the background using CSS `perspective` and `transform: rotateX()` paired with an infinite translation animation, giving the UI a sense of depth and forward motion.
  - **Geometric Panels**: Cyberpunk aesthetics demand angled, non-rectangular frames. This is achieved using CSS `clip-path: polygon()` to cut the corners off the main panels and header blocks, rather than relying on heavy background images.
  - **CSS Glitch Text**: The "SYSTEM ONLINE" header features an authentic text glitch effect. It utilizes pseudo-elements (`::before` and `::after`) that duplicate the text, shift it slightly off-axis, colorize it (magenta/yellow), and rapidly animate `clip-path` rectangles to simulate a broken video feed.
  - **Data Visualizations**: 
    - The biometric bar chart is rendered using an array of `<div>` elements scaling up and down via a staggered CSS `@keyframes eq-bounce`.
    - The Neural Sync progress bar uses a simple looping `opacity` pulse.
  - **The Radar System**: Located in the center reticle, the radar is built using a circular container. The sweeping radar arm is a `conic-gradient` that rotates continuously (`@keyframes radar-spin`). The radar "pings" are small dots that use `@keyframes ping-fade` to scale up and fade out in sync with the sweeping arm.
  - **The Neon Glow**: Extensive use of intense, multi-layered `box-shadow` and `text-shadow` properties using high-contrast cyan, magenta, and yellow variables to create the emissive neon look against the dark background.
- **Theming**: Configured via CSS Custom Properties. The color palette is locked into a classic Cyberpunk neon scheme.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. (Animations can be disabled via OS preferences).

## Usage
Open `demo.html` in your browser. The entire HUD interface will initialize automatically. Observe the sweeping radar, bouncing data charts, glitching text, and 3D background grid—all running purely on the browser's CSS rendering engine.

## Files
- `demo.html`: The HTML structure defining the HUD layout, side panels, and the center targeting reticle.
- `style.css`: The styling, the `clip-path` geometries, the neon shadow definitions, the complex `@keyframes` (glitch, radar spin, chart bounce), and the responsive media queries.
