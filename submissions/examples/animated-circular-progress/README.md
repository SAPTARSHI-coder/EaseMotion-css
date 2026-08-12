# Animated Circular Progress / Skill Ring

A clean, modern, and fully responsive **Circular Progress Component** perfect for dashboards, fitness apps, and skill tracking. This example demonstrates how to combine **EaseMotion CSS** for staggered card entrances and text reveals with custom SVG animations for smooth, delayed ring drawing effects.

## 🚀 Features

- **Smooth SVG Ring Drawing**: The progress ring animates from 0% to the target percentage using CSS `stroke-dashoffset` transitions.
- **Staggered Drawing Delays**: Each ring's animation is delayed using a custom CSS variable (`--delay`), creating a beautiful cascading draw effect.
- **Staggered Card Entrances**: The cards zoom in sequentially using `ease-zoom-in` and `ease-delay-*`.
- **Staggered Text Reveals**: The percentage and skill name fade in smoothly after the ring starts drawing using `ease-fade-in-up`.
- **Color-Coded Skills**: Each skill has a distinct color (Indigo, Emerald, Amber, Pink) for easy visual differentiation.
- **Interactive Hover States**: Cards lift slightly with enhanced shadows when hovered.
- **Fully Responsive**: Adapts from a 4-column grid to 2 columns, and finally to a single column on mobile devices.

## 📂 File Structure

```text
submissions/examples/animated-circular-progress/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for SVG ring animations, layout, and responsive behavior
└── README.md    # Documentation