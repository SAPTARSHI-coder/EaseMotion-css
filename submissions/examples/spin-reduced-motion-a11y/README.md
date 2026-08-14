# Accessible Spin Animation

An accessible, lightweight CSS spin animation demo designed
to respect user motion preferences.

This implementation addresses accessibility concerns around
continuous animations and follows the requirements of Issue #81933.

## Features

- Pure HTML and CSS
- No external JavaScript
- `prefers-reduced-motion` support
- Keyboard accessible controls
- Visible keyboard focus indicators
- Semantic HTML structure
- Screen-reader-friendly loading status
- `forced-colors: active` support
- Responsive design
- Hardware-friendly CSS animation
- No unnecessary motion when reduced motion is enabled

## Accessibility

### Reduced Motion

The spinner normally uses a CSS animation:

```css
.spinner {
  animation: spin 1s linear infinite;
}