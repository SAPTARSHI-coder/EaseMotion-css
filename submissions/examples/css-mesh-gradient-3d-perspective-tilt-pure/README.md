# CSS Mesh Gradient: 3D Perspective Tilt

A hardware-accelerated, JavaScript-free gradient mesh. Features a fully interactive 3D perspective tilt effect achieved purely through CSS sibling selectors, making the mesh feel like a physical, touchable surface.

## Features
- Pure CSS and HTML implementation. Absolutely no JavaScript required for the interactive 3D mouse tracking or the fluid gradient mesh.
- **Component Architecture**: 
  - **The Vibrant Mesh Gradient**: The background of the card (`.mesh-card-3d`) is created by layering four distinct `radial-gradient` definitions, each anchored to a different corner of the element. A `@keyframes` animation slowly shifts the `background-position` of this complex background, causing the colors to fluidly mix and swirl over time.
  - **The Hover Grid Hack (3D Interactivity)**: JavaScript is typically required to track mouse position to tilt an element in 3D space. To achieve this physically reactive surface in pure CSS, we use a classic technique: 
    1. The parent container establishes the 3D space using `perspective: 1200px`.
    2. Inside the container, we place 9 invisible `div` elements arranged in a 3x3 grid using absolute positioning. These elements sit on top of everything (`z-index: 10`) to catch mouse hover events.
    3. The actual mesh card sits underneath this invisible grid.
    4. We use the CSS general sibling combinator (`~`). When you hover over the "top-left" invisible div, CSS applies `transform: rotateX(15deg) rotateY(-15deg)` to the sibling mesh card.
  - **Dynamic Specular Glare (Lighting Physics)**: To make the gradient feel like a physical, glossy material, an oversized `.specular-glare` element is created using a white `radial-gradient`. Using the same sibling combinator trick, we move this glare in the *opposite* direction of the tilt. A `mix-blend-mode: overlay` is applied so the highlight interacts beautifully with the vibrant underlying mesh colors.
  - **3D Parallax Content**: The internal content uses `transform: translateZ(50px)`. Because the parent mesh card has `transform-style: preserve-3d`, the content physically pops out of the gradient surface. As the card tilts, the content experiences true parallax.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). The mesh uses a slightly deeper, more intense set of neon colors in dark mode.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the invisible hover grid is disabled, the ambient mesh animation is stopped, and the card is given a subtle, static, fixed 3D tilt.

## Usage
Open `demo.html` in your browser. Move your mouse around the vibrant gradient surface to see it physically react and tilt dynamically towards your cursor. Notice how the internal content pops out in 3D parallax, and observe the specular lighting sweeping across the gradient mesh.

## Files
- `demo.html`: The HTML structure defining the 9-cell invisible hover grid and the foreground mesh container.
- `style.css`: The styling, the complex multi-stop `radial-gradient` mesh definitions, the sibling selector logic (`~`) governing the 3D transforms, the specular glare translation, and the `transform-style: preserve-3d` parallax setup.
