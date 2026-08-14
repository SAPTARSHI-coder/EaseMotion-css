# CSS Bounce-Pulse Feature Grid

A pure CSS feature grid component designed for Product Catalog Layouts and landing pages. It features an engaging combination of a bouncy hover card lift and a continuous pulsing glow around the feature icon.

## Features
- Pure CSS and HTML (No JavaScript required).
- Responsive `display: grid` layout that gracefully adapts to screen sizes.
- Each feature card utilizes a smooth `translateY` and `scale` CSS transformation paired with a `cubic-bezier` timing function for a bouncy lift on hover.
- An independent `@keyframes feature-pulse` animation is applied to an absolute positioned `.pulse-ring` element behind the icon, triggering a radiating glow effect when the card is hovered.
- Clean, modern, and accessible design structure.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Hover over any of the feature cards. The card will bounce upward, the icon will slightly enlarge, and a continuous orange pulse ring will radiate from behind the icon.

## Files
- `demo.html`: The HTML structure for the grid layout and individual feature cards.
- `style.css`: The styling, flexbox/grid rules, and `@keyframes` pulse animations.
