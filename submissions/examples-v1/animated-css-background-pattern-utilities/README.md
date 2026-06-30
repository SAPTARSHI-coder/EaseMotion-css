# Animated CSS Background Pattern Utilities

A comprehensive, zero-dependency CSS utility library for generating highly customizable, mesmerizing background patterns and animations, built for the EaseMotion CSS framework.

## Project Overview

This utility library provides developers with an instant way to add beautiful background textures to any UI element (Dashboards, Hero Sections, Pricing Cards). By leveraging native CSS gradients (linear, radial, conic) and CSS variables, this library generates complex patterns (grids, dots, stripes, mesh, noise, hex) perfectly optimized for 60fps rendering—all without a single line of JavaScript or external image files.

## Features

- **Pure CSS Construction**: 100% vanilla HTML5 and CSS3. No JavaScript, no external images (SVGs/PNGs), no external frameworks.
- **10 Unique Base Patterns**: Includes Grid, Dots, Diagonal Stripes, Waves, Polka Dots, Checkerboard, Hexagon, Triangle, Noise, and Mesh gradients.
- **CSS Variable API**: Fully customizable. Change colors, sizes, opacities, speeds, and angles globally or per-element inline via `--ease-pattern-*` variables.
- **8 Dedicated Animations**: Utilities for continuous motion such as `.ease-bg-drift`, `.ease-bg-slide`, `.ease-bg-pulse`, and `.ease-bg-scroll`.
- **Responsive & Lightweight**: Works flawlessly across all screen sizes. Adds minimal weight to the CSS bundle.

## Folder Structure

```
animated-css-background-pattern-utilities/
├── demo.html    # Showcase gallery and implementation examples
├── style.css    # Core utility library containing all patterns and keyframes
└── README.md    # Documentation and usage guide
```

## Available Utility Classes

### Pattern Classes

- `.ease-bg-grid`, `.ease-bg-grid-small`, `.ease-bg-grid-large`
- `.ease-bg-dots`, `.ease-bg-dots-small`, `.ease-bg-dots-large`
- `.ease-bg-stripes`, `.ease-bg-stripes-thin`, `.ease-bg-stripes-wide`
- `.ease-bg-waves`, `.ease-bg-waves-soft`
- `.ease-bg-polka`, `.ease-bg-polka-large`
- `.ease-bg-checker`
- `.ease-bg-hex`
- `.ease-bg-triangle`
- `.ease-bg-noise`
- `.ease-bg-mesh`

### Animation Classes

- `.ease-bg-drift` (Diagonal smooth movement)
- `.ease-bg-slide` (Horizontal movement)
- `.ease-bg-scroll` (Vertical movement)
- `.ease-bg-wave` (Oscillating diagonal movement)
- `.ease-bg-pulse` (Opacity and scale breathing)
- `.ease-bg-rotate` (Continuous rotation)
- `.ease-bg-shimmer` (Brightness/contrast shifting for noise)
- `.ease-bg-float` (Y-axis oscillation)

## CSS Variables API

Customize patterns globally in `:root` or inline via style attributes:

```css
:root {
  --ease-pattern-color: rgba(255, 255, 255, 0.08); /* Primary pattern color */
  --ease-pattern-secondary: rgba(
    255,
    255,
    255,
    0.03
  ); /* Used for complex patterns like Mesh */
  --ease-pattern-size: 20px; /* Base scale of the pattern */
  --ease-pattern-opacity: 1; /* Overall opacity */
  --ease-pattern-speed: 10s; /* Animation cycle duration */
  --ease-pattern-angle: 45deg; /* Direction for stripes */
}
```

## Usage Examples

**Standard Grid with Drift Animation:**

```html
<div class="ease-pattern-layer ease-bg-grid ease-bg-drift"></div>
```

**Custom Colored Stripes:**

```html
<div
  class="ease-pattern-layer ease-bg-stripes ease-bg-slide"
  style="--ease-pattern-color: rgba(59, 130, 246, 0.2); --ease-pattern-angle: -45deg;"
></div>
```

**Complex Mesh Gradient:**

```html
<div
  class="ease-pattern-layer ease-bg-mesh ease-bg-pulse custom-theme-class"
></div>
```

## Browser Compatibility

Tested and fully supported on:

- Google Chrome (Latest)
- Mozilla Firefox (Latest)
- Apple Safari (Latest)
- Microsoft Edge (Latest)

## Accessibility Notes

Background patterns are purely decorative. They are set as background gradients and placed via a `.ease-pattern-layer` which utilizes `pointer-events: none` to prevent interference with interactive elements. Ensure that your text colors maintain a high contrast ratio against the generated patterns. Use the `--ease-pattern-opacity` variable to dim patterns behind text.

## Future Improvements

- Extend the API to include CSS `@property` definitions for interpolating gradients directly.
- Add utility classes specific to responsive breakpoints (e.g., `md:ease-bg-grid`).
- Incorporate interactive background animations that track mouse coordinate CSS variables.
