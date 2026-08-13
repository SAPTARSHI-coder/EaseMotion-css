# CSS Micro-interactions: Morphing Shape

A collection of hardware-accelerated, JavaScript-free micro-interactions focused on fluidly transforming elements between entirely different geometric states.

## Features
- Pure CSS and HTML implementation. No SVG Morphing plugins or complex JavaScript calculations required.
- **Component Architecture**: 
  - **Squircle Morph Button**: An interactive button that seamlessly transitions from a wide pill shape containing text, into a perfect circle containing an icon on `:hover`. It does this by transitioning the container's `width` and `border-radius`, while simultaneously manipulating the `opacity`, `scale`, and `rotation` of the text and icon spans inside.
  - **Organic Blob**: A continuous, fluid shape-shifting element. Instead of relying on complex SVG paths, it utilizes advanced 8-point `border-radius` values (e.g., `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%`). By running two `@keyframes` animations on two stacked divs with different `border-radius` trajectories and `transform: rotate()` speeds, it creates an incredibly organic, amoeba-like morphing effect.
  - **Menu Morph Toggle**: The classic hamburger-to-X menu icon transition. Built without JavaScript by leveraging the CSS checkbox hack (`:checked ~`). When the invisible checkbox is toggled, the three horizontal `span` lines adjust their `top` position and `transform: rotate()` properties. A bouncy `cubic-bezier` transition makes the morph feel highly kinetic.
- **Theming**: Configured via CSS Custom Properties. The color palette utilizes vibrant gradients that blend beautifully when layered in the organic blob component.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling the infinite blob morphing animations and reducing transition durations for users who prefer less motion.

## Usage
Open `demo.html` in your browser to view the gallery of micro-interactions. Hover over the "Squircle" button to watch it collapse into a circular icon, click the Hamburger menu to morph it into an 'X', and observe the continuous fluid animation of the organic blob.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for each of the 3 morphing micro-interactions.
- `style.css`: The styling, the 8-point `border-radius` keyframes, the checkbox hack logic for the menu toggle, and the staggered transitions for the button morph.
