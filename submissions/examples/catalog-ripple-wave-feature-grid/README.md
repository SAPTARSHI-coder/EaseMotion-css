# CSS Ripple-Wave Feature Grid

A pure CSS feature grid component designed for Product Catalog Layouts and modern marketing sites. It features a satisfying, fluid hover interaction where a background layer ripples upwards like a wave, filling the feature card, while simultaneously lifting the card and popping the icon.

## Features
- Pure CSS and HTML (No JavaScript required).
- Unique fluid background effect created by animating an absolute positioned `.ripple-bg` using `transform: translateY()` and animating the `border-radius` from 50% to 0%.
- Combined with a snappy card lift and icon scaling for a highly tactile micro-interaction.
- Text colors automatically adjust contrast when the ripple background fills the card.
- Clean, modern, and accessible design structure.
- Responsive `display: grid` layout that gracefully adapts to screen sizes.
- Fully accessible with `prefers-reduced-motion` support. Safely degrades the wave animation into a simple opacity cross-fade for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Hover over any of the feature cards in the grid. The card will slightly lift, the icon will pop up and scale, and a soft blue ripple wave will rise from the bottom to fill the background of the card.

## Files
- `demo.html`: The HTML structure for the grid layout, establishing the content layer and the hidden `.ripple-bg` element.
- `style.css`: The styling, flexbox/grid rules, and CSS `transition` logic for the fluid hover effects.
