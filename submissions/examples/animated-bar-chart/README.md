# Animated Bar Chart

A clean, modern, and fully responsive **Vertical Bar Chart** that visualizes data with growing bars and staggered entrances. This example demonstrates how to combine **EaseMotion CSS** for label and grid animations with custom CSS keyframes to create smooth, dynamic data visualization on page load.

## 🚀 Features

- **Growing Bar Animation**: Bars use `transform: scaleY()` with `transform-origin: bottom` to grow smoothly from the baseline up.
- **Staggered Delays**: Each bar grows sequentially with increasing delays, creating a wave-like effect across the chart.
- **Staggered Label Entrances**: Y-axis and X-axis labels fade in using `ease-fade-in-left` and `ease-fade-in-up` with synchronized delays.
- **Interactive Tooltips**: Hovering over a bar reveals the exact value in a smooth tooltip using pure CSS.
- **Hover Highlighting**: Bars brighten and change gradient color on hover for tactile feedback.
- **Responsive Layout**: The chart adapts to smaller screens by adjusting font sizes and bar widths.

## 📂 File Structure

```text
submissions/examples/animated-bar-chart/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, bar growth keyframes, and tooltips
└── README.md    # Documentation