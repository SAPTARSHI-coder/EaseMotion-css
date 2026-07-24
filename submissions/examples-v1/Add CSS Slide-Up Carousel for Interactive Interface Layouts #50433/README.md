# Slide-Up Carousel (Interactive Interface)

A pure CSS animated carousel featuring a highly tactile, gamified Slide-Up interaction transition, styled meticulously for playful Interactive Interfaces.

## Features
- **Pure CSS State Matrix**: Fully functional state management without JavaScript utilizing a hardcoded CSS directional sliding logic matrix via visually hidden radio inputs.
- **Slide-Up Spring Animation**: Utilizes an aggressive `cubic-bezier` spring easing curve. Incoming slides spring upwards (`translateY`) and scale up, while exiting slides slide out of the way vertically, giving the component an energetic, highly responsive feel.
- **Interactive Aesthetics**: Designed with bright, punchy primary colors (`#ff3366`, `#00d2ff`, `#7b61ff`), thick active borders, pulse animations upon activation (`@keyframes pulseRing`), and playful hover states on the buttons and cards.
- **Accessible & Scalable**: Fully keyboard navigable via standard `Tab` focus management on custom-styled, interactive pagination dots.

## Customization
Adjust the vertical transition distance, springiness, and scale factors by tweaking the variables in `:root`:

```css
:root {
    --crsl-duration: 0.55s;
    /* Springy easing for an interactive feel */
    --crsl-easing: cubic-bezier(0.34, 1.56, 0.64, 1); 
    
    /* Distance for the vertical slide-up effect */
    --crsl-slide-offset: 120px; 
    
    /* Scale down factor for inactive slides */
    --crsl-scale-inactive: 0.75; 
}
```
