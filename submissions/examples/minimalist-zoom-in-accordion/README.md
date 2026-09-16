# CSS Zoom-In Accordion (Minimalist Tech)

A pure CSS accordion component designed for Minimalist Tech Layouts. It utilizes the radio button hack for state management (allowing only one section to be open at a time). When activated, the inner content performs a distinct "Zoom-In" entrance animation, scaling up smoothly from 90% to 100%.

## Features
- Pure CSS and HTML (No JavaScript required).
- State management handled completely via hidden `<input type="radio">` buttons and the `~` general sibling selector, enabling standard accordion behavior.
- Clean, data-focused aesthetic designed for dashboards and metric displays.
- The accordion header features a custom pure CSS `+` to `-` morphing indicator (built using `::before` and `::after` pseudo-elements).
- Content expands via a `max-height` transition on the wrapper, followed by a slightly delayed `transform: scale()` and `opacity` transition on the `.zoom-in-element` content block, creating a satisfying pop-in effect.
- Active panels gain a subtle indigo border highlight and shadow.
- Fully responsive layout.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Click any of the accordion headers. The `+` indicator will morph into a `-`, the accordion will open, and the inner content will rapidly scale up (zoom-in) into place. Selecting another item will automatically close the currently active one.

## Files
- `demo.html`: The HTML structure for the accordion, utilizing hidden radio buttons for mutually exclusive state management, and nested content blocks for the zoom effect.
- `style.css`: The styling, flexbox layouts, and CSS `transition` logic for the zoom-in content effects and the morphing indicator.
