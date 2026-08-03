# Animated Pie/Donut Chart Submission

## 1. What does this do?
It provides beautiful, animated pie and donut charts built with pure CSS `conic-gradient`. Perfect for dashboards, analytics pages, and data visualization. Includes 4 example charts with legends and smooth entrance animations.

## 2. How is it used?
Add a `.pie-chart` or `.donut-chart` div with `data-values` (comma-separated percentages) and `data-colors` (comma-separated hex colors). JavaScript calculates the conic-gradient and applies it. Charts animate on scroll using Intersection Observer.

## 3. Why is it useful?
- Essential component for dashboards and data visualization
- Pure CSS implementation using conic-gradient (no heavy libraries)
- Smooth entrance animations with scale and rotation
- Both pie and donut chart variants
- Interactive legends with hover effects
- Customizable via data attributes (values and colors)
- Scroll-triggered animations using Intersection Observer
- Fully responsive design for all devices
- Includes `prefers-reduced-motion` support for accessibility
- Easy to add more charts by duplicating the structure
- Maintainer can easily standardize this as `.ease-chart-[YOUR_INITIALS]` in the core library.