# CSS 3D-Flip Modal (Cyberpunk)

A pure CSS modal component designed for Cyberpunk Neon Layouts. It utilizes the checkbox hack for state management and features a dramatic 3D `rotateX` flip animation, giving the impression of a digital interface rapidly folding down into view, stylized as a critical system alert.

## Features
- Pure CSS and HTML (No JavaScript required).
- State management handled completely via a hidden `<input type="checkbox">` and the `~` general sibling selector.
- True 3D spatial flip effect achieved using CSS `perspective` on the overlay and `transform-style: preserve-3d` combined with `rotateX` on the modal wrapper.
- Includes a pure CSS animated progress bar (`@keyframes load-progress`) that triggers only when the modal flips open.
- Immersive cyberpunk aesthetic featuring background grids, neon text-shadows, and aggressive red/orange box-shadow glows.
- Fully responsive across desktop, tablet, and mobile viewports.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Click the "INITIATE SEQUENCE" button. The background overlay will fade in while the neon-red alert modal aggressively flips down along the X-axis. A progress bar inside the modal will also begin loading. Click the "X" in the header or the "CANCEL" button to close the modal.

## Files
- `demo.html`: The HTML structure for the layout, the hidden checkbox state manager, and the 3D modal wrapper.
- `style.css`: The styling, neon effects, and CSS `perspective`/`rotateX` logic for the 3D flip animations.
