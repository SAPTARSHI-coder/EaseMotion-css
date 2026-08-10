# CSS Ant Trail Loader

A classic "marching ants" circular loading animation built entirely in CSS. No JavaScript, no SVG `stroke-dasharray`, just pure CSS gradients and masks.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Ants**: Rather than using SVG paths or multiple DOM elements, the "ants" are drawn using a single CSS `repeating-conic-gradient`. It draws a sliver of color (the ant) from 0 to 4 degrees, then transparent space from 4 to 12 degrees, and repeats this pattern automatically around the 360-degree circle.
  - **The Trail Ring**: A conic gradient fills the entire circle by default. To hollow out the center and create a thin ring (a trail), a CSS `mask` (with `-webkit-mask` fallback) is applied using a `radial-gradient`. The radial gradient is completely transparent from the center up to 60%, and solid black from 61% outward, cleanly clipping the inner portion of the conic gradient.
  - **The March**: The marching animation is achieved simply by applying a continuous linear `@keyframes` rotation to the outer container.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`). The ants are a dark slate color in light mode, but swap to a glowing neon blue in dark mode for a cybernetic aesthetic.
- Fully accessible semantic structure. The loader wrapper is given `role="status"` and `aria-label="Loading"`. Honors the `prefers-reduced-motion` accessibility standard by entirely disabling the spinning and pulsing animations for motion-sensitive users, rendering it as a static dashed ring.

## Usage
Open `demo.html` in your browser. The ant trail will automatically animate.

## Files
- `demo.html`: The HTML structure defining the loader wrapper and the text container.
- `style.css`: The styling, the `repeating-conic-gradient` trick, the `radial-gradient` mask, and the infinite linear rotation.
