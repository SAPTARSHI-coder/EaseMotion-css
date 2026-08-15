# Animated Multi-Ring Progress Indicator

A visually striking, fully responsive **Multi-Ring Progress Indicator** (similar to Apple Watch activity rings) that displays multiple metrics in concentric animated circles. This example demonstrates how to combine **EaseMotion CSS** for staggered entrances with advanced CSS `conic-gradient` techniques for smooth ring growth animations.

## 🚀 Features

- **Concentric Ring Layout**: Three rings (outer, middle, inner) representing different metrics with decreasing sizes.
- **Smooth Ring Growth**: Each ring animates from zero to its target percentage using CSS `conic-gradient` with staggered delays.
- **Color-Coded Metrics**: Each ring has a distinct color (red for Move, green for Exercise, blue for Stand) with glowing effects.
- **Center Summary**: Displays overall progress percentage in the center of the rings.
- **Interactive Legend**: Clear visual mapping between ring colors and their corresponding metrics.
- **Stat Cards**: Bottom section shows detailed statistics with hover lift effects.
- **Staggered Entrances**: Uses `ease-zoom-in` for the main display and `ease-fade-in-up` for legend and stat cards.
- **Dark Theme**: Professional dark mode design with gradient background accents.

## 📂 File Structure

```text
submissions/examples/animated-multi-ring-progress/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for concentric rings, conic-gradient animations, and layout
└── README.md    # Documentation