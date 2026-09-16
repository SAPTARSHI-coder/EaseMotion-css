# Pulsing Status Badge (`.ease-pulse-badge`)

## Description
This submission fulfills Issue #57090. It provides a highly visible, pure CSS animated status badge component designed for dashboards to indicate "live" or active states.

By utilizing the `::after` pseudo-element and an infinite `@keyframes` animation, it creates a continuous radar/heartbeat pulse effect entirely without JavaScript.

## Features
- **Zero HTML Clutter:** The pulsing ring is created via CSS pseudo-elements, so developers only need a single `<div>` in their HTML markup.
- **Smart Color Inheritance:** The animated ring inherits the `background-color` of the parent element, meaning creating new color variants requires only changing the parent's color.
- **Color Variants Built-in:** Includes `.ease-pulse-success` (green), `.ease-pulse-warning` (amber), and `.ease-pulse-danger` (red).
- **Accessible:** Respects the `prefers-reduced-motion` media query by completely disabling the infinite animation if the user has requested reduced motion.

## Files Included
- `demo.html`: A mock Server Status dashboard demonstrating the badges in context.
- `style.css`: The component CSS, ready to be integrated into the core framework.
- `README.md`: This documentation.
