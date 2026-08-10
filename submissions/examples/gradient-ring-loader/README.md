# Gradient Ring Loader

A CSS gradient ring loader using conic-gradient for a spinning animation.

## Features

- Conic-gradient based spinning ring animation
- Three size variants: small, medium, and large
- Dual-color gradient with indigo and cyan accent
- Track ring background for depth
- CSS custom properties for easy theming
- Accessible with `prefers-reduced-motion` support
- ARIA `role="status"` and `aria-label` for screen readers
- Pure CSS — no JavaScript required

## Customization

```css
:root {
  --grl-indigo: #6366f1;
  --grl-cyan: #06b6d4;
  --grl-track: #e5e7eb;
}
```

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Files

- `demo.html` — Demo page with three loader sizes
- `style.css` — All styles and spinning animations
