# CSS Micro-interactions: Laser Ray Trace

A collection of hardware-accelerated, JavaScript-free micro-interactions focused on glowing laser beams tracing the perimeter of UI elements. 

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, SVG line-drawing, or JavaScript required for the physics.
- **Component Architecture**: 
  - **Perimeter Scan Button**: An interactive button that deploys a laser tracking effect on hover. It uses four absolute-positioned `.laser-track` divs representing the four borders. Initially, they are translated off-screen (e.g., `transform: translateX(-100%)`). On `:hover`, they transition back to `0`. By using staggered `transition-delay` values (`0s`, `0.2s`, `0.4s`, `0.6s`), the laser appears to seamlessly draw a continuous box around the button.
  - **Conic Laser Card**: A highly performant, infinite laser border. This is achieved by placing a pseudo-element *behind* the main card content (`z-index: 1`), giving it a sharp `conic-gradient` (transparent to solid red), and animating its rotation with `transform: rotate()`. A second pseudo-element with a `blur` filter provides the glowing laser bloom. The solid `.card-content` sits on top (`z-index: 5`), masking the center and leaving only the spinning edges visible.
  - **Laser Underline Link**: A classic minimal interaction. It uses an `::after` pseudo-element for the underline. On `:hover`, it scales from `0` to `1` on the X-axis. By dynamically changing the `transform-origin` between `right` (initial state) and `left` (hover state), the laser appears to strike from left to right, and then retract from right to left when the mouse leaves.
- **Theming**: Configured via CSS Custom Properties. The color palette focuses on intense, high-energy neon colors: a stark Laser Red (`#ff0055`) set against a deep space black background.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling the spinning loader and complex transition traces for users who prefer less motion.

## Usage
Open `demo.html` in your browser to view the gallery of micro-interactions. Hover over the button and the link to trigger the laser drawing effects, and observe the continuous rotation of the conic laser card.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for each of the 3 laser micro-interactions.
- `style.css`: The styling, the `conic-gradient` geometry, the `transform-origin` manipulation, and the staggered transition delays.
