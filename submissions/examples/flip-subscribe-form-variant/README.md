# Flip Subscribe Form Component (#42512)

A smooth, pure CSS 3D flipping newsletter signup form designed for the EaseMotion CSS engine. It provides high-performance geometric rotation states without the need for additional JavaScript utilities.

## Core Visual Mechanics

- **Zero JavaScript Lifecycle**: Form submission triggers a toggle check layer, driving the underlying vector card matrix through CSS sibling combinators.
- **Hardware-Accelerated 3D Depth**: Combines `perspective` wrapper fields along with `transform-style: preserve-3d` and `backface-visibility: hidden` declarations to ensure 60fps presentation frames.
- **Responsive Sizing**: Fits cleanly into narrow sidebars, dashboard layouts, or standard footer blocks using proportional sizing limits.

## Custom Options

You can easily modify structural dimensions and color palettes directly inside the custom variables block within `style.css`:

```css
:root {
  --ease-form-bg: #0f172a;           /* Form card body container background */
  --ease-form-accent: #6366f1;       /* Submit button context focus highlights */
  --ease-flip-bezier: cubic-bezier(0.4, 0, 0.2, 1); /* Spatial 3D flip animation profile */
}