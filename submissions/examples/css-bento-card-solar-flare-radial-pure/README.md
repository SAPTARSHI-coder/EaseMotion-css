# CSS Bento Grid: Solar Flare Radial

A hardware-accelerated, JavaScript-free bento grid layout. Cards feature dynamic, pulsing radial gradients that simulate stellar corona emissions and solar flare eruptions.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript required for the glowing flare animations.
- **Component Architecture**: 
  - **The Bento Grid**: Built using modern CSS Grid (`display: grid; grid-template-columns: repeat(4, 1fr)`). The layout is fully responsive, gracefully degrading to a 2-column, and eventually 1-column layout on smaller screens.
  - **The Base Corona**: Each `.solar-card` uses an absolutely positioned `::before` pseudo-element with a soft, semi-transparent `radial-gradient`. This acts as the ambient coronal glow that is always present in the background of the card.
  - **The Dormant Flare**: Inside each card is a `.solar-flare` div. It contains a highly complex, multi-stop `radial-gradient` that transitions from pure white (core) to yellow, orange, red, and finally transparent. It also uses a massive `filter: blur(20px)`. By default, this element is hidden via `opacity: 0` and `transform: scale(0)`.
  - **The Eruption Mechanics**: When a user hovers over a `.solar-card`, the `.solar-flare` is triggered. It scales up rapidly to `1.5` and fades in. 
  - **The Continuous Pulse**: Once the hover state is active, an `@keyframes flare-pulse` animation takes over. It infinitely bounces the flare between `scale(1.5)` and `scale(1.6)`, while also slightly modulating the opacity and blur radius. This simulates a continuous, chaotic emission of energy while the user interacts with the card.
  - **The Layering System**: The `.card-inner` content wrapper is given `z-index: 2` to ensure that the text and icons always remain crisp, readable, and situated *above* the intense glowing flare effects rendering in the background.
- **Theming**: Configured via CSS Custom Properties. Best viewed in a dark theme to maximize the contrast of the glowing solar colors against the dark void of the background.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the rapid scaling eruption and continuous pulsing animations are disabled, presenting a static, accessible grid UI.

## Usage
Open `demo.html` in your browser. The grid will appear with a subtle ambient glow. Hover your mouse over any bento card to trigger a localized solar flare eruption, complete with continuous pulsing physics.

## Files
- `demo.html`: The HTML structure defining the CSS Grid layout and the nested SVG icons and `.solar-flare` nodes.
- `style.css`: The styling, the CSS Grid layout mathematics, the complex `radial-gradient` mapping, the `@keyframes flare-pulse`, and the responsive media queries.
