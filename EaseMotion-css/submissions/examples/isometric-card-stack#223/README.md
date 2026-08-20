# Isometric Card Stack 🃏📐

A stunning 3D isometric card stack that fans out into individual cards on hover. Built with pure CSS 3D transforms, perspective, and smooth cubic-bezier transitions.

## Features
- **True Isometric Perspective**: Uses `rotateX(60deg)` and `rotateZ(-45deg)` for authentic isometric viewing angle.
- **3D Stacking**: Cards are layered using `translateZ()` with `preserve-3d` for real depth.
- **Fan-Out Hover Effect**: Cards spread out in a fan pattern on hover with spring-like `cubic-bezier` easing.
- **Dynamic Shadows**: Each card has its own colored shadow, plus a soft ambient shadow beneath the stack.
- **Responsive**: Scales down gracefully on mobile devices.
- **Zero JavaScript**: All interactions are pure CSS hover states.

## Customization
Edit CSS variables in `:root`:
- `--card-width` / `--card-height`: Change card dimensions.
- `--stack-offset`: Adjust spacing between stacked cards.
- `--iso-angle-x` / `--iso-angle-z`: Modify the isometric viewing angle.
- `--transition-speed`: Control animation speed.

## Browser Support
Works in all modern browsers with CSS 3D transform support.

---
*Part of the [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css) framework.*