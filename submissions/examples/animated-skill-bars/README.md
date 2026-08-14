# Animated Skill Bars

A clean, modern, and fully responsive **Skill/Progress Bars** component, perfect for developer portfolios and resumes. This example demonstrates how to combine **EaseMotion CSS** staggered entrance animations with custom CSS keyframes to create a smooth, cascading "filling" effect for the progress bars.

## 🚀 Features

- **Staggered Entrance Animations**: Uses `ease-fade-in-up` combined with `ease-delay-*` classes so each skill row slides in sequentially.
- **Smooth Fill Animations**: Custom CSS `@keyframes` animate the width of the bars from `0%` to their target percentage with a smooth easing curve.
- **Synchronized Timing**: The bar fill animations are delayed to perfectly match the EaseMotion container entrance delays.
- **Gradient Colors**: Each skill level features a unique, vibrant gradient color scheme.
- **Clean UI**: Housed in a soft-shadowed card with a modern, minimalist aesthetic.

## 📂 File Structure

```text
submissions/examples/animated-skill-bars/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, gradients, and fill keyframes
└── README.md    # Documentation