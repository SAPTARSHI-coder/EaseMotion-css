# EaseMotion CSS Variables Customization Showcase

### What does this do?
Demonstrates how to override core EaseMotion CSS variables (colors, radii, shadows, and animation speeds) using standard CSS custom properties.

### How is it used?
Define custom values inside the `:root` pseudo-class in your project's stylesheet to override EaseMotion defaults:

```css
:root {
  --ease-color-primary: #ff5722;
  --ease-speed-fast: 150ms;
  --ease-radius-md: 12px;
  --ease-shadow-md: 0 4px 15px rgba(0, 0, 0, 0.15);
}