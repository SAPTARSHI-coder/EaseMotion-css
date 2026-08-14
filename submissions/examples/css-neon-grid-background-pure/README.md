# CSS Neon Grid Background

A retro-futuristic glowing grid background rendered entirely with layered CSS gradients, providing a perfectly scalable, resolution-independent neon aesthetic without any image assets or JavaScript calculations.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture**: 
  - **The Grid Layer**: The crisp, sharp grid lines are generated directly on the `.neon-grid-bg` container using multiple `repeating-linear-gradient` declarations (one vertical `0deg`, one horizontal `90deg`). The grid mathematically repeats exactly at the defined `--grid-size` CSS variable, creating a perfect geometric mesh.
  - **The Neon Glow Trick**: To simulate a diffuse neon gas glow without expensive SVG lighting filters, this component uses a `::before` pseudo-element. This layer draws the exact same grid geometry using a slightly brighter cyan color, positions itself perfectly behind the main grid (`z-index: 0`), and applies a CSS `filter: blur()`. When layered behind the sharp grid lines, it creates a highly realistic, blooming neon tube effect.
  - **Cyberpunk Typography & Styling**: Includes demo styles using Google Fonts ('Orbitron' and 'Rajdhani'), stark cyan borders, and inverted `box-shadow` glows to complete the retro-futuristic aesthetic.
- Fully accessible semantic structure. The grid acts entirely as a decorative background and does not interfere with the DOM flow or screen reader access.

## Usage
Open `demo.html` in your browser to view the glowing grid and the cyberpunk-styled demo content.

## Files
- `demo.html`: The HTML structure defining the background container and the demo card.
- `style.css`: The styling, the `repeating-linear-gradient` geometry, and the blur-filter glow mechanics.
