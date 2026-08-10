# Double Split Background Slide Button

A button hover animation where the background slides in symmetrically from both sides to meet in the middle.

## How to use

1. Include the styles in your CSS:
   ```css
   @import "style.css";
   ```

2. Add the markup to your HTML:
   ```html
   <button class="split-slide-btn">Get Started</button>
   ```

## Design Details
- **Dual Sliding Pseudo-Elements:** Relies on both `::before` (left) and `::after` (right) elements covering 50% width each.
- **Symmetric Scales:** Scales elements horizontally from their respective edges via `transform-origin` left/right mappings.
- **Smooth Transition Timing:** Uses a smooth `cubic-bezier(0.25, 1, 0.5, 1)` transition timing.
