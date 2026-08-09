# Pulse Animation

A smooth, scalable pulse animation for UI components.

## What does this do?

This submission adds a reusable pulse animation that creates a rhythmic scaling and fading effect on UI elements, drawing user attention without being disruptive.

## How is it used?

Apply the `pulse-btn`, `pulse-card`, `pulse-icon`, `pulse-notification`, or `pulse-badge` class to any element to trigger the animation. Custom durations and effects can be achieved by overriding the `--color-pulse` CSS variable or adjusting the `animation` property.

```html
<button class="pulse-btn">Pulse Button</button>
```

## Why is it useful?

Pulse animations are a common UX pattern for indicating live activity, pending states, or drawing attention to important elements. This implementation uses only `transform` and `box-shadow` for GPU-accelerated, jank-free performance. It follows EaseMotion's philosophy of providing composable, accessible, and performant animation utilities.

## Features

- Responsive grid layout for all screen sizes
- Five real-world UI component examples (button, card, icon, notification, badge)
- Reduced motion support via `prefers-reduced-motion`
- Self-contained — no external dependencies
- Focus-visible indicators for keyboard accessibility
