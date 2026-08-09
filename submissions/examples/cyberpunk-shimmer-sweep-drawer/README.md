# CSS Shimmer-Sweep Drawer (Cyberpunk)

A pure CSS drawer (side-panel) component designed for Cyberpunk Neon Layouts. It utilizes the checkbox hack for state management and features a slick, right-aligned slide-in animation. The inner content features a continuous, hardware-accelerated shimmer sweep animation that mimics scanning lasers across data items.

## Features
- Pure CSS and HTML (No JavaScript required).
- State management handled completely via a hidden `<input type="checkbox">` and the `~` general sibling selector.
- The `.drawer-panel` slides in smoothly using a `transform: translateX()` transition.
- Includes a `.shimmer-active` utility class that uses an infinite `@keyframes shimmer-sweep` animation, moving a cyan `linear-gradient` across the element via an `::after` pseudo-element.
- The shimmer animations are intentionally paused while the drawer is closed to save GPU rendering cycles.
- Immersive cyberpunk aesthetic featuring background grids, neon text-shadows, and monospace typography.
- Fully responsive layout that adapts to screen sizes (drawer takes up 90vw on mobile devices).
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Click the "OPEN CONSOLE" button. The background overlay will fade in, and a side panel will smoothly slide in from the right edge of the screen. Notice the glowing cyan laser effect sweeping across the active command items. Click the "X" in the header or the "EXIT" button to close the drawer.

## Files
- `demo.html`: The HTML structure for the layout, the hidden checkbox state manager, and the drawer panel containing the shimmering action items.
- `style.css`: The styling, neon effects, and CSS `@keyframes` logic for the slide-in and shimmer-sweep animations.
