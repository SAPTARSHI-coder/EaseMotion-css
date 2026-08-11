# CSS Worm Progress Bar (#70831)

A pure CSS worm progress bar component where an animated inching worm crawls dynamically along a progress track using keyframe stretch and contraction dynamics.

## Features
- **Pure CSS Inching Animation:** Recreates realistic biological worm movement (stretch head -> contract tail) using standard `@keyframes` with `left`, `width`, and `transform` property sequencing.
- **Accessible ARIA Role:** Outfitted with standard `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes.
- **Responsive Track:** Scales naturally across viewports using percentage-based calculations.
- **Motion Preference Compliant:** Automatically replaces the crawl animation with a clean static progress bar when `@media (prefers-reduced-motion: reduce)` is detected.

## File Hierarchy
- `style.css` - Progress track layout, worm head/eye details, and crawling keyframe physics.
- `demo.html` - Accessible progressbar container markup showcasing live diagnostic state.
- `README.md` - Technical specification and architecture overview.
