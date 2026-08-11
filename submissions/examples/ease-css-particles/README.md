# Generative SCSS Particle Network

The classic "connected particle web" background generated entirely via CSS without any JavaScript physics engines. 

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **Generative SCSS Loop**: The background consists of 100 individual `.particle` elements. Using a Python script simulating an SCSS generative loop, each particle is assigned a unique `left`, `top`, animation duration, delay, and `translate3d` path.
  - **The Alpha Threshold Matrix (Gooey Effect)**: The connections between the particles are simulated without canvas lines. By applying an SVG `<feGaussianBlur>` and `<feColorMatrix>` filter directly to the container `.particle-network`, the edges of overlapping particles blur together and mathematically snap into geometric lines/connections as they drift past each other, creating the illusion of a connected web.
  - **GPU Accelerated**: The heavy lifting of the animation uses `translate3d` and `scale`, which are composited entirely on the GPU, avoiding main-thread JS battery drain.
- Fully accessible semantic structure. The container uses `role="img"` and `aria-label` to provide context to screen readers, treating the entire animation as a single decorative image. 

## Usage
Open `demo.html` in your browser to view the particle network.

## Files
- `demo.html`: The HTML structure containing the 100 particle divs and the inline SVG gooey filter definition.
- `style.css` / `style.scss`: The styling and the massive block of generative `@keyframes` animations.
