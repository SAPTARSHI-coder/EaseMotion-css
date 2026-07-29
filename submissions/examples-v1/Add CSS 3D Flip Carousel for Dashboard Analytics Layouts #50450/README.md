# 3D Flip Carousel (Dashboard Analytics)

A pure CSS animated carousel featuring a stunning 3D Flip interaction transition, tailored for sleek Dashboard Analytics layouts.

## Features
- **Pure CSS State Matrix**: Fully functional state management without JavaScript utilizing visually hidden radio inputs.
- **3D Flip Interaction**: Utilizes `perspective`, `transform-style: preserve-3d`, and `rotateY()` to create a hardware-accelerated 3D card flip. Exiting cards flip away by 90 degrees into the Z-axis, while incoming cards flip into focus, providing a highly tactile "dashboard widget switching" experience.
- **Dashboard Aesthetics**: Designed for modern data-rich environments. Features a deep dark mode palette, monospace fonts (`JetBrains Mono`) for metrics, and pure CSS/SVG structural charts (Bar, Line, Donut) that even trigger their own entrance animations when the slide becomes active.
- **Responsive & Accessible**: Keyboard navigable via standard `Tab` focus management. Includes a high-contrast focus ring for accessibility.

## Customization
Adjust the 3D flip angle, depth, and timing by tweaking the variables in `:root`:

```css
:root {
    --crsl-duration: 0.8s;
    /* Bouncy back easing for a tactile 3D flip */
    --crsl-easing: cubic-bezier(0.175, 0.885, 0.32, 1.275); 
    
    /* Angle of rotation for inactive slides */
    --crsl-rotate-past: -90deg;
    --crsl-rotate-future: 90deg;
    
    /* Distance pushed into the Z-axis during flip */
    --crsl-z-depth: 100px;
}
```
