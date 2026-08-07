# CSS Zoom-Out Tabs for SaaS Showcase

A highly polished, pure CSS tabs component utilizing a modern "Zoom-Out" interaction transition. This component adds a satisfying sense of spatial depth, mimicking the sleek animations often found in premium SaaS marketing sites and product showcases.

## Features

- **Spatial Zoom-Out Transition**: Uses a combined `scale(0.92)` and `translateY(15px)` effect to simulate depth. Outgoing panels shrink and push back into the distance, while incoming panels elegantly pop forward, all smoothed by an elastic `cubic-bezier`.
- **Pure CSS State Logic**: Driven entirely by visually hidden radio buttons (`.sr-only`) and the modern `:has()` selector, keeping the DOM semantic without requiring JavaScript.
- **SaaS Showcase Aesthetics**: Designed with premium dark-mode visuals in mind, featuring:
  - Inter typeface
  - Glassmorphic panels (`backdrop-filter: blur(20px)`)
  - Vibrant gradient abstract illustrations
  - Deep shadows and subtle semi-transparent borders
- **Fully Accessible**: Implements visually-hidden `.sr-only` class to retain full keyboard navigation. Includes clear `:focus-visible` dashed outlines and natively supports `@media (prefers-reduced-motion: reduce)` by bypassing transforms entirely.
- **Responsive Framework**: The grid naturally collapses from a side-by-side showcase into a stacked mobile layout.

## Custom Parameters (CSS Variables)

Adjust the timing, scales, and colors using these custom CSS properties scoped to `.ease-zoom-out-tabs`:

```css
.ease-zoom-out-tabs {
    --zoom-duration: 0.5s;
    --zoom-easing: cubic-bezier(0.16, 1, 0.3, 1);
    --zoom-scale: 0.92; /* The zoom-out target scale */
    
    --tab-bg: rgba(255, 255, 255, 0.05);
    --tab-border: rgba(255, 255, 255, 0.1);
    --tab-active-bg: rgba(255, 255, 255, 0.15);
    --accent-color: #6366f1; /* Primary brand accent */
}
```

## Structure
- `demo.html` - A fully fleshed-out SaaS landing page hero section showcasing the interactive component.
- `style.css` - Contains the logic for the depth scaling, glassmorphic typography tokens, grid styling, and accessibility fallbacks.
