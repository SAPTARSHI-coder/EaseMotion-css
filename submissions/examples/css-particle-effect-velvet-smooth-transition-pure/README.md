# CSS Particle Effect: Velvet Smooth

A hardware-accelerated, JavaScript-free particle effect UI element. Features a luxurious, high-contrast color palette, heavy gaussian blur for a soft "bokeh" aesthetic, and extremely fluid cubic-bezier hover transitions.

## Features
- Pure CSS and HTML implementation. No JavaScript, Canvas, or WebGL required for the particle simulation or hover transitions.
- **Component Architecture**: 
  - **The Velvet Particles**: A system of 12 distinct `.p` elements. Each particle is rendered as a circle and heavily softened using `filter: blur(25px)` to create a beautiful, ambient bokeh aesthetic.
  - **CSS Composition**: The `.particle-system` container uses `mix-blend-mode: screen`. When the blurred, colored particles overlap, their colors blend additively, creating bright, luminous intersections typical of light-based particle systems.
  - **Unique Behaviors**: Utilizing CSS `:nth-child` selectors (via specific classes `.p1` through `.p12`), each particle is assigned unique sizes, positions, colors, animation durations, and drift trajectories using CSS Custom Properties (`--tx`, `--ty`).
  - **The Velvet Transition**: Standard hover transitions feel mechanical. This component uses a long `1.2s` transition tied to a custom `cubic-bezier(0.4, 0, 0.2, 1)` easing curve. When the user hovers over the container, the particles undergo a dramatic transformation: they shrink, converge towards the center (using margin overrides), sharpen (blur decreases), and their ambient drift animation is paused. 
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). The palette relies on deep burgundy/plum backgrounds with Rose, Magenta, and Crimson particles for a luxurious feel.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the ambient drifting animations and the dramatic hover convergence are completely disabled. The particles remain static and blurred in the background.

## Usage
Open `demo.html` in your browser. Watch the ambient particles drift and blend. Hover your mouse over the dark card to trigger the highly fluid, luxurious "velvet" transition as the particles converge and sharpen.

## Files
- `demo.html`: The HTML structure defining the main container, the 12 particle divs, and the content overlay.
- `style.css`: The styling, the bokeh blur logic, the `mix-blend-mode` compositing, the individual particle mapping matrix, and the custom cubic-bezier hover transition logic.
