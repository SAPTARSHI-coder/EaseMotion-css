# CSS Sprite Sheet Animation using `steps()`

This submission demonstrates how to animate a frame-by-frame sprite sheet purely using CSS transitions and the `steps()` timing function.

## Features

- **Frame-by-Frame Animation**: Unlike standard `linear` or `ease` transitions that smoothly interpolate values, the `steps()` timing function jumps instantly between values. This is perfect for 2D character animations, loading spinners, or complex icon morphing where you want to show distinct frames sequentially.
- **Hover Triggered**: The animation only plays while the user hovers over the element, conserving CPU resources when idle.
- **Accessibility**: Automatically disables the animation for users who prefer reduced motion.

## Usage

1. Include `style.css` in your project.
2. Apply the `.em-sprite-anim` class to an element.
3. Provide your own sprite sheet image via `background-image` and update the `--em-sprite-frames` variable to match the number of frames in your image.
4. The CSS will automatically calculate the correct `background-size` and step intervals.
