# CSS 3D-Flip Popover (Checkout)

A pure CSS tooltip/popover component designed for E-Commerce Checkout Layouts. It utilizes an impressive 3D `rotateX` flip entrance animation triggered on hover, ideal for clarifying line items like Subtotal or Estimated Tax.

## Features
- Pure CSS and HTML (No JavaScript required).
- State management handled seamlessly through the CSS `:hover` pseudo-class.
- Engaging 3D `perspective` and `rotateX` CSS transformations paired with a `cubic-bezier` timing function for a bouncy, flipping entrance.
- Integrated CSS triangle arrow pointing down to the trigger element.
- Clean and modern e-commerce checkout styling.
- Fully responsive across desktop, tablet, and mobile viewports.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe animations.

## Usage
Open `demo.html` in your browser. Hover over the info icon (ⓘ) next to "Subtotal" or "Estimated Tax" to view the popover. The hidden popover will flip up on a 3D axis and fade into view from the bottom.

## Files
- `demo.html`: The HTML structure for the checkout UI, the tooltip hover trigger, and the 3D-perspective popover wrapper.
- `style.css`: The styling and CSS transformations for the 3D-flip hover transitions.
