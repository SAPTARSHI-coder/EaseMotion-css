# CSS Modal: Synthwave Grid Line

A retro-futuristic, JavaScript-free modal utilizing the CSS checkbox hack. Features a 3D animated perspective grid, glowing neon borders, and a stark cybernetic aesthetic inspired by 80s synthwave and outrun art styles.

## Features
- Pure CSS and HTML implementation. No JavaScript required to open or close the modal.
- **Component Architecture**: 
  - **The Checkbox Hack**: The core functional logic relies on a hidden `<input type="checkbox">` and the general sibling combinator (`~`). When the user clicks the `<label>` button to open the modal, or clicks the backdrop/dismiss buttons to close it, they are actually toggling this hidden checkbox.
  - **3D Animated Grid**: The `.synth-grid` element uses two overlapping `linear-gradient` backgrounds to draw a neon grid. The `.synth-grid-container` applies `perspective: 400px`, allowing the grid to be laid flat via `transform: rotateX(75deg)`. An infinite CSS `@keyframes` animation translates the grid along the Y-axis (which appears as the Z-axis due to the rotation), creating the illusion of moving forward through a digital landscape.
  - **Horizon Fade**: The `.grid-fade` element applies a vertical linear gradient over the grid to fade it out into the background color at the top of the container, simulating atmospheric depth and a horizon line.
  - **CRT Glitch Entrance**: The `.modal-wrapper` animates in using a sharp `scaleY(0.1)` to `scaleY(1)` transition, mimicking an old CRT monitor powering on.
  - **Neon Lighting**: Extensive use of `box-shadow` and `text-shadow` layers (both inset and outset) are applied to buttons and text to create a realistic, multi-layered neon glow effect.
- **Theming**: Configured via CSS Custom Properties. This modal is inherently designed for dark backgrounds to allow the neon colors to "glow" via shadows. The base palette includes deep space purples, neon pinks (`#ff00ff`), and cyan (`#00ffff`).
- Fully accessible semantic structure. The modal is designated with `role="dialog"` and `aria-modal="true"`. Honors the `prefers-reduced-motion` accessibility standard by freezing the infinite grid animation and the CRT entrance scaling for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the "INITIALIZE_SYS" button to trigger the checkbox hack and reveal the synthwave modal.

## Files
- `demo.html`: The HTML structure defining the checkbox logic, the modal overlay, and the 3D grid container.
- `style.css`: The styling, the `:checked` sibling selector logic, the perspective geometry, and the `grid-move` animation keyframes.
