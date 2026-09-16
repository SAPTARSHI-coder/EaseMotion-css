# Elastic Underline Expand Hover

A navigation menu item hover interaction that scales the bottom underline outward from the center with a custom elastic spring-like bounce animation.

## How to use

1. Include the styles in your CSS:
   ```css
   @import "style.css";
   ```

2. Add the markup to your HTML:
   ```html
   <a href="#" class="elastic-link">Dashboard</a>
   ```

## Design Details
- **Spring Transition:** Employs a custom Cubic Bezier curve (`cubic-bezier(0.68, -0.6, 0.32, 1.6)`) to simulate physical inertia and bounce during scaling.
- **Centering Effect:** Uses `transform-origin: center` to ensure the underline expands symmetrically from the middle.
