# CSS Morph-Glow Dropdown

A pure CSS dropdown menu component designed for SaaS Showcase Layouts. It features a modern, fluid `scale` morph entrance coupled with an animated, blurred background gradient glow that simulates a premium Web3/SaaS aesthetic.

## Features
- Pure CSS and HTML (No JavaScript required).
- State management handled seamlessly through the CSS `:hover` pseudo-class on the parent container.
- Engaging `scale` and `translateY` CSS transformations paired with a `cubic-bezier` timing function for a smooth structural morph entrance.
- Advanced animated glow effect achieved using an absolute positioned pseudo-background with `filter: blur()`, `linear-gradient`, and a continuous `@keyframes` background-position shift.
- Clean, dark-mode SaaS navigation styling with glassmorphism header integration.
- Fully responsive across desktop, tablet, and mobile viewports.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Hover over the "Products" navigation link in the header. The dropdown menu will smoothly scale and morph into view, while a shifting, blurred neon gradient pulses behind it.

## Files
- `demo.html`: The HTML structure for the SaaS header, the navigation links, and the dropdown menu structure.
- `style.css`: The styling, flexbox layouts, and `@keyframes` glow animations.
