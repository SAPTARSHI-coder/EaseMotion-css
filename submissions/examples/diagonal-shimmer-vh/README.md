# Diagonal Shimmer Sweep Button

A button hover animation where a bright, diagonal band of light sweeps across the button's face when hovered, providing a premium, interactive shine effect.

## How to use

1. Include the styles in your CSS:
   ```css
   @import "style.css";
   ```

2. Add the markup to your HTML:
   ```html
   <button class="shimmer-btn">Click Me</button>
   ```

## Design Details
- **Skewed Shimmer Overlay:** Uses a `skewX(-25deg)` skew transformation to turn a vertical gradient shine into a diagonal band.
- **Instant Snap-Back:** The left position resets instantly on mouse-leave (`transition: none` on baseline element) and sweeps smoothly across on hover (`transition: left 0.75s ease-in-out`).
