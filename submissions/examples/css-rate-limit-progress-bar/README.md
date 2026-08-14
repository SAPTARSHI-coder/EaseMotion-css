# CSS Rate Limit Progress Bar (#70795)

A pure CSS progress bar designed specifically for API rate limit tracking, featuring metric labels, quota counters, and gradient fill status styling.

## Features
- **Quota Metrics Layout:** Integrates clear numeric counters and status indicators alongside the progress track.
- **Accessible ARIA Attributes:** Fully equipped with standard `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and descriptive labels.
- **Responsive Geometry:** Scales cleanly across arbitrary screen sizes using flexible width containers.
- **Reduced Motion Support:** Respects user preferences by removing fill transition animations when `@media (prefers-reduced-motion: reduce)` is active.

## File Hierarchy
- `style.css` - Card layout, typography, quota metric alignment, and progress fill gradients.
- `demo.html` - Semantic progressbar card markup demonstrating an API developer tier status.
- `README.md` - Technical specification and architecture summary.
