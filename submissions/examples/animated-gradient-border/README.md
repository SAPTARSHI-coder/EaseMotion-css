# Animated Gradient Border using CSS `@property`

This submission introduces a glowing, animated gradient border component entirely driven by CSS, without any JavaScript.

## Features

- **CSS `@property` Magic**: By explicitly defining the `--em-gradient-angle` custom property using the new CSS `@property` rule, the browser can smoothly interpolate the angle in `@keyframes`.
- **Conic Gradient**: Uses `conic-gradient` to create a continuous, multi-color border.
- **Glowing Effect**: Uses a blurred pseudo-element behind the main content to create a neon glowing effect that spins along with the border.
- **Accessibility-first**: Uses `@media (prefers-reduced-motion: reduce)` to stop the spinning animation if the user prefers reduced motion, preventing vestibular discomfort.

## Usage

1. Include `style.css` in your project.
2. Apply the `.em-animated-border` class to any card or container.
3. Ensure the inner container uses `background-color` (inherited via `--em-bg-color`) to mask the center of the gradient, revealing only the border.
