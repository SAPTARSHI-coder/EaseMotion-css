# CSS Ripple-Wave Accordion (Minimalist Tech)

A pure CSS accordion component designed for Minimalist Tech Layouts. It utilizes the radio button hack for state management (allowing only one section to be open at a time) and features a clean, professional aesthetic. When an accordion header is clicked, a subtle visual "ripple-wave" sweeps across the header.

## Features
- Pure CSS and HTML (No JavaScript required).
- State management handled completely via hidden `<input type="radio">` buttons and the `~` general sibling selector, enabling standard accordion behavior.
- Clean, minimalist aesthetic using subtle borders, soft shadows, and a muted color palette (blues and slates).
- The ripple effect is achieved using an absolute positioned `.ripple` element inside the `overflow: hidden` header. It triggers an `@keyframes` animation scaling from 0 to 80 when the associated radio button is checked.
- Content expands and collapses smoothly using a combination of `max-height`, `opacity`, and a slight `transform: translateY()`.
- Fully responsive layout.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Click any of the accordion headers. The active header will highlight in blue, the `+` icon will smoothly rotate into an `x`, and a subtle blue ripple wave will wash across the background. The content pane will slide down into view. Selecting another item will close the current one.

## Files
- `demo.html`: The HTML structure for the accordion, utilizing hidden radio buttons for mutually exclusive state management.
- `style.css`: The styling, flexbox layouts, and CSS `@keyframes` logic for the ripple wave and content expansion.
