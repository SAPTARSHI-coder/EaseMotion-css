# Animated Pie Chart / Donut Chart

A clean, modern, and fully responsive **Pie Chart / Donut Chart Component** with smooth arc drawing animations and interactive hover states. This example demonstrates how to combine **EaseMotion CSS** for staggered segment entrances with custom CSS animations for smooth arc drawing effects, creating an engaging data visualization experience.

## 🚀 Features

- **Smooth Arc Drawing**: Segments animate from zero to their target percentage using SVG stroke-dasharray and stroke-dashoffset animations.
- **Staggered Entrances**: Each segment fades in sequentially using `ease-fade-in` with staggered delays for a cascading load effect.
- **Two Chart Types**: Donut chart (with center label) and pie chart (full radius) for different visualization needs.
- **Interactive Hover States**: Segments expand slightly and brighten on hover for tactile feedback.
- **Animated Legend**: Legend items fade in from the left with staggered delays and highlight on hover.
- **Center Label**: Donut chart displays a total value in the center for quick reference.
- **Color-Coded Segments**: Five distinct colors for easy visual differentiation.
- **Stats Summary**: Bottom section displays key metrics with large, bold numbers.
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted sizing and single-column layout.

## 📂 File Structure

```text
submissions/examples/animated-pie-chart/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for chart layouts, arc animations, and responsive behavior
└── README.md    # Documentation