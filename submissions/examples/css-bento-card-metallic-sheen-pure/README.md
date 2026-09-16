# CSS Bento Grid: Metallic Sheen

A hardware-accelerated, JavaScript-free bento grid layout. Cards feature a brushed metal aesthetic with dynamic, physics-based light reflections powered entirely by CSS gradients and `background-position` animations.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript required for the realistic light reflection physics.
- **Component Architecture**: 
  - **The Bento Grid**: Built using modern CSS Grid (`display: grid; grid-template-columns: repeat(4, 1fr)`). The layout is fully responsive, gracefully degrading to a 2-column, and eventually 1-column layout on smaller screens.
  - **The Metallic Surface**: The base look of the metal is achieved through precision `box-shadow` layering. We use multiple `inset` shadows to simulate a bright highlight on the top-left edge (simulating a global light source from the top-left) and a dark shadow on the bottom-right edge. This gives the 2D surface a thick, machined, 3D appearance.
  - **The Dynamic Sheen**: The polished reflection is created using a complex, multi-stop `linear-gradient` as the `background`. We set the `background-size` to `250% 250%`. 
  - **Interactive Light Reflection**: When the user hovers over a `.metal-card`, we transition the `background-position` from `100% 100%` to `0% 0%`. Because the background is oversized, this visually sweeps the bright highlight diagonal across the card, perfectly simulating a metallic surface refracting a changing light source as the user's perspective shifts.
  - **Engraved Elements**: The `.card-icon` and `.metal-btn` elements use inverted inset shadow logic. By placing dark shadows on the top-left and light highlights on the bottom-right, they appear to be physically engraved or stamped *into* the metal surface rather than sitting on top of it.
  - **Text Etching**: Large text elements (like the `.card-stat`) use `text-shadow` to simulate being etched into the metal, while the main `.title` uses `background-clip: text` with a linear gradient to give the text itself a metallic foil look.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). Dark mode presents a sleek gunmetal/titanium look, while light mode shifts to a brighter silver/aluminum aesthetic.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the `background-position` sweeping animation and hover scale effects are disabled, presenting a static, accessible grid UI.

## Usage
Open `demo.html` in your browser. Hover your mouse over the various bento cards to see the metallic sheen realistically reflect light across the surface. Click the "Initialize" button to see the physical engraving interaction.

## Files
- `demo.html`: The HTML structure defining the CSS Grid layout and the nested SVG icons.
- `style.css`: The styling, the CSS Grid layout mathematics, the complex `linear-gradient` background positioning, the `box-shadow` beveling logic, and the responsive media queries.
