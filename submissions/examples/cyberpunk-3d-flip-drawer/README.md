# CSS 3D-Flip Drawer (Cyberpunk)

A pure CSS drawer component designed for Cyberpunk Neon Layouts. It utilizes the checkbox hack for state management and features a dramatic 3D `rotateY` flip animation, giving the impression of a digital interface rapidly swinging open like a high-tech door.

## Features
- Pure CSS and HTML (No JavaScript required).
- State management handled completely via a hidden `<input type="checkbox">` and the `~` general sibling selector.
- True 3D spatial flip effect achieved using CSS `perspective` on a wrapper element and `transform-style: preserve-3d` combined with `rotateY` and a `transform-origin` on the left edge.
- Includes pure CSS custom neon toggle switches (`<input type="checkbox">`) for the hardware configuration settings.
- Immersive cyberpunk aesthetic featuring background grids, neon text-shadows, and aggressive orange/red box-shadow glows.
- Fully responsive layout that adapts gracefully to screen sizes (taking up 90vw on small screens).
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Click the "ACCESS SETTINGS" button. The background overlay will fade in while the neon-orange hardware config drawer swings open from the left side of the screen along the Y-axis. Click the "X" in the header or the "ABORT" button to close the drawer.

## Files
- `demo.html`: The HTML structure for the layout, the hidden checkbox state manager, the 3D perspective wrapper, and the custom neon toggles.
- `style.css`: The styling, neon effects, and CSS `perspective`/`rotateY` logic for the 3D flip animations and custom toggles.
