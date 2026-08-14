# Animated Bar Chart / Data Visualization

A clean, modern, and fully responsive **Bar Chart Component** with smooth growth animations and interactive hover states. This example demonstrates how to combine **EaseMotion CSS** for staggered chart entrances with custom CSS animations for bars growing from zero, creating an engaging data visualization experience.

## 🚀 Features

- **Smooth Bar Growth**: Bars animate from zero to their target height/width using CSS custom properties and keyframe animations.
- **Staggered Entrances**: Each bar fades in sequentially using `ease-fade-in-up` (vertical) or `ease-fade-in-left` (horizontal) with staggered delays.
- **Three Chart Types**: Vertical bars, horizontal bars, and grouped bars for different data visualization needs.
- **Interactive Hover States**: Bars change color and scale slightly on hover, with value tooltips appearing above vertical bars.
- **Highlight Bars**: Special styling for highlighted/current bars (e.g., current month in green).
- **Y-Axis Labels**: Vertical charts include a labeled Y-axis for scale reference.
- **Chart Legends**: Grouped charts include a color-coded legend for data series.
- **Stats Summary**: Bottom section displays key metrics with large, bold numbers.
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted sizing and single-column layout.

## 📂 File Structure

```text
submissions/examples/animated-bar-chart/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for chart layouts, bar animations, and responsive behavior
└── README.md    # Documentation