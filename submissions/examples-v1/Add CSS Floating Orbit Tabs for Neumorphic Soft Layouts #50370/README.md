# CSS Floating Orbit Tabs - Neumorphic Soft

A visually striking, pure CSS tab component utilizing a Neumorphic Soft aesthetic with smooth floating orbit transitions.

## Features
- **Neumorphic Soft Aesthetics**: Beautiful, soft-shadow driven UI that feels tactile and premium, utilizing drop shadows and inner shadows to create physical depth.
- **Floating Orbit Interaction**: The active tab indicator smoothly glides into place with a custom bouncy easing, while continuously floating vertically and featuring 360-degree orbiting satellite elements.
- **Pure CSS State Management**: Uses hidden radio buttons for state, ensuring no JavaScript is required for interactivity.
- **Fully Responsive**: Adapts tab widths, heights, and gaps gracefully on smaller screens through CSS variable calculations.
- **Keyboard Accessible**: Focusable native radio buttons provide seamless keyboard navigation and visual focus rings.

## Customization

You can easily tweak the component's appearance and behavior by modifying the standard CSS custom properties defined in `:root`.

```css
:root {
  /* Dimensions */
  --tab-width: 140px;      /* Width of each tab */
  --tab-height: 52px;      /* Height of each tab */
  --tab-gap: 16px;         /* Space between tabs */
  
  /* Color Palette */
  --bg-color: #e0e5ec;     /* Neumorphic base color */
  --text-active: #2b6cb0;  /* Active text color */
  --accent-primary: #4299e1; /* Color for primary orbit satellite */
  
  /* Interaction Timing & Physics */
  --orbit-speed-1: 4s;     /* Speed of the primary orbiting satellite */
  --float-speed: 3s;       /* Speed of the vertical floating animation */
  --transition-duration: 0.6s; /* Duration of the glide between tabs */
  --transition-easing: cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy float glide */
}
```

## Structure & Architecture
The component leverages nested `div`s inside the `.orbit-indicator` to isolate multiple `transform` animations without conflict:
- `.orbit-indicator`: Handles the horizontal CSS transition glide between tabs (`translateX`).
- `.orbit-floater`: Handles the continuous vertical CSS animation (`translateY`).
- `.satellite`: Handles the continuous 360-degree CSS orbit animation (`rotate`), centered via dynamic `transform-origin` calculations based on `var(--tab-height)`.
