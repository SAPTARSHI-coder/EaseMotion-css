# CSS Floating Orbit Tabs - SaaS Showcase

A sleek, pure CSS tab component utilizing a modern SaaS Showcase aesthetic with glassmorphism, deep backgrounds, vibrant gradients, and smooth floating orbit transitions.

## Features
- **SaaS Showcase Aesthetics**: Premium, dark-mode glassmorphic UI featuring blur filters (`backdrop-filter`), vibrant violet-to-blue gradients, and high-contrast typography typical of modern software landing pages.
- **Floating Orbit Interaction**: The active tab indicator smoothly glides into place with a snappy spring physics bezier, while concurrently floating vertically and accompanied by glowing 360-degree orbiting satellites.
- **Pure CSS State Management**: Uses hidden radio buttons for interactive state management without relying on JavaScript.
- **Fully Responsive**: Component sizes (tab widths, gaps) intelligently scale down on smaller screens via CSS variables and `calc()`.
- **Keyboard Accessible**: Focusable native radio buttons ensure perfect keyboard navigation and screen reader support, complete with custom focus rings.

## Customization

Easily adjust styling and interaction physics by modifying standard CSS custom properties in the `:root` pseudo-class.

```css
:root {
  /* Dimensions */
  --tab-width: 140px;      /* Width of each tab */
  --tab-height: 48px;      /* Height of each tab */
  --tab-gap: 8px;          /* Space between tabs */
  
  /* Vibrant SaaS Palette */
  --gradient-start: #8b5cf6; /* Violet */
  --gradient-end: #3b82f6;   /* Blue */
  
  /* Interaction Timing & Physics */
  --orbit-speed-1: 3s;     /* Speed of the primary orbiting satellite */
  --float-speed: 3.5s;     /* Speed of the vertical floating animation */
  --transition-duration: 0.5s; 
  --transition-easing: cubic-bezier(0.25, 1.2, 0.5, 1); /* Snappy bounce glide */
}
```

## Architecture
The component prevents CSS `transform` conflicts by splitting animations across nested `div`s:
- `.orbit-indicator`: Handles horizontal (`translateX`) transitions between tabs.
- `.orbit-floater`: Handles continuous vertical (`translateY`) floating.
- `.satellite`: Handles 360-degree (`rotate`) orbiting animations, dynamically centered using `transform-origin` formulas based on tab dimensions.
