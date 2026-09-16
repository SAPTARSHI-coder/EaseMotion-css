# CSS Bento Grid: Particle Burst

A hardware-accelerated, JavaScript-free bento grid layout. Hovering over cards triggers a dynamic, multi-directional particle explosion powered entirely by CSS keyframes and staggered delays.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript required for the multi-directional particle physics engine.
- **Component Architecture**: 
  - **The Bento Grid**: Built using modern CSS Grid (`display: grid; grid-template-columns: repeat(4, 1fr)`). The layout is fully responsive, gracefully degrading to a 2-column, and eventually 1-column layout on smaller screens.
  - **The Particle Engine**: Inside each `.burst-card`, there is a `.particle-container` which holds an array of `.particle` spans. By default, these particles are invisible (`opacity: 0`) and sit in the exact center of the card (`transform: translate(0,0) scale(0)`).
  - **Stochastic CSS Motion**: To create a burst that looks random and chaotic without using JavaScript `Math.random()`, we assign unique CSS classes (`.p1`, `.p2`, etc.) to each particle. Each class defines CSS Custom Properties (`--tx` and `--ty`) for its unique target X and Y translation coordinates. We also vary their sizes based on these classes.
  - **The Hover Trigger**: When the user hovers over a `.burst-card`, an `@keyframes explode` animation is applied to all child `.particle` elements.
  - **The Animation Keyframes**: The `explode` animation starts the particles at `opacity: 1; transform: translate(0, 0) scale(1)`. Over `0.6s`, they animate to `opacity: 0; transform: translate(var(--tx), var(--ty)) scale(0.1)`. Because each particle has unique `--tx` and `--ty` variables, they all fly outward in different directions simultaneously, creating a 360-degree burst effect. Using `forwards` on the animation ensures the burst only happens once per hover and doesn't loop obnoxiously.
  - **Layering**: The `.card-inner` content wrapper is given `z-index: 5` and `pointer-events: none` to ensure it sits above the exploding particles without interfering with the hover state of the parent card.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). 
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the particle array is completely hidden and the hover scale transition is disabled, presenting a static, accessible grid UI.

## Usage
Open `demo.html` in your browser. Hover your mouse over any of the bento cards in the grid. You will see a multi-directional burst of colorful particles explode from the center of the card outwards. Moving your mouse off and back onto a card will re-trigger the burst.

## Files
- `demo.html`: The HTML structure defining the CSS Grid layout, the inner content, and the hidden arrays of `.particle` spans.
- `style.css`: The styling, the CSS Grid layout mathematics, the `--tx`/`--ty` stochastic coordinate mapping, the `explode` keyframes, and the responsive media queries.
