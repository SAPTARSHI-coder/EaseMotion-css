# Animated Gradient Border Button

A modern, high-performance button featuring a continuously animated, flowing gradient border. It creates a striking glowing effect while remaining 100% pure CSS with zero JavaScript dependencies.

## Features
- **Flowing Gradient Border:** Uses CSS pseudo-elements (`::before` and `::after`) to mask an animating gradient, creating a smooth border flow.
- **Interactive States:** Features a subtle lift, neon drop-shadow glow on hover, and a gradient "fill" animation on click (`:active`).
- **Hardware Accelerated:** Relies on `transform` and `filter` for buttery smooth 60fps animations.
- **Zero Dependencies:** Built entirely with standard CSS.
- **Accessibility First:** Fully respects the `prefers-reduced-motion` media query, stopping the border animation for users sensitive to motion.

## Usage
Apply the `.ease-btn` and `.ease-btn-glow` classes to any standard `<button>` element.

```html
<button class="ease-btn ease-btn-glow">
    <span>Submit</span>
</button>