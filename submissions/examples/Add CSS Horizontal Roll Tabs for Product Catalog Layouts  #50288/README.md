# Ease Horizontal Roll Tabs for Product Catalog Layouts

A pure CSS animated Tabs component utilizing a smooth Horizontal Roll interaction transition, styled to complement Product Catalog interface aesthetics. This component provides a rich 3D cylinder-like transition while switching between tabs.

## Features

- **Pure CSS Transition**: Achieves complex 3D transitions strictly using CSS, utilizing the `:has()` selector and sibling combinators for state management.
- **Horizontal Roll**: A cylindrical 3D roll effect applies to the content panels, adding depth and a premium feel. 
- **Product Catalog Aesthetics**: Minimalist, clean product card layout with tailored UI components (badges, specs tables, and reviews).
- **Fully Responsive**: Adapts seamlessly from a split-pane desktop view to a stacked mobile view.
- **Keyboard Accessible**: Uses native radio buttons and visually hidden (`.sr-only`) patterns. Users can seamlessly tab through labels, operate with arrows, and observe focus outlines.
- **Custom Parameters**: Exposed CSS custom properties (variables) make it effortless to tweak the animation behavior.

## Customization

You can adjust the behavior of the horizontal roll by overriding the variables located in the `.ease-horizontal-roll-tabs` class:

```css
.ease-horizontal-roll-tabs {
    --roll-duration: 0.6s;
    --roll-easing: cubic-bezier(0.34, 1.15, 0.64, 1); /* Controls the slight bounce */
    --roll-angle: 90deg; /* Rotation angle for inactive panes */
    --roll-radius: 300px; /* Cylinder radius for 3D depth */
    --roll-perspective: 1500px; /* 3D perspective wrapper */
    --roll-scale-idle: 0.9; /* Scale down inactive panes */
}
```

## Structure
- `demo.html` - The showcase interface demonstrating the Tabs in a premium e-commerce context.
- `style.css` - The styles powering the Horizontal Roll effect, along with catalog styling variables.
