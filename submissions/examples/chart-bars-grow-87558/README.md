# Chart Bars Grow (#87558)

An interactive vertical bar chart component where individual data columns grow dynamically from zero height with springy overshoot physics and staggered entrance delays.

## Features
- **Spring Overshoot Keyframes:** Custom cubic-bezier spring physics simulation via `@keyframes easeBarGrowOvershoot`.
- **Staggered Delays:** Dynamic CSS custom properties (`--delay`) controlling cascading bar entry animations.
- **Interactive Tooltips & Accents:** Floating data tags and vibrant gradient pill tops.
- **Accessibility:** Fully supports `@media (prefers-reduced-motion: reduce)` by bypassing keyframe delays.

## Usage
Include `style.css` in your project and structure the markup using `.chart-viewport` with data bars utilizing `--bar-height` and `--delay`.