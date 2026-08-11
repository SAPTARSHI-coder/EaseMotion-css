# CSS Cinematic Crop Hero (#70946)

Pure CSS hero section featuring automatic cinematic widescreen letterbox bar cropping on load, background image scale transitions, and synchronized typography reveals.

## Features
- **Pure CSS Widescreen Crop Physics:** Uses `::before` and `::after` pseudo-elements executing cubic-bezier timing curves to open top and bottom letterbox bars on render.
- **Ambient Background Motion:** Includes smooth slow scale-down background image dynamics.
- **Zero JavaScript Dependencies:** Built entirely with pure CSS variables, keyframe key-timing, and layer layering.
- **Accessible & Responsive:** Screen reader accessible semantics, mobile responsive crop ratios, and full `prefers-reduced-motion` compliance.

## Structure
- `style.css` - Keyframe crop animations, letterbox layering, typography stagger effects, and reduced motion fallbacks.
- `demo.html` - Interactive demo showcasing the cinematic hero banner.
