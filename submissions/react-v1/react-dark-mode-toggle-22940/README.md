# React Animated Dark Mode Toggle Component (#22940)

A beautifully animated, state-driven dark mode toggle utilizing EaseMotion CSS.

## Features

- **Micro-Interactions**:
  - The toggle button utilizes `.ease-hover-scale` for tactile feedback on hover.
  - When switching themes, the icon utilizes a custom rotational zoom-in animation mapping to `.ease-zoom-in` timing curves, providing a satisfying snap as the sun/moon swaps.
- **Global Theme Support**: The demo provides a CSS variables framework for orchestrating global body-level color transitions synchronized with the toggle.
- **Controlled Component**: The component accepts an `initialTheme` prop and fires an `onToggle` callback, making it perfectly suited for integration with Next.js or React Context theme providers.
- **Customizable Sizes**: Pre-configured with `sm`, `md`, and `lg` size variants via CSS.

## Structure

- `DarkModeToggle.jsx` - The React component managing the `key` prop trick to force CSS animation re-triggers on state change.
- `style.css` - Component-specific styles mapping states, defining CSS variables for themes, and orchestrating the custom keyframe rotation.
- `demo.html` - A standalone demo page using Babel and React CDN to showcase the global theme toggle effect.

## Usage

Simply open `demo.html` in your browser. No build process is required for the demo.
