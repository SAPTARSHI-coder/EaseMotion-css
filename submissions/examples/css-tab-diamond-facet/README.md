# CSS Tab: Diamond Facet Edge Variation

A smooth, hardware-accelerated pure CSS segmented tab control featuring diamond-cut facet edges.

## Design Pattern

- **Diamond Facets**: Engineered using CSS `clip-path: polygon()` to achieve angular diamond-edge cuts without complex SVGs.
- **Pure CSS State**: Controls tab toggling natively through CSS `:checked` pseudo-selectors.
- **Performance**: Hardware-accelerated transitions (`transform`, `filter`) ensure smooth 60fps operation.

## Accessibility & Compatibility

- **Dark Mode Ready**: Styled with high-contrast color palette for dark interfaces.
- **Keyboard Friendly**: Navigable using radio keyboard controls with visible `:focus-visible` ring indicators.

## Setup

1. Copy `demo.html` markup into your layout.
2. Link `style.css` to enable diamond facet styling.