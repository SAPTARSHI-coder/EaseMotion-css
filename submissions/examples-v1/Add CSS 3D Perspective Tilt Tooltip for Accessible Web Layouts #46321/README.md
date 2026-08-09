# CSS 3D Perspective Tilt Tooltip (Accessible Web Aesthetics)

This example demonstrates how to create a highly polished, pure CSS animated Tooltip featuring a 3D Perspective Tilt transition, while strictly adhering to Web Accessibility (a11y) guidelines.

## Features
- **Pure CSS**: Fully functional interactivity and 3D transforms without JavaScript.
- **3D Perspective Tilt Transition**: The tooltip is anchored in a 3D space (`perspective`) and rotates along the X-axis (`rotateX`), swinging up into view naturally.
- **Modern CSS APIs**: Uses `allow-discrete` and `@starting-style` to gracefully animate the tooltip from `display: none` to `display: block` upon hover or focus.
- **Accessible Aesthetics & Patterns**:
  - **High Contrast**: Uses high contrast black/white schemes to ensure legibility and WCAG AAA compliance.
  - **Focus Management**: Large, highly visible focus rings (`outline`, `outline-offset`) are applied to interactive elements.
  - **Touch Targets**: Buttons meet minimum 44x44px touch target sizes.
  - **Reduced Motion Support**: Automatically detects `prefers-reduced-motion: reduce` media queries to disable the 3D tilt and translation effects for users sensitive to motion.
  - **Semantic HTML**: Uses `aria-describedby`, `aria-label`, and `role="tooltip"` for screen reader compatibility.
- **Fully Customizable**: Timing, easing curves, perspective depths, and rotation angles are all exposed via well-documented CSS Custom Properties (Variables).

## Custom Properties Configuration
You can tweak the 3D physics and animation speeds via these exposed CSS custom properties:
```css
:root {
  --tooltip-duration: 0.3s;
  --tooltip-easing: ease-out;
  --tooltip-perspective: 800px;
  --tooltip-start-rotateX: -20deg;
  --tooltip-start-translateY: 10px;
  --tooltip-start-opacity: 0;
}
```

## Browser Support
This demo uses modern CSS features. For the full experience, it relies on:
- **CSS `@starting-style` & `allow-discrete`** (Supported in Chrome 117+, Edge 117+, Firefox 129+, Safari 17.4+)
- **CSS 3D Transforms** (Baseline Support across all modern browsers)
