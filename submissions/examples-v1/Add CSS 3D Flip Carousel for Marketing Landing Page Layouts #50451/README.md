# 3D Flip Carousel (Marketing Landing Page)

A pure CSS animated carousel featuring a dramatic 3D Flip interaction transition, designed to capture attention and styled for high-converting Marketing Landing Pages.

## Features
- **Pure CSS State Matrix**: Fully functional state management without JavaScript utilizing visually hidden radio inputs.
- **Dramatic 3D Flip Interaction**: Utilizes `perspective` and a dramatic `120deg` `rotateY()` transformation to create a sweeping 3D card flip. Exiting cards swing open and scale down, revealing the incoming content with a smooth `cubic-bezier(0.23, 1, 0.32, 1)` easing curve that feels premium and deliberate.
- **Marketing Aesthetics**: Designed for high impact. Features bold typography (`Montserrat`), vibrant gradient sidebars, deep diffuse drop shadows, wide dash-style pagination dots, and a strong call-to-action button with a floating hover state.
- **Responsive & Accessible**: Keyboard navigable via standard `Tab` focus management. Flexbox layout gracefully collapses into a stacked mobile layout.

## Customization
Adjust the 3D flip angle, scale factor, and timing by tweaking the variables in `:root`:

```css
:root {
    --crsl-duration: 0.8s;
    /* Smooth, sweeping ease for marketing presentations */
    --crsl-easing: cubic-bezier(0.23, 1, 0.32, 1); 
    
    /* Flip Logic - Dramatic 120 degree swings */
    --crsl-rotate-past: -120deg;
    --crsl-rotate-future: 120deg;
    
    /* Scale down factor for inactive slides */
    --crsl-scale-inactive: 0.75;
}
```
