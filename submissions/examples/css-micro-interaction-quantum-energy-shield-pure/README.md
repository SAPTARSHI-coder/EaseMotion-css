# CSS Micro-interactions: Quantum Energy Shield

A collection of hardware-accelerated, JavaScript-free micro-interactions focused on sci-fi energy barriers, quantum containment fields, and glowing particle auras. 

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, SVG, or JavaScript required to simulate the energy physics.
- **Component Architecture**: 
  - **Deflector Shield Button**: An interactive button that deploys a multi-layered force field on hover. It uses three absolute-positioned `.shield-layer` divs placed behind the button text (`z-index: -1`). On `:hover`, they transition from `opacity: 0; transform: scale(0.8)` to visible, expanded scales. Using staggered `transition-delay` values (e.g., `0.1s`, `0.05s`, `0s`) makes the shields snap into place sequentially, from the inner layer to the outer layer.
  - **Quantum Core Loader**: A spherical energy containment field. It applies `perspective` and `transform-style: preserve-3d` to the container. Three circular `.q-ring` elements are placed inside, each animated to spin on a different 3D axis (`rotateX`, `rotateY`, `rotateZ`), creating a gyroscope effect around a central pulsing `.q-core`.
  - **Aura Avatar**: An image that projects energy when hovered. It utilizes a `radial-gradient` behind the image (`.aura-field`) that scales up and pulses. Additionally, it features a pure CSS particle emitter: four small dots (`.particles span`) are hidden at the center. On hover, they run an `@keyframes shoot` animation that translates them outward to random coordinates defined by custom CSS variables (`--tx`, `--ty`).
- **Theming**: Configured via CSS Custom Properties. The color palette focuses on intense, high-energy neon colors: Cyan (`#00f3ff`), Blue (`#0066ff`), and Purple (`#9d00ff`) against a deep space black background.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling the infinite pulsing, spinning, and particle shooting animations for users who prefer less motion.

## Usage
Open `demo.html` in your browser to view the gallery of micro-interactions. Hover over the button and the avatar to trigger the energy shield animations, and observe the continuous 3D rotation of the quantum core loader.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for each of the 3 energy micro-interactions.
- `style.css`: The styling, the 3D transform mathematics, the custom variable-driven particle physics, and the staggered transition delays.
