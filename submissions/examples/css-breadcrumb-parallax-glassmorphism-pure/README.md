# Parallax Breadcrumb with Glassmorphism Styling

A highly interactive, pure CSS breadcrumb component featuring a beautiful glassmorphism aesthetic and a 3D parallax hover effect.

## Features
- **Pure HTML/CSS**: No JavaScript required for the 3D transforms or hover states.
- **Glassmorphism**: Uses `backdrop-filter: blur`, semi-transparent backgrounds, and subtle lighting borders to create a frosted glass effect.
- **3D Parallax Hover**: The entire breadcrumb container uses CSS `perspective`, `transform: rotateX() rotateY() translateZ()`, and `transform-style: preserve-3d` to tilt and lift off the page when hovered.
- **Animated Background**: Includes slow-moving, blurred, floating CSS blobs in the background to emphasize the glass effect.
- **Smooth Interactions**: Links feature an expanding highlight effect on hover.
- **Responsive**: Adapts to smaller screens by adjusting padding and disabling complex 3D transforms to prioritize usability on mobile devices.
- **Accessibility**: Includes `prefers-reduced-motion` to disable animations and transforms for users who prefer it.

## Usage
Open `demo.html` in your browser. Move your mouse over the breadcrumb container to see the parallax tilt effect.

## Files
- `demo.html`: The HTML structure including the SVG icons and background blob elements.
- `style.css`: The CSS containing the glassmorphism variables, 3D transform logic, and responsive adjustments.
