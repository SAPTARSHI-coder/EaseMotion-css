# CSS Widget: Aurora Glow

A collection of hardware-accelerated, JavaScript-free dashboard widgets featuring ambient, shifting gradients and glowing rim lights inspired by the Aurora Borealis.

## Features
- Pure CSS and HTML implementation. Heavily utilizes CSS gradients and `filter: blur()`.
- **Component Architecture**: 
  - **Ambient Stat Card**: A data widget with a continuous, softly shifting background. It uses a large `radial-gradient` pseudo-element positioned behind the content. By applying a heavy `filter: blur(40px)` and animating the `background-position` with `@keyframes`, it creates a fluid, ambient lighting effect that slowly drifts across the card without distracting from the primary data.
  - **Glowing Chart Placeholder**: A chart widget that features an outer rim glow. An absolutely positioned `.aurora-rim` sits behind the main dark container. This rim uses a `linear-gradient` with multiple colors and a blur. On `:hover`, the opacity and blur radius intensify, and the inner chart bars light up, providing satisfying interactive feedback.
  - **Interactive Profile Card**: A user profile widget that toggles a concentrated aura. Using the CSS checkbox hack (`:checked ~`), clicking the widget reveals a hidden `.aurora-aura` layer. Inside this layer, two blurred `.orb` elements run independent `@keyframes` animations, floating around the container to create a complex, overlapping glow effect.
- **Theming**: Configured via CSS Custom Properties. The color palette focuses on deep space backgrounds (`#030712`) and vibrant, ethereal highlight colors (Purple, Blue, Green, Pink). The widgets use `backdrop-filter: blur(12px)` to achieve a glassmorphism effect on top of the glowing elements.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling all shifting gradient and floating orb `@keyframes` animations for users who prefer less motion.

## Usage
Open `demo.html` in your browser to view the gallery of dashboard widgets. Observe the continuous ambient drift on the Stat Card, hover the Chart Widget to see the rim light intensify, and click the Profile Card to toggle the interactive floating aura.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for each of the 3 aurora widgets.
- `style.css`: The styling, the `filter: blur()` logic, the gradient definitions, and the `background-position` animations.
