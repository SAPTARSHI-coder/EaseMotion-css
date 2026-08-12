# CSS Bento Grid: Origami Paper Fold

A hardware-accelerated, JavaScript-free bento grid layout. Cards feature an interactive, 3D paper fold effect powered entirely by CSS `transform-style: preserve-3d` and geometric pseudo-elements.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript required for the 3D folding physics.
- **Component Architecture**: 
  - **The Bento Grid**: Built using modern CSS Grid (`display: grid; grid-template-columns: repeat(4, 1fr)`). The layout is fully responsive, gracefully degrading to a 2-column, and eventually 1-column layout on smaller screens.
  - **The 3D Space**: Each `.origami-card` is given `perspective: 1000px` and `transform-style: preserve-3d`. This is absolutely crucial, as it tells the browser to render child elements in a true 3D spatial context rather than flattening them.
  - **The Cut Corner**: The base card uses `clip-path: polygon()` to perfectly slice off the top-right corner.
  - **The Flap (Pseudo-element)**: We use the `::before` pseudo-element to render the folded flap. It is positioned exactly over the cut corner. We use `clip-path` to shape it into a triangle, give it a gradient background to simulate the back of the paper, and apply a drop shadow.
  - **The Fold Mechanics**: The flap has its `transform-origin` set to `bottom left` (the diagonal fold crease). When the user hovers over the card, the flap transitions using `transform: rotateX(180deg) rotateY(-180deg)`. This flips the flap completely open along the diagonal axis, revealing the space beneath it. 
  - **Macro-Interaction**: Hovering over the "Unfold All" button utilizes the modern CSS `:has()` selector on the parent grid (`.bento-grid:has(.paper-btn:hover)`) to instantly trigger the unfold animation on *all* cards simultaneously, demonstrating the power of pure CSS state management without JavaScript event listeners.
- **Theming**: Configured via CSS Custom Properties. The color palette uses warm, textured off-whites for a paper feel in light mode, and deep slate colors in dark mode. Typography utilizes `Playfair Display` for an editorial look.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the 3D folding animations and hover scale effects are disabled, presenting a static grid.

## Usage
Open `demo.html` in your browser. Hover your mouse over any bento card to see the top-right corner physically unfold in 3D space. Hover over the "Unfold All" button in the bottom-right card to trigger the unfold animation across the entire grid simultaneously.

## Files
- `demo.html`: The HTML structure defining the CSS Grid layout and the nested SVG icons.
- `style.css`: The styling, the CSS Grid layout mathematics, the 3D `transform-origin` folding mechanics, the `clip-path` geometry, and the responsive media queries.
