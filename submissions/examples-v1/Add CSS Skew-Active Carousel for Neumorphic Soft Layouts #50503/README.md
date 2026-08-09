# Skew-Active Carousel (Neumorphic Soft)

A pure CSS animated carousel featuring a smooth skew-active transition, styled beautifully to complement modern "Neumorphic" (Soft UI) interfaces.

## Features
- **Pure CSS State Engine**: Fully functional state management without JavaScript utilizing native, visually hidden radio inputs.
- **Skew-Active & Z-Axis Animation**: Inactive slides are slightly skewed (`-8deg`), scaled down, and physically "pressed" into the background using inset shadows. When they become active, they gracefully un-skew to `0deg`, scale up, and physically "extrude" from the canvas. This creates an incredibly tactile and satisfying transition.
- **Neumorphic Soft Design**: Features the signature soft clay aesthetic with carefully calculated double drop-shadows (light source from top-left casting white, shadow cast to bottom-right in cool gray). Incorporates highly rounded corners and gentle typography (Nunito) to complete the soft look.
- **Accessible Navigation**: Fully keyboard accessible out of the box with standard `Tab` focus management. 

## Customization
Tweak the transition timing, skew angles, or Neumorphic shadow depths by adjusting the CSS variables exposed in `:root`:

```css
:root {
    --crsl-duration: 0.8s;
    --crsl-easing: cubic-bezier(0.16, 1, 0.3, 1);
    
    --crsl-skew-inactive: -8deg;
    --crsl-scale-inactive: 0.88;
    
    --color-bg: #e0e5ec;
}
```
