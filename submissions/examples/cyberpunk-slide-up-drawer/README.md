# CSS Slide-Up Drawer (Cyberpunk)

A pure CSS drawer component designed for Cyberpunk Neon Layouts. It utilizes the checkbox hack for state management and features a bottom-aligned panel that smoothly slides up into view, stylized as a retro-futuristic terminal console.

## Features
- Pure CSS and HTML (No JavaScript required).
- State management handled completely via a hidden `<input type="checkbox">` and the `~` general sibling selector.
- The `.drawer-panel` is anchored to the bottom of the viewport using Flexbox on the overlay, and slides up smoothly using a `transform: translateY()` transition.
- Immersive cyberpunk terminal aesthetic featuring green neon glows, monospace typography, and a blinking cursor animation.
- Fully responsive layout that takes up a fixed percentage of the viewport height (`60vh`), ensuring it looks great on both desktop and mobile screens.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts (toggling display states) for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Click the "OPEN TERMINAL" button. The background overlay will fade in, and a terminal console panel will smoothly slide up from the bottom edge of the screen. Click the "X" in the header or the "TERMINATE" button to close the drawer.

## Files
- `demo.html`: The HTML structure for the layout, the hidden checkbox state manager, and the bottom-aligned drawer panel containing the terminal UI.
- `style.css`: The styling, neon effects, and CSS `@keyframes` logic for the slide-up animation and blinking cursor.
