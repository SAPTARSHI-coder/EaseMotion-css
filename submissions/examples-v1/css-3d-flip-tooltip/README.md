# CSS 3D Flip Tooltip (E-Commerce Checkout Layouts)

A pure CSS, hardware-accelerated 3D flip tooltip styled specifically for premium e-commerce checkout environments. It features fluid movement, responsive positioning safeguards, and comprehensive keyboard accessibility without a single line of JavaScript.

## Features
- **Smooth 3D Perspective:** Combines `perspective`, `rotateX`, and `backface-visibility` to deliver a physics-based flip interaction.
- **Checkout Ready:** Clean UI context tailored for fields requiring guidance like CVV numbers, shipping rules, or processing security info.
- **Zero-JS Accessibility:** Fully keyboard-interactable utilizing sequential focus trapping over `:focus-within`.

## Custom Properties
Configure or customize the tooltip behavior directly using these native CSS variables inside the project layout:

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--tooltip-duration` | Control transition delivery velocity | `0.45s` |
| `--tooltip-easing` | Custom cubic bezier mapping for spring bounce feedback | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` |
| `--tooltip-scale` | Initial scaled size context before calculation frame expansion | `0.85` |