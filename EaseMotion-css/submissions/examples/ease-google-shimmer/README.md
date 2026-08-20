## Google Skeleton Shimmer
Content placeholder loading component with Google-style shimmer animation. Creates a smooth loading experience with animated gradient overlays that mimic content structure.

## Features
- Smooth shimmer animation effect
- Multiple layout variants (list, card, grid)
- Avatar placeholders with shimmer
- Responsive grid layout
- Google-inspired dark theme
- Pure CSS, no JavaScript required
- Hover effects on skeleton items
- Customizable line widths for realism

## Usage
Add `.skeleton-item` elements inside `.skeleton-container`. Each item can contain:
- `.skeleton-avatar` for circular image placeholders
- `.skeleton-content` with multiple `.skeleton-line` elements
- Different widths for lines to simulate real content

### Variants
- **List View**: Standard horizontal layout with avatar and text
- **Card View**: Larger card-style placeholder with different content blocks
- **Grid View**: Multiple items in a responsive grid layout

## Customization
- Adjust `animation-duration` in `.skeleton-line::after` for speed
- Modify line widths using percentage values
- Change colors by updating background properties
- Adjust gap sizes in flex/grid containers

## Browser Support
Works in all modern browsers that support CSS animations and flexbox/grid.

## License
MIT