# 3D-Flip Stepper for Gaming Hub Layouts

A lightweight, pure CSS 3D-flip stepper component designed for gaming interfaces. It features smooth 3D transformations on hover or active state, presenting step details on the reverse side of the card.

## Features

- **Pure CSS**: No JavaScript required for the 3D flipping animation.
- **3D Flip Animation**: Uses CSS `transform: rotateX()` and `perspective` for a dynamic 3D effect.
- **Responsive**: Adapts to mobile screens by changing to a vertical layout and utilizing `rotateY()` instead of `rotateX()`.
- **Accessibility**: Includes `prefers-reduced-motion` to disable animations for users who prefer it.
- **Customizable**: Easy to style with CSS variables.

## Usage

1. Include the HTML structure from `demo.html`.
2. Link the `style.css` to your project.
3. Toggle the `.active` class on `.step` elements to manually activate a step, or simply hover over them to see the flip effect.

## CSS Variables

The following custom properties are available for theming:

- `--bg-color`: Background color of the container
- `--primary-color`: Accent color for text and borders
- `--secondary-color`: Highlight color for active steps
- `--card-bg`: Background color of the step cards
- `--text-color`: Primary text color
- `--text-muted`: Secondary text color
- `--transition-speed`: Duration of the flip animation
