# Animated Dark Mode Toggle

A beautiful, fully responsive **Theme Switcher** that smoothly transitions between light and dark modes. This example demonstrates how to combine **EaseMotion CSS** for page load and continuous background animations with pure CSS state transitions to create a seamless, JavaScript-free theme toggle.

## 🚀 Features

- **Smooth Color Transitions**: The background, card, and text colors transition smoothly over 0.6 seconds when toggled.
- **Animated Toggle Knob**: The sun and moon icons inside the toggle knob smoothly rotate and fade as the switch slides left or right.
- **Twinkling Background Stars**: Uses `ease-pulse` with staggered delays (`ease-delay-*`) to create a realistic starry night effect that fades in only in dark mode.
- **Staggered Page Load**: Uses `ease-fade-in-down` and `ease-zoom-in` to make the header and card pop in beautifully on initial load.
- **Zero JavaScript**: The entire theme switching mechanism is built using the CSS checkbox hack and sibling selectors.
- **Interactive Button**: Uses `ease-hover-grow` for a subtle, satisfying interaction on the call-to-action button.

## 📂 File Structure

```text
submissions/examples/animated-dark-mode-toggle/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for theme transitions, toggle logic, and stars
└── README.md    # Documentation