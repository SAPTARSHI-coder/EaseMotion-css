# CSS Glass Effect: Floating Elevation

A hardware-accelerated, JavaScript-free glassmorphism UI element. Features a continuous levitation animation with dynamically scaling drop-shadows to simulate physical elevation over an ambient background.

## Features
- Pure CSS and HTML implementation. No JavaScript required for the continuous physics/elevation simulations or hover states.
- **Component Architecture**: 
  - **The Ambient Background**: True glassmorphism requires a visually complex background to refract. This scene uses three large `.blob` elements. Each is colored differently, heavily blurred using `filter: blur(80px)`, and animated via `@keyframes` to slowly drift in unique patterns using CSS Custom Properties (`--tx`, `--ty`).
  - **The Floating Elevation Core**: The `.glass-card-floating` uses standard glassmorphism (`background`, `backdrop-filter`, and border). However, its defining feature is the infinite `@keyframes levitate` animation.
  - **Dynamic Shadow Physics**: True "floating" requires more than just moving an element up and down. As an object moves further from a surface, its shadow gets *larger, softer, and lighter*. The `levitate` animation continuously interpolates BOTH the `transform: translateY` property and the `box-shadow` property (transitioning between `--shadow-low` and `--shadow-high`). This perfectly simulates the physics of an object bobbing up and down over a surface.
  - **The `:has()` Selector Grounding Hack**: When the user clicks the "Ground" button, we use the modern CSS `:has()` selector on the parent card (`.glass-card-floating:has(.glass-button:active)`) to instantly override the animation, forcefully translating the card downwards and shrinking its shadow to simulate the physical impact of hitting the floor.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). The background blobs and shadow intensities adjust automatically to look beautiful on both light and dark systems.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the continuous bobbing of the card and drifting of the background blobs are disabled, presenting a static, elevated glass card.

## Usage
Open `demo.html` in your browser. Watch the card slowly bob up and down. Pay special attention to the drop-shadow underneath the card and notice how it dynamically blurs and expands as the card reaches its apex, simulating true distance from the floor. Click and hold the "Ground" button to see the card physically drop and hit the surface.

## Files
- `demo.html`: The HTML structure defining the ambient background blobs and the foreground glassmorphism container.
- `style.css`: The styling, the custom property drift logic for the blobs, the `levitate` `@keyframes` that perfectly interpolates the physics-based shadows, and the `:has()` selector hack for the grounding click interaction.
