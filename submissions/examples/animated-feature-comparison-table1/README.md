# Animated Feature Comparison Table

A clean, modern, and fully responsive **Feature Comparison Table** perfect for SaaS pricing pages. This example demonstrates how to combine **EaseMotion CSS** for staggered row entrances, bouncy checkmark animations, and smooth hover effects to create a highly readable and engaging decision-making tool.

## 🚀 Features

- **Staggered Row Entrances**: Uses `ease-fade-in-up` combined with `ease-delay-*` classes so each feature row cascades in sequentially on page load.
- **Bouncy Icon Animations**: The check and cross icons use `ease-bounce-in` with staggered delays to pop in playfully as the row appears.
- **Highlighted "Pro" Column**: The recommended plan features a distinct background color and border to draw the user's eye.
- **Sticky Feature Column**: On mobile devices, the first column (feature names) sticks to the left while the user scrolls horizontally to see the plans.
- **Interactive Row Hover**: Rows subtly change background color on hover for better readability and tactile feedback.
- **Interactive CTA Buttons**: Uses `ease-hover-grow` on the bottom buttons for satisfying click targets.
- **Fully Responsive**: The table gracefully handles small screens by enabling horizontal scrolling while keeping the feature names visible.

## 📂 File Structure

```text
submissions/examples/animated-feature-comparison-table/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, sticky columns, and hover effects
└── README.md    # Documentation