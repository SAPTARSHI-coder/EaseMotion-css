# Animated Success Modal with Confetti

A delightful, fully responsive **Success/Confirmation Modal** designed to celebrate user achievements (like completed purchases or form submissions). This example demonstrates how to combine **EaseMotion CSS** for a bouncy icon entrance and continuous floating confetti effects to create a "gamified" UX moment without writing complex JavaScript animations.

## 🚀 Features

- **Bouncy Icon Entrance**: The success checkmark uses `ease-bounce-in` to playfully pop into view, drawing immediate attention.
- **Continuous Confetti Effect**: Uses `ease-float` and `ease-spin-slow` with staggered delays on multiple colorful pieces to create a lively, celebratory background.
- **Smooth Modal Zoom**: The card itself uses `ease-zoom-in` for a polished, modern entrance.
- **Staggered Text Reveal**: The title, message, and button fade in sequentially using `ease-fade-in-up` and `ease-delay-*`.
- **Interactive Button**: Uses `ease-hover-grow` for a satisfying click target.
- **Glassmorphism Overlay**: The background uses `backdrop-filter: blur()` for a premium feel.

## 📂 File Structure

```text
submissions/examples/animated-success-modal/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, confetti positioning, and styling
└── README.md    # Documentation