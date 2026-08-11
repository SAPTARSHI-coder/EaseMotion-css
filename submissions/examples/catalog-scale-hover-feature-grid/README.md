# CSS Scale-Hover Feature Grid

A pure CSS feature grid component designed for Product Catalog Layouts and SaaS landing pages. It features a modern, snappy `scale` and `translateY` hover interaction that gives the UI a premium, responsive feel.

## Features
- Pure CSS and HTML (No JavaScript required).
- Responsive `display: grid` layout that gracefully adapts to screen sizes.
- Each feature card utilizes a smooth `transform: scale(1.03) translateY(-8px)` CSS transformation paired with a bouncy `cubic-bezier` timing function.
- The inner icon container scales up and rotates slightly on hover for an added layer of micro-interaction.
- Clean, modern, and accessible design structure.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Hover over any of the feature cards in the grid. The card will scale up and lift, bringing itself into focus, while the icon container morphs its colors and rotates slightly to emphasize interactivity.

## Files
- `demo.html`: The HTML structure for the grid layout and individual feature cards.
- `style.css`: The styling, flexbox/grid rules, and CSS `transition` logic for the hover effects.
