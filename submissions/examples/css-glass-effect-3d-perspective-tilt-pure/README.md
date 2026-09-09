# CSS Glass Effect: 3D Perspective Tilt

A hardware-accelerated, JavaScript-free glassmorphism UI element. Features a fully interactive 3D perspective tilt effect achieved purely through CSS sibling selectors and a 3x3 hover grid.

## Features
- Pure CSS and HTML implementation. Absolutely no JavaScript required for the interactive 3D mouse tracking.
- **Component Architecture**: 
  - **The Hover Grid Hack**: JavaScript is typically required to track mouse position to tilt an element in 3D space. To achieve this in pure CSS, we use a classic technique: 
    1. The parent container establishes the 3D space using `perspective: 1000px`.
    2. Inside the container, we place 9 invisible `div` elements arranged in a 3x3 grid using absolute positioning. These elements sit on top of everything (`z-index: 10`) to catch mouse hover events.
    3. The actual glass card (`.glass-card-3d`) sits underneath this invisible grid.
    4. We use the CSS general sibling combinator (`~`). When you hover over the "top-left" invisible div, CSS applies `transform: rotateX(12deg) rotateY(-12deg)` to the sibling glass card.
  - **Dynamic Specular Glare**: Real glass reflects light dynamically as it moves. Inside the glass card, an oversized `.specular-glare` element is created using a white `radial-gradient`. Using the same sibling combinator trick, we move this glare in the *opposite* direction of the tilt, perfectly simulating light passing across the surface of the glass as it turns.
  - **3D Parallax Content**: The internal content (`.card-content-3d`) uses `transform: translateZ(40px)`. Because the parent glass card has `transform-style: preserve-3d`, the content physically pops out of the glass surface. As the card tilts, the content experiences true parallax.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). The animated mesh background and UI colors adapt dynamically to the system theme.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the invisible hover grid is disabled, the ambient mesh animation is stopped, and the card is given a subtle, static, fixed 3D tilt.

## Usage
Open `demo.html` in your browser. Move your mouse around the glass card to see it tilt dynamically towards your cursor. Notice how the internal content pops out in 3D parallax, and observe the specular glare sweeping across the glass surface.

## Files
- `demo.html`: The HTML structure defining the ambient mesh background, the 9-cell invisible hover grid, and the foreground glassmorphism container.
- `style.css`: The styling, the complex sibling selector logic (`~`) governing the 3D transforms, the specular glare translation, and the `transform-style: preserve-3d` parallax setup.
