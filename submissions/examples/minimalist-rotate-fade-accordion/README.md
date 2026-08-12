# CSS Rotate-Fade Accordion (Minimalist Tech)

A pure CSS accordion component designed for Minimalist Tech Layouts. It utilizes the radio button hack for state management (allowing only one section to be open at a time). When activated, the accordion header icon smoothly rotates 180 degrees, while the content fades in and slides down simultaneously.

## Features
- Pure CSS and HTML (No JavaScript required).
- State management handled completely via hidden `<input type="radio">` buttons and the `~` general sibling selector, enabling standard accordion behavior.
- Clean, technical aesthetic designed for documentation and dashboards, utilizing monospace typography for data points (`JetBrains Mono`).
- The `transform: rotate(180deg)` on the SVG icon is paired with a bouncy `cubic-bezier` timing function for a satisfying click feel.
- Content expands and collapses smoothly using a combination of `max-height`, `opacity`, and a slight `transform: translateY()` for the fade-in effect.
- Active panels gain a subtle border highlight and shadow for clear visual hierarchy.
- Fully responsive layout.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Click any of the accordion headers. The active header will highlight in bold black, the chevron icon will smoothly rotate upwards, and the content pane will fade and slide down into view. Selecting another item will automatically close the currently active one.

## Files
- `demo.html`: The HTML structure for the accordion, utilizing hidden radio buttons for mutually exclusive state management, and inline SVG icons.
- `style.css`: The styling, flexbox layouts, and CSS `transition` logic for the rotate, fade, and slide effects.
