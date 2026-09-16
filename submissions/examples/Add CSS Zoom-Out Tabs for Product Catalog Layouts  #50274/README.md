# CSS Zoom-Out Tabs for Product Catalog

A premium, pure CSS tabs component that leverages a spatial "Zoom-Out" interaction transition. This component is optimized for Product Catalogs, providing a cinematic, application-like experience when filtering or navigating categories on high-end E-commerce storefronts.

## Features

- **Spatial Zoom-Out Transition**: When switching tabs, the outgoing product grid scales down elegantly into the distance (`scale(0.94)`), while the incoming grid scales up to full size, generating a luxurious Z-axis depth effect perfect for displaying media.
- **Pure CSS State Logic**: Driven seamlessly by visually hidden radio buttons (`.sr-only`) and the modern `:has()` selector. No JavaScript is required, meaning filtering categories feels instant, and pages remain highly performant.
- **Product Catalog Aesthetics**: Designed with modern premium E-commerce in mind:
  - Clean, high-contrast typography (using the `Outfit` typeface).
  - Minimalist grid layouts with standard `aspect-ratio: 4/5` image containers.
  - Hardware-accelerated hover zooms (`transform: scale(1.06)`) on product photography to drive user engagement.
- **Fully Accessible**: Safely hides inputs using the `.sr-only` class to retain perfect keyboard navigation mapping. Supports crisp `:focus-visible` outlines and rigorously respects system `@media (prefers-reduced-motion: reduce)` settings out of the box.
- **Responsive Framework**: The product grid uses a responsive CSS Grid system, natively collapsing from a spacious 4-column layout down to 1-column on mobile viewports.

## Custom Parameters (CSS Variables)

Easily adjust the timing of the transition or core aesthetic metrics via CSS variables mapped to `.ease-zoom-out-tabs`:

```css
.ease-zoom-out-tabs {
    --zoom-duration: 0.45s; /* Smooth, slightly slow luxury ease */
    --zoom-easing: cubic-bezier(0.22, 1, 0.36, 1);
    --zoom-scale-out: 0.94; /* The depth scale factor */
    
    --brand-dark: #111111;
    --brand-light: #ffffff;
    --brand-gray: #f5f5f5;
    --brand-border: #e5e5e5;
}
```

## Structure
- `demo.html` - The markup representing a top-tier E-commerce category page featuring the tabbed Product Grid.
- `style.css` - Contains the logic for the precision zoom-out panel scaling, the responsive `grid-template-columns`, and the sliding pill indicator.
