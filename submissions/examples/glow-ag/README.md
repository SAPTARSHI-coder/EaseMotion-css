# Glow Animations

This example demonstrates how to implement modern, lightweight glow animations on UI components using the EaseMotion CSS library. Glows are excellent for drawing attention to primary actions, indicating active states, or adding a polished aesthetic to dark-mode interfaces.

## 🌟 Feature Overview

Glows can be achieved using various CSS properties depending on the use case. This submission includes utilities utilizing `box-shadow`, `text-shadow`, and `filter: drop-shadow()`:

*   `.ease-glow-pulse`: A continuous breathing glow effect. Ideal for primary buttons or active notification dots.
*   `.ease-glow-hover`: An interactive fade-in glow applied when the user hovers over an element (e.g., a card or feature highlight). Includes a subtle upward transform.
*   `.ease-text-glow`: Uses `text-shadow` to create an aura around typography or SVG icon paths.
*   `.ease-filter-glow`: Uses `filter: drop-shadow()`. Unlike `box-shadow`, this traces the actual alpha-channel shape of the element, making it perfect for complex SVGs, transparent PNGs, or non-rectangular shapes.
*   `.ease-glow-inner`: Uses an inset box-shadow to create a pressed or internally illuminated state, great for badges or active navigation tabs.

## 🚀 Installation Instructions

1.  Copy the CSS rules from `style.css` into your project's main stylesheet.
2.  Alternatively, link the `style.css` file directly in your HTML `<head>`:

```html
<link rel="stylesheet" href="path/to/glow-ag/style.css">
```

## 💻 Usage Examples

### Continuous Pulse on a Button
```html
<button class="btn-primary ease-glow-pulse">Active State</button>
```

### Hover Glow on a Card
```html
<div class="card ease-glow-hover">
  <h3>Interactive Element</h3>
</div>
```

### Glowing Icon
```html
<i class="icon ease-text-glow">★</i>
```

## 🛠️ Customization Options

You can easily adjust the colors, intensity, and speed of the glow animations:
*   **Colors**: Change the `rgba(...)` values inside the `box-shadow` or `filter` properties. 
*   **Speed**: Modify the animation duration (e.g., `2s` in `animation: easeGlowPulse 2s ...`).
*   **Intensity**: Increase the blur radius (e.g., changing `0 0 10px` to `0 0 30px`).

## ⚡ Performance and Accessibility

- **Performance**: Animations are optimized with `will-change: box-shadow` and `will-change: filter` where continuous. `translateZ(0)` is used to force hardware acceleration and prevent jagged edges during transitions.
- **Accessibility**: This implementation natively respects the `prefers-reduced-motion` media query. If a user has configured their system to reduce motion, the continuous pulse animations are halted. Instead of completely removing the glow (which might remove necessary context indicating an active state), the CSS falls back to a static, non-animated glow.
