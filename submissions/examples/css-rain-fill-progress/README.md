# CSS Rain Fill Progress (#70935)

A pure CSS progress container that fills with an animated rainfall streak effect feeding a rising water level.

## Features
- **Pure CSS Rainfall Physics:** Uses standard `@keyframes` translate animations with staggered delays across multiple raindrop elements to simulate realistic falling rain.
- **Surface Ripple Motion:** Recreates continuous liquid surface motion with animated CSS gradient patterns.
- **Accessible ARIA Role:** Built with standard `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes.
- **Motion Preference Aware:** Automatically pauses rain and surface animations when `@media (prefers-reduced-motion: reduce)` is enabled.

## File Hierarchy
- `style.css` - Container layout, liquid fill levels, raindrop keyframes, and surface ripple animations.
- `demo.html` - Semantic progressbar container displaying the 65% rain fill demo state.
- `README.md` - Technical overview and component usage instructions.
