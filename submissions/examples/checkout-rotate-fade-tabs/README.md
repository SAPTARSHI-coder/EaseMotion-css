# CSS Rotate-Fade Tabs (Checkout)

A lightweight, pure CSS tab component tailored for E-Commerce Checkout Layouts. It features an engaging 3D rotate-and-fade entrance animation when switching between content panes.

## Features
- Pure CSS and HTML (No JavaScript required).
- Relies on hidden radio inputs and the `~` sibling selector for fully functional state switching.
- Engaging 3D `rotateX` and `opacity` transition for entering tab content.
- Animated underline indicator using `transform: translateX` for performant hardware-accelerated movement.
- Modern ecommerce checkout styling.
- Fully responsive across desktop, tablet, and mobile viewports.
- Fully accessible with `prefers-reduced-motion` support.

## Usage
Open `demo.html` in your browser. Click on the tab labels ("Address", "Options", "Summary") to switch views. The active content will smoothly rotate downward and fade into view while the underline indicator slides below the active label.

## Files
- `demo.html`: The HTML structure for the checkout UI, tabs, and hidden radio state.
- `style.css`: The styling, perspective setup, and CSS transformations for the 3D rotate entrance transitions.
