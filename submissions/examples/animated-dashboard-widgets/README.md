# Animated Dashboard Stats Widgets

A clean, modern, and fully responsive **Dashboard Stats Widgets Collection** perfect for admin panels and analytics pages. This example demonstrates how to combine **EaseMotion CSS** for staggered card entrances, continuous trend indicator pulsing, and smooth hover transitions to create engaging, data-rich components.

## 🚀 Features

- **Staggered Widget Entrances**: Uses `ease-fade-in-up` combined with `ease-delay-*` classes so each widget cascades in sequentially on page load.
- **Continuous Trend Pulsing**: The trend indicators (↑/↓) use `ease-pulse` with staggered delays to draw attention to performance changes.
- **Pure CSS Sparkline Charts**: Each widget includes a mini bar chart built entirely with CSS, with gradient colors matching the widget theme.
- **Interactive Hover States**: Uses `ease-hover-grow` on widgets for satisfying tactile feedback, with enhanced shadows and border transitions.
- **Color-Coded Icons**: Each widget has a distinct icon background color for quick visual identification.
- **Positive/Negative Trends**: Clear visual distinction between positive (green) and negative (red) performance indicators.
- **Fully Responsive**: The grid adapts from 4 columns to 2 columns to a single column based on screen size.

## 📂 File Structure

```text
submissions/examples/animated-dashboard-widgets/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, sparklines, and responsive behavior
└── README.md    # Documentation