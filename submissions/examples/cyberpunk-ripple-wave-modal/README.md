# CSS Ripple-Wave Modal (Cyberpunk)

A pure CSS modal component designed for Cyberpunk Neon Layouts. It utilizes the checkbox hack for state management and features a fluid ripple-wave background animation that expands outward when the modal is opened, simulating a digital network sync.

## Features
- Pure CSS and HTML (No JavaScript required).
- State management handled completely via a hidden `<input type="checkbox">` and the `~` general sibling selector.
- The background utilizes an absolute positioned `.ripple-wave` element with a `radial-gradient` that scales up from 0 to 1 on activation.
- Includes a subtle, infinite `@keyframes pulse-wave` animation that keeps the background feeling "alive" while the modal is open.
- Immersive cyberpunk aesthetic featuring background grids, neon text-shadows, and glowing accents (using Blue and Purple).
- Fully responsive across desktop, tablet, and mobile viewports.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Click the "SYNC DATA" button. The background overlay will fade in, and a large blue ripple wave will expand from the center of the modal behind the content. Click the "X" in the header or the "CANCEL" button to close the modal.

## Files
- `demo.html`: The HTML structure for the layout, the hidden checkbox state manager, and the layered modal content (background ripple + foreground content).
- `style.css`: The styling, neon effects, and CSS `transform: scale()` logic for the ripple-wave animations.
