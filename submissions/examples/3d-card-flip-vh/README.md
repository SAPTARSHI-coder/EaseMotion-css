# 3D Rotating Card Flip Animation

A pure-CSS 3D card flip animation. When hovered, the card rotates 180 degrees along the Y-axis with perspective depth, hiding the front face and revealing the back face of the card.

## How to use

1. Include the styles in your CSS:
   ```css
   @import "style.css";
   ```

2. Add the markup to your HTML:
   ```html
   <div class="flip-card">
     <div class="flip-card-inner">
       <!-- Front Face -->
       <div class="flip-card-front">
         <h3>Hover Me</h3>
         <p>Interactive 3D Preview</p>
       </div>
       <!-- Back Face -->
       <div class="flip-card-back">
         <h3>Secret Revealed!</h3>
         <p>This is the back face of the card.</p>
       </div>
     </div>
   </div>
   ```

## Design Details
- **3D Space Preserving:** Uses `transform-style: preserve-3d` to keep child elements aligned in the 3D plane during rotation.
- **Card-face Masking:** Uses `backface-visibility: hidden` to make sure the face currently facing away from the screen is completely invisible, avoiding overlapping text artifacts.
