# CSS 3D-Flip Tooltip (Minimalist Tech)

A pure CSS tooltip component designed for Minimalist Tech Layouts. It features a sophisticated 3D "flip-down" animation triggered on hover, creating the illusion of a physical card swinging out from a hinge on its top edge.

## Features
- Pure CSS and HTML (No JavaScript required).
- The 3D effect is achieved by placing a `.tooltip-content` block inside a `.tooltip-perspective` wrapper wrapper. The wrapper establishes a 3D spatial field via `perspective: 1000px`.
- The animation is driven by a `transform: rotateX(-90deg)` to `rotateX(0deg)` transition, anchoring the movement to the top edge using `transform-origin: top center`. 
- A `cubic-bezier` timing function gives the swing a physical, snappy feeling that bounces slightly upon fully opening.
- Clean, data-focused aesthetic designed for user lists and admin tables, utilizing a stark black-and-white color palette to focus on the content.
- Features a pure CSS upward-pointing arrow built using border manipulation on the `::after` and `::before` pseudo-elements (creating a masked stroke effect).
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion (the 3D spatial flip is removed, relying only on a rapid opacity fade).

## Usage
Open `demo.html` in your browser. You will see a list of users with corresponding role badges. Hover your mouse over any of the role badges; a detailed tooltip card will swing down dynamically from the top edge on a 3D axis.

## Files
- `demo.html`: The HTML structure for the layout, utilizing the required nested `tooltip-perspective` and `tooltip-content` blocks.
- `style.css`: The styling, flexbox layouts, and CSS `transform-style: preserve-3d` logic for the 3D flip effect.
