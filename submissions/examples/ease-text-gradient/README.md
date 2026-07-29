# Flowing Animated Gradient Text (`.ease-text-gradient`)

## Description
This submission fulfills Issue #57089. It introduces a highly requested modern web design utility class that applies an animated, flowing color gradient to typography.

By utilizing `-webkit-background-clip: text` and animating the `background-position`, this component creates a premium, cinematic feel for hero sections and headers without relying on any JavaScript or heavy canvas rendering.

## Features
- **Zero JavaScript:** Fully powered by CSS `@keyframes`.
- **Seamless Looping:** The gradient variants are carefully designed so the start and end colors match, resulting in a perfect, continuous infinite loop animation.
- **Pre-configured Variants:** Includes `.ease-text-gradient-sunset`, `.ease-text-gradient-ocean`, and `.ease-text-gradient-cyber` out of the box.
- **Accessible:** Respects the `prefers-reduced-motion` media query by locking the gradient to its first frame and stopping the animation entirely for users who prefer reduced motion.

## Files Included
- `demo.html`: A presentation of the three included gradient variants.
- `style.css`: The component CSS, ready to be integrated into the core framework.
- `README.md`: This documentation.