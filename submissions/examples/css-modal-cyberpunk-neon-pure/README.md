# CSS Modal: Cyberpunk Neon

A high-voltage, JavaScript-free modal utilizing the CSS checkbox hack, featuring aggressive neon glows, scanlines, and CSS clip-path geometry.

## Features
- Pure CSS and HTML implementation. No JavaScript required to open or close the modal.
- **Component Architecture**: 
  - **The Checkbox Hack**: The core functional logic relies on a hidden `<input type="checkbox">` and the general sibling combinator (`~`). When the user clicks the `<label>` button to open the modal, or clicks the backdrop/dismiss buttons to close it, they are actually toggling this hidden checkbox.
  - **Clipped Geometry**: The modal card and buttons utilize `clip-path: polygon()` to slice off the corners, creating the signature angular, hardware-style aesthetic common in cyberpunk designs.
  - **Neon Accents**: Aggressive use of `box-shadow` and `text-shadow` across multiple layers simulates glowing neon tubes. A pseudo-element (`::before`) on the modal card traces the top and right edges with a solid neon pink line to emphasize the angular shape.
  - **Scanline Overlay**: A `.scanlines` container sits over the modal background using a tightly packed `repeating-linear-gradient` to simulate the raster lines of an old CRT monitor or heads-up display.
  - **Glitch Animation**: The `ONLINE` status text utilizes a stepped `@keyframes flicker` animation, rapidly dropping its opacity to `0.2` at specific percentage intervals to simulate a failing electrical connection.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The modal is inherently designed for a dark aesthetic, utilizing a stark black background (`#09090b`) to ensure the high-contrast cyan, pink, and yellow neon accents pop aggressively.
- Fully accessible semantic structure. The modal is designated with `role="dialog"` and `aria-modal="true"`. The decorative scanlines are hidden from screen readers using `aria-hidden="true"`. Honors the `prefers-reduced-motion` accessibility standard by freezing the text flicker animations and removing the modal pop-in transition for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the "INITIATE_UPLINK" button to trigger the checkbox hack and reveal the modal.

## Files
- `demo.html`: The HTML structure defining the checkbox logic, the modal overlay, the scanlines, and the system content.
- `style.css`: The styling, the `:checked` sibling selector logic, the `clip-path` geometry, and the `repeating-linear-gradient` scanlines.
