# CSS Houdini Gradient Mesh

An advanced demonstration of CSS Houdini `@property` to animate gradient angles and radial positions natively in CSS.

## Features
- **Houdini `@property` API**: Animatible custom CSS properties without JavaScript requestAnimationFrame loops.
- **Complex Gradients**: Combined `radial-gradient` and `conic-gradient` to create a liquid mesh effect.
- **Backdrop Filters**: Glassmorphism overlay that reacts to the animated background mesh.
- **Interactive Translation**: Subtle mouse movement effects using minimal JavaScript for depth.

## Setup
No build process required. Simply open `demo.html` in a modern browser that supports CSS Houdini (e.g., Chrome/Edge).

## Structure
- `demo.html` - The markup structure.
- `theme-vars.css` - Custom color variables.
- `style.css` - The core Houdini and keyframe definitions.
- `script.js` - Feature detection and mouse interactivity.
- `README.md` - Documentation.
