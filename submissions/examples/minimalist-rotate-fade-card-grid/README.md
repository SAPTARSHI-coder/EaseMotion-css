# CSS Rotate-Fade Card Grid (Minimalist Tech)

A pure CSS interactive grid component designed for Minimalist Tech Layouts. It features an advanced 3D "Rotate-Fade" hover effect, seamlessly transitioning between two content faces using a combination of spatial rotation and opacity fading.

## Features
- Pure CSS and HTML (No JavaScript required).
- The `.rotate-card` element establishes a 3D environment using `perspective: 1000px`.
- It contains two absolutely positioned child elements: `.card-front` and `.card-back`. 
- By default, the front face is flat (`rotateY(0deg)`) and fully opaque, while the back face is flipped (`rotateY(180deg)`) and transparent.
- On hover, the front face rotates away to `-180deg` while fading out, and the back face rotates forward to `0deg` while fading in. This simultaneous manipulation creates a smoother, softer effect than a harsh, solid 3D card flip.
- Clean, structured aesthetic utilizing the `Inter` font, subtle drop shadows, and minimalist iconography.
- Fully responsive CSS Grid layout that automatically adapts columns based on the viewport width using `auto-fill`.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the spatial 3D rotation is entirely stripped, transforming the interaction into a safe, simple cross-fade between the two faces.

## Usage
Open `demo.html` in your browser. You will see a grid of service cards displaying icons and titles. Hover over any card to watch it gracefully rotate and fade into its secondary state, revealing detailed descriptions and links.

## Files
- `demo.html`: The HTML structure for the grid layout, detailing the necessary nested `card-front` and `card-back` containers.
- `style.css`: The styling, CSS Grid configurations, and the pure CSS `transform: rotateY()` and `perspective` logic driving the 3D flip mechanics.
