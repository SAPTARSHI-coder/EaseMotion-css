# Morphing Shape Loader

A CSS morphing shape loader that continuously transitions between circle, square, and triangle.

## Features

- Smooth morphing animation using `border-radius` and `rotate` keyframes
- Gradient accent variant
- Large size variant
- CSS custom properties for easy theming
- Accessible with `prefers-reduced-motion` support
- ARIA `role="status"` and `aria-label` for screen readers
- Pure CSS — no JavaScript required

## Customization

```css
:root {
  --msl-indigo: #6366f1;
  --msl-cyan: #06b6d4;
  --msl-size: 36px;
}
```

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Files

- `demo.html` — Demo page with three loader variants
- `style.css` — All styles and morphing animations
