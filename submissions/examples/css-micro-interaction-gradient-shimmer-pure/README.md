# CSS Micro-interactions: Gradient Shimmer

A collection of hardware-accelerated, JavaScript-free micro-interactions focused on "shimmer" and sweeping light effects. These are essential for creating polished, premium-feeling user interfaces.

## Features
- Pure CSS and HTML implementation. No JavaScript event listeners required for the hover states.
- **Component Architecture**: 
  - **Shimmer Text**: Applies a moving `linear-gradient` to the background of the text, and utilizes `-webkit-background-clip: text` and `-webkit-text-fill-color: transparent` to mask the gradient exactly to the shape of the letters. An infinite `@keyframes` animation shifts the `background-position`.
  - **Shimmer Button**: An interactive button that triggers a light sweep on hover. This uses a `::before` pseudo-element with a semi-transparent gradient that sits off-screen (`transform: translateX(-100%)`). On `:hover`, a CSS transition smoothly moves it to `translateX(50%)`, creating a realistic shine effect passing over the button surface.
  - **Skeleton Loader**: The classic loading state UI pattern. It utilizes the `.shimmer-bg` utility class, which applies a base color and a lighter highlight color in a `linear-gradient` with `background-size: 200% 100%`. An infinite linear animation creates the illusion of a scanning light.
  - **Shimmer Border**: A card with a glowing, moving gradient border. This is achieved by creating a pseudo-element *behind* the main card content (`z-index: 1`), giving it a `conic-gradient`, and animating its rotation with `transform: rotate()`. The `.card-inner` sits on top (`z-index: 2`) with a solid background, masking the center of the conic gradient and leaving only the edges visible as a border.
- **Theming**: Configured via CSS Custom Properties. Easily change the base background, card surface, and specific shimmer highlight colors.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling infinite looping background animations and hover transitions for users who prefer less motion.

## Usage
Open `demo.html` in your browser to view the gallery of micro-interactions. Hover over the button to see the interactive sweep, and observe the automated shimmer on the text, skeleton loader, and card border.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for each of the 4 shimmer micro-interactions.
- `style.css`: The styling, the critical `background-clip: text` properties, the hover state transitions, and the `background-position` animations.
