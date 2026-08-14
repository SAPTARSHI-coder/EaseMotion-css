# Animated Weather Card

A beautiful, modern, and fully responsive **Weather Card Widget** featuring continuous animations. This example demonstrates how to combine **EaseMotion CSS** continuous utilities (spinning sun, floating clouds) with staggered entrance effects to create a lively, engaging weather display without writing custom JavaScript.

## 🚀 Features

- **Continuous Sun Rotation**: Uses `ease-spin-slow` to create a smooth, infinite spinning effect for the sun and its rays.
- **Floating Clouds**: Uses `ease-float` with staggered delays to create a realistic, drifting cloud effect.
- **Staggered Detail Entrances**: The location, temperature, and weather details fade in sequentially using `ease-fade-in-up` and `ease-delay-*`.
- **Modern Glassmorphism Design**: Features a frosted glass card with a vibrant gradient background.
- **Interactive Hover States**: Detail items subtly change background color on hover for tactile feedback.
- **Pure CSS Clouds & Sun**: The weather icons are built entirely with CSS shapes (no images or SVGs required).
- **Fully Responsive**: Adapts gracefully to mobile screens with a single-column detail layout.

## 📂 File Structure

```text
submissions/examples/animated-weather-card/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, sun rays, clouds, and responsive behavior
└── README.md    # Documentation