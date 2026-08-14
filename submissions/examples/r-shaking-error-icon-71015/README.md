# CSS Shaking Error Icon

A CSS-only error indicator with a subtle shaking animation for drawing attention to invalid form states.

## Features

- Pure CSS shaking animation
- Clear error indicator
- Accessible form markup
- `aria-invalid` support
- Visible keyboard focus states
- Responsive layout
- Reduced-motion support
- No JavaScript required

## Files

- `demo.html` — Interactive demonstration
- `style.css` — Component styles
- `README.md` — Documentation

## Usage

Add the `error-shake` animation to an error component:

```css
.error-panel {
  animation: error-shake 1.2s ease-in-out infinite;
}