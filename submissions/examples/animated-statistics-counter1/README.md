# Animated Statistics Counter

A clean, modern, and fully responsive **Statistics Counter Component** with smooth number ticking animations. This example demonstrates how to combine **EaseMotion CSS** for staggered card entrances and continuous icon pulses with a custom JavaScript number counter that animates when the cards scroll into view.

## 🚀 Features

- **Staggered Card Entrances**: Each stat card fades in sequentially using `ease-fade-in-up` and `ease-delay-*` for a cascading load effect.
- **Number Ticking Animation**: Numbers animate from 0 to their target values with a smooth easing function when they come into view (using Intersection Observer).
- **Continuous Icon Pulses**: Icons use `ease-pulse` with staggered delays to draw attention and create visual rhythm.
- **Interactive Hover States**: Cards lift on hover with enhanced shadows and accent borders.
- **Supports Decimals**: Can display decimal numbers (e.g., 99.9%) with proper formatting.
- **Number Formatting**: Automatically adds commas for thousands (e.g., 50,000).
- **Responsive Grid Layout**: Adapts from 4 columns to 2 columns to a single column based on screen size.
- **Call-to-Action Section**: Includes a gradient CTA section below the stats.

## 📂 File Structure

```text
submissions/examples/animated-statistics-counter/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for layout, hover effects, and responsive behavior
└── README.md    # Documentation