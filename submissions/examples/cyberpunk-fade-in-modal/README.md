# CSS Fade-In Modal (Cyberpunk)

A pure CSS modal component designed for Cyberpunk Neon Layouts. It utilizes the checkbox hack for state management and features a sleek fade-in overlay with a subtle scale-up animation for the modal content, heavily stylized with neon glows, grids, and monospace typography.

## Features
- Pure CSS and HTML (No JavaScript required).
- State management handled completely via a hidden `<input type="checkbox">` and the `~` general sibling selector.
- Smooth `opacity`, `visibility`, and `transform` CSS transitions paired with a `cubic-bezier` timing function for a polished entrance.
- Immersive cyberpunk aesthetic featuring background grids, neon text-shadows, and box-shadow glows (using Cyan, Pink, and Yellow).
- Animated button hover states simulating light sweeps.
- Fully responsive across desktop, tablet, and mobile viewports.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Click the "INITIALIZE MODAL" button. The background overlay will fade in, blurring the background, while the neon-bordered modal content slides up slightly and scales into view. Click the "X" in the header or the "DISCONNECT" button to close the modal.

## Files
- `demo.html`: The HTML structure for the layout, the hidden checkbox state manager, and the modal overlay container.
- `style.css`: The styling, neon effects, and CSS `transition` logic for the fade-in modal animations.
