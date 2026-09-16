# CSS Loader: Minimalist Outline

A clean, ultra-modern loading spinner utilizing SVG stroke-dasharray animations for a precise, continuous outline trace.

## Features
- Pure CSS and HTML implementation relying on inline SVG stroke manipulation.
- **Component Architecture**: 
  - **SVG Foundation**: To achieve perfectly crisp, curved lines at any scale, the component uses an inline `<svg>` containing two `<circle>` elements (a subtle track and the animated trace).
  - **Stroke Dasharray Magic**: The core animation relies on SVG `stroke-dasharray` and `stroke-dashoffset`. By setting both properties to the exact circumference of the circle (283 for a radius of 45), the stroke is completely hidden. 
  - **The Tracing Animation**: The `@keyframes draw-line` animation manipulates the `stroke-dashoffset` down to 70 and back up to 283. This causes the stroke to elegantly draw itself in and then erase itself.
  - **Dual Spin Dynamics**: To achieve the classic "chasing its own tail" dynamic feel, two rotations are happening simultaneously. The entire SVG container spins constantly using a `linear` keyframe, while the `<circle>` path itself spins using the `ease-in-out` keyframe alongside the stroke manipulation.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the stroke colors to remain legible and pleasing on dark backgrounds.
- Fully accessible semantic structure. The decorative SVG is hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing all spinning and stroking animations, locking the loader into a clean, static half-circle for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the minimalist outline loading animation.

## Files
- `demo.html`: The HTML structure defining the SVG, the background track circle, and the animated tracing circle.
- `style.css`: The styling, the `stroke-dasharray` logic, and the dual-spin keyframe animations.
