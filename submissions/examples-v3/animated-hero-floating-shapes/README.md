# Animated Hero Section with Floating Shapes

A stunning, full-screen **Hero Section** featuring continuous background animations and staggered text entrance effects. This example demonstrates how to combine EaseMotion's continuous animation utilities with its entrance classes to create a modern, engaging landing page header.

## 🚀 Features

- **Continuous Background Animations**: Uses `ease-float`, `ease-spin-slow`, and `ease-pulse` to create a dynamic, living background.
- **Blurred Geometric Shapes**: Utilizes CSS `filter: blur()` and absolute positioning to create a modern "mesh gradient" or "aurora" effect.
- **Staggered Text Entrance**: The badge, heading, paragraph, and buttons fade in sequentially using `ease-fade-in-up` and `ease-delay-*`.
- **Glassmorphism UI Elements**: The badge and secondary button use `backdrop-filter: blur()` for a modern frosted glass look.
- **Fully Responsive**: Shapes scale down and blur adjustments are made for mobile devices to ensure performance and visual balance.

## 📂 File Structure

```text
submissions/examples/animated-hero-floating-shapes/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, shapes, and glassmorphism
└── README.md    # Documentation