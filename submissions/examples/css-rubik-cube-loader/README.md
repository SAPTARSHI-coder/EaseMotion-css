# CSS Rubik Cube Loader

A CSS-only Rubik cube loader animation featuring a continuously rotating 3D cube.

## Features

- Pure CSS implementation with no JavaScript
- 3D cube construction using CSS transforms
- Continuous spinning animation
- CSS custom properties for easy theming
- Light and dark mode support
- Responsive sizing
- Accessible loading semantics
- Respects `prefers-reduced-motion`

## Files

- `demo.html` — Demo page containing the Rubik cube loader
- `style.css` — Complete styling, 3D transforms, and animations

## Usage

Copy the loader markup from `demo.html` and include `style.css` in your project.

The cube colors can be customized using the CSS custom properties defined in `style.css`.

## Animation

The cube uses CSS `transform`, `perspective`, and `@keyframes` to create the 3D spinning effect without JavaScript.

## Accessibility

The loader includes an accessible loading label and respects users who prefer reduced motion.

## Browser Support

Requires a modern browser with support for CSS 3D transforms, custom properties, `color-mix()`, and CSS animations.