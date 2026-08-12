# CSS Bento Grid: Laser Ray Trace

A hardware-accelerated, JavaScript-free bento grid layout. Features continuous, glowing laser lines tracing the borders of the cards, powered entirely by CSS `conic-gradient` masking.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, SVG tracing algorithms, or JavaScript required for the glowing animated borders.
- **Component Architecture**: 
  - **The Bento Grid**: Built using modern CSS Grid (`display: grid; grid-template-columns: repeat(4, 1fr)`). The layout is fully responsive, gracefully degrading to a 2-column, and eventually 1-column layout on smaller screens.
  - **The Outer Laser Container**: Each card requires two containers. The outer container (`.laser-card`) has `overflow: hidden`.
  - **The Spinning Gradient**: Attached to the outer container are two `::before` and `::after` pseudo-elements. They are oversized (`width: 200%; height: 200%`) and feature a `conic-gradient` that transitions from transparent to a bright cyan laser color. They continuously rotate via an `@keyframes rotate-laser` animation.
  - **The Volumetric Light Bleed (Bloom)**: The `::after` pseudo-element is a duplicate of the spinning gradient, but it receives a CSS `filter: blur(15px)`. This creates a soft, glowing halo behind the sharp laser line, simulating neon bloom or volumetric light bleed.
  - **The Inner Mask**: The actual card content sits inside the `.laser-inner` container. This inner container is placed exactly `2px` inside the outer container (`top: 2px; left: 2px; etc.`) and is given a solid background color. This effectively "masks" the spinning gradients, only allowing them to be visible through the `2px` border gap around the edge.
  - **Staggered Chaos**: To prevent the grid from looking too uniform, the animation speeds and `animation-delay` values are slightly altered depending on the grid placement area of the card, making the lasers trace asynchronously across the dashboard.
- **Theming**: Configured via CSS Custom Properties. Best viewed in a dark theme, utilizing a cybernetic `Space Grotesk` font and cyan neon colors.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the rotating animations and glowing blur filters are disabled, and the border is replaced with a static, semi-transparent solid color.

## Usage
Open `demo.html` in your browser. Observe the continuous laser tracing effects mapping around the borders of the bento grid cards. Hover over any card to see the laser intensity and bloom effect increase.

## Files
- `demo.html`: The HTML structure defining the CSS Grid layout and the nested outer/inner containers required for the gradient masking technique.
- `style.css`: The styling, the CSS Grid layout mathematics, the `conic-gradient` pseudo-elements, the `blur()` filter bloom, and the responsive media queries.
