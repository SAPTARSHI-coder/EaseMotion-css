# Glowing Particle Ring Loader

A loading animation that looks like a continuous ring of glowing, trailing particles.

## Preview

Open `demo.html` in your browser to see the neon green particle ring spinning continuously.

## Implementation Details

- **Single Element Loader:** The entire loading ring is created using just one single `<div>` element.
- **Multiple Box-Shadows:** By using a tiny `10x10px` transparent div as the center point, we cast multiple `box-shadow`s at specific X and Y coordinates (calculated using sine/cosine for a 50px radius).
- **Trailing Effect:** Each successive box-shadow has a progressively larger negative `spread-radius` (which makes the particle smaller) and a lower opacity (which makes it fade out), creating a perfect comet-like trail.
- **Animation:** The parent transparent element is continuously rotated using `@keyframes`, making all the shadow-particles spin together as a cohesive ring.
- **Glow Filter:** A `drop-shadow` filter is applied to the whole element to give the particles a soft, neon-like glow.
