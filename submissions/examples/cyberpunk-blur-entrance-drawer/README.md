# CSS Blur-Entrance Drawer (Cyberpunk)

A pure CSS drawer component designed for Cyberpunk Neon Layouts. It utilizes the checkbox hack for state management and features a cinematic, high-tech entrance sequence where the panel and its contents pull into focus from a heavily blurred state.

## Features
- Pure CSS and HTML (No JavaScript required).
- State management handled completely via a hidden `<input type="checkbox">` and the `~` general sibling selector.
- The `.drawer-panel` enters the screen with a combined `filter: blur()`, `opacity`, and `transform: translateX()` CSS transition, simulating a camera pulling focus.
- Inner list elements (`.blur-enter`) utilize a sequential stagger effect, leveraging a custom CSS property (`--delay`) mathematically calculated within the `transition-delay`.
- Immersive cyberpunk aesthetic featuring background grids, neon text-shadows, and glowing status indicators (Pink/Cyan/Red).
- Fully responsive layout that adapts gracefully to screen sizes (taking up 90vw on small screens).
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Click the "VIEW NODES" button. The background overlay will fade in, and a side panel will slide in from the left while pulling sharply into focus from a blurred state. The list of active connections inside the panel will then sequentially pop into focus one by one. Click the "X" in the header or the "CLOSE" button to close the drawer.

## Files
- `demo.html`: The HTML structure for the layout, the hidden checkbox state manager, the drawer panel, and the inner list items utilizing inline `--delay` variables.
- `style.css`: The styling, neon effects, and CSS `filter: blur()` logic for both the parent drawer and the staggered child elements.
