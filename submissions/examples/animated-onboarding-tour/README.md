# Animated Onboarding Tour/Coach Marks

An interactive, fully responsive **Onboarding Tour Component** that guides users through key features with smooth spotlight effects and animated tooltips. This example demonstrates how to combine **EaseMotion CSS** for smooth step transitions, spotlight animations, and staggered tooltip entrances to create an engaging user guidance experience.

## 🚀 Features

- **Spotlight Effect**: Highlights specific UI elements with a smooth zoom-in animation using `ease-zoom-in`.
- **Animated Tooltips**: Each step's tooltip fades in smoothly using `ease-fade-in-up` with position-aware placement.
- **Multi-Step Navigation**: Includes Next, Previous, and Skip buttons for flexible tour control.
- **Progress Indicators**: Visual progress dots show current position in the tour.
- **Dynamic Positioning**: Tooltips automatically position themselves based on the target element (top, bottom, left, right).
- **Smooth Transitions**: All movements use cubic-bezier easing for natural, fluid animations.
- **Mock Dashboard Context**: Demonstrates the tour in a realistic dashboard interface.
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted tooltip sizing.

## 📂 File Structure

```text
submissions/examples/animated-onboarding-tour/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for spotlight, tooltips, and responsive behavior
└── README.md    # Documentation

🛠️ How to Use
Clone the EaseMotion CSS repository.
Navigate to this folder.
Open demo.html in your browser.
Click "Start Guided Tour" to begin the onboarding experience.
To use this in your own project, include the EaseMotion CSS CDN: