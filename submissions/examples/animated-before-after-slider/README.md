# Animated Before/After Image Comparison Slider

A visually striking, fully responsive **Before/After Comparison Slider** perfect for showcasing transformations, design changes, or photo edits. This example demonstrates how to combine **EaseMotion CSS** for smooth handle animations, label transitions, and interactive hover effects to create an engaging comparison experience.

## 🚀 Features

- **Interactive Slider Handle**: Draggable handle with smooth movement using CSS transitions and JavaScript.
- **Clip-Path Animation**: The after image uses `clip-path: inset()` to smoothly reveal/hide based on slider position.
- **Bouncy Handle Entrance**: The slider handle uses `ease-bounce-in` for a playful entrance effect.
- **Animated Labels**: "Before" and "After" labels fade in from opposite sides using `ease-fade-in-left` and `ease-fade-in-right`.
- **Hover-to-Reveal Mini Cards**: Smaller comparison cards in the gallery automatically reveal the "after" state on hover.
- **Touch Support**: Fully functional on mobile devices with touch event handling.
- **Click-to-Move**: Click anywhere on the comparison area to jump the slider to that position.
- **Responsive Design**: Adapts gracefully to mobile screens with adjusted sizing.

## 📂 File Structure

```text
submissions/examples/animated-before-after-slider/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for slider, clip-path animations, and responsive behavior
└── README.md    # Documentation