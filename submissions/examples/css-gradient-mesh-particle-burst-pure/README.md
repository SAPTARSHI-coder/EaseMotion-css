# CSS Mesh Gradient: Particle Burst

A collection of hardware-accelerated, JavaScript-free CSS gradients simulating explosive particle physics, glowing energy cores, and violent mesh expansions.

## Features
- Pure CSS and HTML implementation. No Canvas rendering or external JavaScript physics engines required.
- **Component Architecture**: 
  - **Supernova Card**: An interactive card showcasing a violent mesh expansion. It features a central `.mesh-core` (`radial-gradient` with heavy blur). On `:hover`, this core expands rapidly using `transform: scale(4)`. Simultaneously, a tiny, invisible `.particle-emitter` div in the center fires a complex `@keyframes` animation. This animation transitions multiple `box-shadow` properties from coordinates `0 0` to various outward vectors, creating the illusion of a particle explosion.
  - **Starburst Button**: A button that pulses with a glowing radial gradient and orbits micro-particles. The main background `.btn-bg` uses a `radial-gradient` that scales and pulses its `background-size` on hover. A separate, non-interactive `.btn-particles` container rotates infinitely. This container uses a `::before` pseudo-element with multiple static `box-shadow` values scattered around it. Because the container rotates, the shadows appear as an orbiting particle field.
  - **Particle Burst Text**: A text effect utilizing layered, blurred `text-shadow` properties. The `::before` pseudo-element copies the text via the `data-text` attribute, makes the actual text color `transparent`, and applies multiple stacked `text-shadow` layers with different neon colors (Pink, Orange, Cyan) and blur radii. An infinite animation pulses the blur and brightness.
- **Theming**: Configured via CSS Custom Properties. The color palette revolves around intense, high-energy cosmic colors (Hot Pink, Orange Flare, Cyan Energy, Deep Violet) set against an absolute dark void (`#050510`).
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling the particle explosion keyframes, the orbiting particle rotations, and the text pulsing animations for users who prefer less motion.

## Usage
Open `demo.html` in your browser to view the gallery of explosive gradients. Hover the Supernova Card to trigger the physics burst, hover the Starburst Button to accelerate the orbiting particles, and observe the ambient text pulse.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for each of the 3 particle burst UI components.
- `style.css`: The styling, the multiple `box-shadow` coordinate generation for the explosions, the `text-shadow` layering, and the continuous rotation mechanics.
