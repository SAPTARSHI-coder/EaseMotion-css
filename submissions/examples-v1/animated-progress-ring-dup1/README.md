# Animated Progress Ring/Circle

A clean, modern, and fully responsive **Progress Ring Component** perfect for displaying completion percentages, skill levels, or task progress. This example demonstrates how to combine **EaseMotion CSS** for staggered card entrances and continuous rotation effects with custom CSS `conic-gradient` for the circular progress animation.

## 🚀 Features

- **Staggered Card Entrances**: Uses `ease-fade-in-up` combined with `ease-delay-*` classes so each ring card cascades in sequentially on page load.
- **Continuous Rotation Effect**: A subtle rotating background gradient using `ease-spin-slow` adds visual interest behind each ring.
- **Circular Progress Animation**: Uses CSS `conic-gradient` to create smooth, animated circular progress indicators without JavaScript.
- **Color-Coded Progress**: Each ring has a distinct color (indigo, green, amber, pink) for easy visual differentiation.
- **Interactive Hover States**: Cards lift on hover with enhanced shadows for tactile feedback.
- **Responsive Grid Layout**: Adapts from 4 columns to 2 columns to a single column based on screen size.
- **Pure CSS Implementation**: No JavaScript required for the progress animation.

## 📂 File Structure

```text
submissions/examples/animated-progress-ring/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for ring layout, conic-gradient progress, and responsive behavior
└── README.md    # Documentation