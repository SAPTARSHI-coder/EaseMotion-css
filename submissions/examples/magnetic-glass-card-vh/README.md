# Magnetic Glass Card Hover

A modern, glassmorphic card hover effect featuring a 3D-style lift, interactive backdrop-filter blurring, and an animated hover glow.

## How to use

1. Include the styles in your CSS file:
   ```css
   @import "style.css";
   ```

2. Add the markup to your HTML structure:
   ```html
   <div class="glass-card">
     <h3>Interactive Card</h3>
     <p>Hover over this card to experience the smooth magnetic lift and glassmorphism.</p>
   </div>
   ```

## Design Details
- **Responsive Blur:** Uses standard `backdrop-filter: blur(12px)` for premium background translucency.
- **Dynamic Elevation:** Smooth lift transition using a custom cubic bezier timing function (`cubic-bezier(0.25, 1, 0.5, 1)`).
- **Glow Effect:** Blends a drop-shadow with an indigo glow on hover.
