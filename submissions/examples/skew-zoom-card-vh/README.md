# Cinematic Skew Zoom Card

A pure-CSS hover animation for image cards. On hover, the image scales and skews slightly within a masked frame, creating a parallax-like cinematic zoom effect.

## How to use

1. Include the styles in your CSS:
   ```css
   @import "style.css";
   ```

2. Add the markup to your HTML:
   ```html
   <div class="skew-zoom-card">
     <div class="card-image-wrap">
       <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" alt="Landscape">
     </div>
     <div class="card-body">
       <h3>Sunny Coast</h3>
       <p>Hover to see skew pan animation</p>
     </div>
   </div>
   ```

## Design Details
- **Masked Window Effect:** Restricts the scaling image within the boundary using `overflow: hidden` on the image wrapper.
- **Dynamic Perspective:** Combines `scale(1.12)`, `skewY(2deg)`, and `rotate(1deg)` to provide a rich multidimensional pan transition on hover.
