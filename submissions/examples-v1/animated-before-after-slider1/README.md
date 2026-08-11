# Animated Before/After Image Comparison Slider

A sleek, modern, and fully responsive **Before/After Comparison Slider** perfect for showcasing product transformations, design edits, photo enhancements, or AI improvements. This example demonstrates how to combine **EaseMotion CSS** for smooth label reveals, bouncy handle entrances, and pulsing directional arrows, paired with custom JavaScript for a buttery-smooth drag interaction.

## 🚀 Features

- **Smooth Drag Interaction**: Fully functional mouse and touch drag support to reveal the "After" layer.
- **Click-to-Jump**: Clicking anywhere on the slider instantly moves the handle to that position.
- **Staggered Label Reveals**: "Before" and "After" labels fade in from their respective sides using `ease-fade-in-left` and `ease-fade-in-right`.
- **Bouncy Handle Entrance**: The central drag handle pops into view using `ease-bounce-in`.
- **Pulsing Directional Arrows**: The arrows inside the handle use `ease-pulse` to subtly hint that the slider is draggable.
- **Hover Scale Effect**: The handle circle smoothly scales up when hovered for tactile feedback.
- **Glassmorphism Labels**: The labels feature a blurred backdrop for readability over any background.
- **Fully Responsive**: Adapts gracefully to mobile screens with touch support and adjusted sizing.

## 📂 File Structure

```text
submissions/examples/animated-before-after-slider/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for layer masking, handle styling, and responsive behavior
└── README.md    # Documentation