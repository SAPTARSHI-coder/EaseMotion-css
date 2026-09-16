# Sci-Fi Target Lock Hover Button

A pure-CSS button hover animation where a circular dashed radar crosshair sweeps in, rotates 90 degrees, and scales down to lock onto the center of the button.

## How to use

1. Include the styles in your CSS:
   ```css
   @import "style.css";
   ```

2. Add the markup to your HTML:
   ```html
   <button class="target-btn">
     <span class="target-crosshair"></span>
     System Diagnostics
   </button>
   ```

## Design Details
- **Lock-On Scaling:** Starts scaled up at `scale(2.2)` and transition-shrinks down to `scale(1)` on hover for a focus indicator effect.
- **Rotation Sweep:** Animates a `rotate(90deg)` transition simultaneously to make the crosshair spin into position.
- **Dashed Radar Effect:** Built using native dashed borders on circular shapes (`border: 2px dashed #ef4444`, `border-radius: 50%`).
