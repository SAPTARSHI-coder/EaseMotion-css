# React Animated Rating Stars Component (#22939)

A highly interactive, SVG-based animated rating stars component utilizing EaseMotion CSS.

## Features

- **Micro-Interactions**:
  - Individual stars mount utilizing `.ease-zoom-in` with staggered delays (`index * 50ms`).
  - Hovering a star (and triggering state cascades) utilizes `.ease-hover-scale` for a tactile feel.
  - Clicking a star to lock in a rating triggers a satisfying `.ease-pulse` animation.
- **Half-Star Support**: Optionally supports half-star increments (`allowHalf={true}`) with precise mouse-position tracking and SVG gradient fills.
- **Read-Only Mode**: Supports a `readonly` prop to disable interactions and visually flatten the component.
- **Customizable Sizes**: Pre-configured with `sm`, `md`, and `lg` size variants mapped in CSS.

## Structure

- `RatingStars.jsx` - The React component managing `hoverValue` vs `value`, mouse tracking for half-stars, and temporary animation states.
- `style.css` - Component-specific styles mapping states to EaseMotion CSS classes, SVG filter drop-shadows for glows, and linear gradients for half-stars.
- `demo.html` - A standalone demo page using Babel and React CDN to showcase multiple configurations.

## Usage

Simply open `demo.html` in your browser. No build process is required for the demo.
