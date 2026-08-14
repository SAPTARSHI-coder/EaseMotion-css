# Magnetic Border Draw Hover

A pure-CSS button hover animation where a gradient border draws itself smoothly around the outline of a button.

## How to use

1. Include the styles in your CSS:
   ```css
   @import "style.css";
   ```

2. Add the markup to your HTML:
   ```html
   <button class="border-draw-btn">Hover Me</button>
   ```

## Design Details
- **CSS Houdini Properties:** Utilizes `@property` to define a custom `--border-angle` which allows smooth interpolation of angles during transitions/animations.
- **Conic Gradient Rotation:** Animates the conic gradient offset continuously on hover to create the moving outline sweep.
