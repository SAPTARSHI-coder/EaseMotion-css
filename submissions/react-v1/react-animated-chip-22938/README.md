# React Animated Chip Component (#22938)

A fully interactive, state-driven animated chip/tag component utilizing EaseMotion CSS.

## Features

- **Lifecycle Animations**:
  - Elements mount gracefully using `.ease-zoom-in` with staggered delays.
  - On dismissal, the component intercepts the state change, applies the `.ease-zoom-out` class, and waits for the `onAnimationEnd` event before physically removing the chip from the DOM.
- **Micro-Interactions**:
  - Hovering over a dismissible chip triggers `.ease-hover-scale` for a tactile feel.
  - The dismiss button (X) utilizes `.ease-hover-glow`.
- **Layout Animations**: When a chip is removed, sibling chips slide smoothly into its place using CSS layout transitions on the parent and elements.
- **Theming**: Comes with built-in color variants (primary, success, warning, danger, neutral, accent) styled elegantly via CSS variables and backdrop-filters.

## Structure

- `Chip.jsx` - The React component managing the `isExiting` state and lifecycle events.
- `style.css` - UI layout and styling using CSS variables for clean variant scoping.
- `demo.html` - A standalone demo page using Babel and React CDN to manage a dynamic list of chips.

## Usage

Simply open `demo.html` in your browser. No build process is required for the demo.
