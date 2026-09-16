# CSS Rotate-Fade Feature Grid

A pure CSS feature grid component designed for Product Catalog Layouts and modern dark-mode landing pages. It features an impressive 3D card flip interaction that rotates the card and cross-fades the content to reveal additional details on the back face.

## Features
- Pure CSS and HTML (No JavaScript required).
- True 3D spatial flip effect achieved using CSS `perspective` and `transform-style`.
- Each feature card utilizes a synchronized `transform: rotateY()` and `opacity` transition on both the front and back card faces.
- Clean, modern dark-mode design structure with vibrant accents.
- Responsive `display: grid` layout that gracefully adapts to screen sizes.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static cross-fade layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Hover over any of the feature cards in the grid. The front face of the card will smoothly rotate away on the Y-axis and fade out, revealing the brightly colored back face containing the feature description.

## Files
- `demo.html`: The HTML structure for the grid layout, establishing the front and back faces of each feature card.
- `style.css`: The styling, flexbox/grid rules, and CSS `perspective` and `transform` logic for the 3D hover effects.
