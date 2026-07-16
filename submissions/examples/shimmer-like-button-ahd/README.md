# Shimmer Like Button

A responsive and accessible like button component featuring a smooth shimmer animation, built using pure HTML and CSS.

## Features

- Pure CSS shimmer animation
- Interactive liked and unliked states
- No JavaScript required
- Responsive across mobile and desktop screens
- Keyboard accessible
- Visible focus states
- Reduced-motion support
- Reusable CSS custom properties with `ease-*` naming conventions

## How It Works

The component uses a visually hidden checkbox to manage the liked and unliked states without JavaScript.

A CSS pseudo-layer creates the shimmer effect and moves across the button using the `ease-shimmer-sweep` keyframe animation.

The heart icon changes between outlined and filled states when the button is toggled.

## Files

- `demo.html` — Live demonstration of the component
- `style.css` — Component styles and shimmer animation
- `README.md` — Component documentation

## Usage

Open `demo.html` in a modern web browser to view and interact with the component.

## Accessibility

The component includes:

- Native checkbox keyboard interaction
- Visible `:focus-visible` styles
- Semantic labeling
- Decorative SVG content hidden from assistive technologies
- Support for `prefers-reduced-motion`

## Browser Support

The component works in modern browsers that support CSS custom properties, CSS animations, and modern selectors.