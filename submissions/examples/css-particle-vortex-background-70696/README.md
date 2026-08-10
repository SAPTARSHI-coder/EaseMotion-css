# CSS Particle Vortex Background

## Description
A visually stunning, pure CSS 3D particle vortex animated background. It creates an infinite spiraling array of particles radiating from the center, using `rotate3d` and dynamic trigonometric-like calculations to generate a vortex effect. 

## How to Use
1. Copy the HTML structure from `demo.html` (specifically the `.vortex-container` and its children).
2. Include the CSS from `style.css` in your stylesheet.
3. The component uses custom CSS properties (`--i`) on each particle to calculate its angle, radius, and color. Ensure that these inline styles are preserved for the math to work!

```html
<div class="vortex-container" aria-hidden="true">
    <div class="particle" style="--i: 1;"></div>
    <div class="particle" style="--i: 2;"></div>
    <div class="particle" style="--i: 3;"></div>
    <!-- Add as many particles as needed for density -->
</div>
```

## Why this fits EaseMotion CSS
This component embodies the animation-first, human-readable philosophy of EaseMotion CSS by creating complex visual behaviors (a spiraling 3D vortex) entirely through clever keyframes, standard transformations, and CSS math functions—eliminating the need for WebGL, Canvas, or Javascript. It serves as an excellent UI pattern for modern tech, gaming, or cyberpunk themed landing pages.
