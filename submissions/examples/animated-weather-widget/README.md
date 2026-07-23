# Animated Weather Widget

A clean, modern, and fully responsive **Weather Widget Card** featuring continuous environmental animations and a 5-day forecast. This example demonstrates how to combine **EaseMotion CSS** for spinning suns, floating clouds, and staggered forecast entrances to create a lively, engaging UI component without using any images or SVGs.

## 🚀 Features

- **Pure CSS Weather Icons**: The sun and clouds are drawn entirely with CSS (no images or SVGs required), making them lightweight and scalable.
- **Continuous Environmental Animations**: The sun uses `ease-spin-slow` for a continuous rotation, while the clouds use `ease-float` with staggered delays for a realistic floating effect.
- **Staggered Detail Entrances**: The weather details (humidity, wind, UV) fade in sequentially using `ease-fade-in-up` and `ease-delay-*`.
- **Interactive Hover States**: Uses `ease-hover-grow` on detail items and forecast days for satisfying tactile feedback.
- **5-Day Forecast**: A clean horizontal list showing the upcoming weather with emoji icons.
- **Glassmorphism/Card Design**: Clean white card with soft shadows and rounded corners for a modern aesthetic.
- **Fully Responsive**: Adapts gracefully to mobile screens, stacking the main weather display and converting the details grid to a vertical list.

## 📂 File Structure

```text
submissions/examples/animated-weather-widget/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for CSS-drawn icons, animations, and responsive behavior
└── README.md    # Documentation