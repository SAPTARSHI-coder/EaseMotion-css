# CSS Radial Wipe Reveal (#70821)

A pure CSS container component that reveals underlying content using a smooth radial circular clip-path expansion animation.

## Features
- **Pure CSS Clip-Path Motion:** Utilizes modern `clip-path: circle(...)` keyframes to perform a clean radial reveal effect without JavaScript.
- **Accessible Region Wrapper:** Outfitted with standard `role="region"` and descriptive `aria-label` attributes.
- **Responsive Layout:** Automatically scales across viewports using percentage-based container geometries.
- **Reduced Motion Support:** Respects user preferences by instantly revealing content (`clip-path: circle(120%)`) when `@media (prefers-reduced-motion: reduce)` is enabled.

## File Hierarchy
- `style.css` - Card theme, layered reveal positioning, and clip-path keyframe animations.
- `demo.html` - Semantic card markup showcasing the animated radial wipe container.
- `README.md` - Technical specification and architecture overview.
