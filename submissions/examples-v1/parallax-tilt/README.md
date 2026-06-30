# Pure CSS 3D Parallax Tilt Card

## What does this do?

An animation-first, zero-JavaScript 3D parallax card component that tilts dynamically and extrudes text layers outward in perspective space depending on the cursor's hover quadrant.

## How is it used?

1. Link the component stylesheet:
   `<link rel="stylesheet" href="style.css">`
2. Set up the markup structure with the 2x2 trigger grid placed _before_ the content card:

   ```html
   <div class="ease-tilt-container">
     <div class="tilt-grid-zone top-left"></div>
     <div class="tilt-grid-zone top-right"></div>
     <div class="tilt-grid-zone bottom-left"></div>
     <div class="tilt-grid-zone bottom-right"></div>

     <div class="ease-tilt-card">
       <span>Tagline</span>
       <h3>Title</h3>
       <p>Content...</p>
     </div>
   </div>
   ```

## Why is it useful?

- **Zero JS Dependency**: Eliminates mousemove event listeners and scroll thrashing by utilizing simple hover matrix mappings in CSS.
- **Silky Smooth**: Animations are computed via hardware-accelerated CSS perspective matrices (`rotateX`, `rotateY`, and `translateZ`), ensuring consistent 60FPS rendering.
- **Layered Parallax Depth**: Text items are extruded on the Z-axis, creating realistic depth shifting as the card tilts.

## Tech Stack

- HTML
- CSS (Pure CSS, no JS)

## Preview

Open `demo.html` directly in your browser to experience the 3D vector tilt.
