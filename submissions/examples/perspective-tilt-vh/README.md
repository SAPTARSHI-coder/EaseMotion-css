# 3D Perspective Tilt Card

A pure-CSS 3D perspective card hover effect where the card tilts slightly along both the X and Y axes upon hover, generating interactive depth.

## How to use

1. Include the styles in your CSS:
   ```css
   @import "style.css";
   ```

2. Add the markup to your HTML:
   ```html
   <div class="tilt-container">
     <div class="tilt-card">
       <h3>3D Tilt Card</h3>
       <p>Hover over this card to see the perspective rotation in action.</p>
     </div>
   </div>
   ```

## Design Details
- **3D Space Rendering:** Employs `transform-style: preserve-3d` to keep child elements in a 3D context.
- **Depth Perspective:** Container creates a 3D canvas via `perspective: 1000px`, governing the severity of the tilt distortion.
