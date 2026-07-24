# CSS Slide-Up Carousel - Marketing Layout

A visually stunning, pure CSS vertical carousel designed for modern Marketing Landing Pages. It features bold typography, glowing abstract visuals, and a highly polished slide-up transition with depth scaling.

## Features
- **Marketing Aesthetics**: Designed for high conversions with bold typography (`Poppins`), high-contrast CTAs, and modern glowing blur-orbs that grab attention.
- **Vertical Slide-Up Interaction**: Replaces the standard horizontal scroll with a premium vertical slide-up transition.
- **Parallax Depth Scaling**: Slides subtly scale down and fade out when inactive, then scale up and fade in when active, creating a deep, cinematic transition.
- **Pure CSS State**: Interactive state is managed entirely through hidden radio buttons (`:checked` selector), ensuring zero JavaScript overhead.
- **Responsive Design**: Gracefully degrades from a side-by-side desktop layout to a stacked, touch-friendly mobile layout where the visual elements act as a dynamic background. Navigation dots also dynamically switch from vertical-right to horizontal-bottom.
- **Accessibility**: Natively focusable radio buttons allow full keyboard navigation (Tab/Arrows). Visual focus rings are dynamically applied to the navigation dots.

## Customization

You can easily adjust the animation physics, scaling, and dimensions by modifying standard CSS custom properties in `:root`.

```css
:root {
  /* Animation Physics */
  --transition-duration: 0.9s;
  --transition-easing: cubic-bezier(0.77, 0, 0.175, 1); /* Elegant exponential curve */
  --scale-inactive: 0.85; /* How much background slides shrink */
  --scale-active: 1;
  --opacity-inactive: 0;
  
  /* Layout Dimensions */
  --carousel-height: 560px;
  --carousel-border-radius: 32px;
}
```

## Architecture Notes
- **`.slides-wrapper`**: Uses `flex-direction: column`. This wrapper is translated vertically (`translateY(-100%)`) to move between slides.
- **`.slide`**: Each slide is forced to be exactly `100%` of the carousel container height using `flex: 0 0 100%`.
- **`.carousel-nav`**: Absolute positioned dots that respond to the `:checked` state of the hidden radio inputs to show active states and keyboard focus rings.
