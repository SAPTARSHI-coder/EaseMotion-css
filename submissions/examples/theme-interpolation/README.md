# Seamless Theme Interpolation

This submission demonstrates how to create a highly dynamic and smooth theme interpolation utility using modern CSS features, specifically `color-mix()` combined with an animatable `@property`.

## Features

- **No CSS Preprocessors Required**: Traditionally, interpolating color palettes required SASS/LESS loops or complex JavaScript color math. Now, it's native to CSS.
- **`color-mix()`**: Blends two CSS variables (`--theme-a` and `--theme-b`) natively in the browser's SRGB color space.
- **`@property` Interpolation**: By declaring `--em-mix-percent` as an `<percentage>`, CSS knows how to transition this value between `0%` and `100%`.
- **Accessibility**: Reverts to instantaneous theme switching if the user prefers reduced motion.

## Usage

1. Include `style.css` in your project.
2. Define your base colors for Theme A and Theme B in the `:root`.
3. Apply the `.em-theme-interpolator` class to a wrapper element (like the `body` or a main container).
4. Toggle the `.theme-b-active` class on that wrapper via JavaScript. All nested elements using the `color-mix` utility will seamlessly transition colors.
