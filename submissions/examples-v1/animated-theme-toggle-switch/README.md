# Animated Theme Toggle Switch

A beautiful, interactive **Dark/Light Mode Toggle Switch** that morphs a spinning sun into a cratered moon. This example demonstrates how to combine **EaseMotion CSS** for continuous sun ray rotation with advanced CSS transitions to create a seamless, delightful theme-switching experience.

## 🚀 Features

- **Sun to Moon Morphing**: The toggle knob smoothly slides and changes color, transitioning from a bright yellow sun to a pale gray moon.
- **Spinning Sun Rays**: Uses `ease-spin-slow` to create a continuous, infinite rotation for the sun rays, which gracefully fade and shrink when toggled to dark mode.
- **Appearing Moon Craters**: Three subtle craters fade in with a slight delay when the moon state is active.
- **Fading Stars**: Little stars appear in the night sky background of the toggle when dark mode is enabled.
- **Global Theme Transition**: The entire page background, text, and card colors smoothly transition using CSS variables and `data-theme` attributes.
- **Accessible**: Includes `aria-label` for screen readers and semantic `<label>` wrapping.
- **Fully Responsive**: Adapts gracefully to mobile screens.

## 📂 File Structure

```text
submissions/examples/animated-theme-toggle-switch/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for the toggle morphing, theme variables, and layout
└── README.md    # Documentation