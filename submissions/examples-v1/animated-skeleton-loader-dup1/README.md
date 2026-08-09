# Animated Skeleton Loading UI

A clean, modern, and fully responsive **Skeleton Loading Component** that improves perceived performance while data is fetching. This example demonstrates how to combine **EaseMotion CSS** for staggered skeleton block entrances and continuous pulsing effects with a smooth crossfade transition to the actual loaded content.

## 🚀 Features

- **Staggered Skeleton Entrances**: Each skeleton block fades in sequentially using `ease-pulse` and `ease-delay-*` to create a realistic, cascading load effect.
- **Custom Shimmer Effect**: A CSS gradient overlay sweeps across the skeleton blocks continuously to simulate a loading shimmer.
- **Smooth Crossfade Transition**: The skeleton state smoothly fades out while the loaded content fades in, preventing jarring layout shifts.
- **Interactive Reload Button**: Click the "Simulate Reload" button to see the loading state and transition multiple times.
- **Realistic Layout**: The skeleton blocks perfectly match the dimensions and layout of the actual loaded content (avatar, title, image, text lines).
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted image heights and padding.

## 📂 File Structure

```text
submissions/examples/animated-skeleton-loader/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for skeleton layout, shimmer effect, and transitions
└── README.md    # Documentation