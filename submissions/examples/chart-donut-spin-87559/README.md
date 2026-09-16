# Chart Donut Spin (#87559)

An animated, dependency-free SVG donut chart component featuring rotating segment reveals with smooth dash-offset fills and dynamic center readout stats.

## Features
- **Dynamic Segment Animations:** Hardware-accelerated SVG stroke animations using `stroke-dasharray` and `stroke-dashoffset` keyframe reveals.
- **Spinning Stagger:** Timed rotation offsets giving the visual effect of progressive multi-segment assembly.
- **Interactive Center Readout:** Metric readout updating live on segment hover.
- **Accessibility:** Includes `@media (prefers-reduced-motion: reduce)` support.

## Usage
Include `style.css` in your project and structure the SVG using `.donut-ring` and `.donut-segment` classes.