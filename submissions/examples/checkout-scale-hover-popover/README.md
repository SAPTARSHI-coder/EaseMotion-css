# CSS Scale-Hover Popover (Checkout)

A pure CSS tooltip/popover component designed for E-Commerce Checkout Layouts. It utilizes a snappy `scale` entrance animation triggered on hover, ideal for clarifying line items like Subtotal or Estimated Tax.

## Features
- Pure CSS and HTML (No JavaScript required).
- State management handled seamlessly through the CSS `:hover` pseudo-class.
- Engaging `scale` CSS transformation paired with a `cubic-bezier` timing function for a bouncy entrance.
- Integrated CSS triangle arrow pointing down to the trigger element.
- Clean and modern e-commerce checkout styling.
- Fully responsive across desktop, tablet, and mobile viewports.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe animations.

## Usage
Open `demo.html` in your browser. Hover over the info icon (ⓘ) next to "Subtotal" or "Estimated Tax" to view the popover. The hidden popover will smoothly scale up and fade into view from the bottom left.

## Files
- `demo.html`: The HTML structure for the checkout UI, the tooltip hover trigger, and the popover content.
- `style.css`: The styling and CSS transformations for the scale-hover transitions.
