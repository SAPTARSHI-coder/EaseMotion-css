# CSS Bounce-Pulse Pricing Table

A pure CSS pricing table component designed for Product Catalog Layouts. It features a central featured card that scales and pulses continuously upon hover, drawing user attention to the preferred tier.

## Features
- Pure CSS and HTML (No JavaScript required).
- Responsive flexbox layout that gracefully stacks on smaller screens.
- Standard cards feature a smooth `translateY` hover lift.
- The "Featured" (Most Popular) card utilizes a continuous `box-shadow` pulse animation via `@keyframes` combined with a `scale` hover effect to draw maximum attention.
- Clean, modern, and accessible design structure.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser to view the pricing tiers. Hover over the standard cards to see them lift. Hover over the dark "Professional" tier to trigger the infinite bounce-pulse effect.

## Files
- `demo.html`: The HTML structure for the pricing layout and individual tier cards.
- `style.css`: The styling, layout rules, and `@keyframes` pulse animations.
