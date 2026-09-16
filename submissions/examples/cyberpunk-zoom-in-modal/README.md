# CSS Zoom-In Modal (Cyberpunk)

A pure CSS modal component designed for Cyberpunk Neon Layouts. It utilizes the checkbox hack for state management and features an aggressive, snappy zoom-in animation for the modal content, heavily stylized with neon glows, grids, and monospace typography.

## Features
- Pure CSS and HTML (No JavaScript required).
- State management handled completely via a hidden `<input type="checkbox">` and the `~` general sibling selector.
- Snappy `transform: scale()` CSS transition paired with a bouncy `cubic-bezier` timing function for an impactful entrance.
- Immersive cyberpunk aesthetic featuring background grids, neon text-shadows, and box-shadow glows (using Green and Yellow).
- Animated button hover states simulating light sweeps.
- Fully responsive across desktop, tablet, and mobile viewports.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Click the "OPEN UPLINK" button. The background overlay will fade in while the neon-bordered modal content rapidly scales up from 70% to 100% with a slight bounce effect. Click the "X" in the header or the "ABORT" button to close the modal.

## Files
- `demo.html`: The HTML structure for the layout, the hidden checkbox state manager, and the modal overlay container.
- `style.css`: The styling, neon effects, and CSS `transition` logic for the zoom-in modal animations.
