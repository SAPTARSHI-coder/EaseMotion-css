# Shimmer-Sweep Hero Section

A CSS shimmer-sweep hero section for glassmorphism UI layouts.

## Features

- Shimmer sweep animation using gradient translate on the `::before` pseudo-element
- Glassmorphism card with backdrop-filter blur and translucent borders
- Pulsing radial glow background
- Accessible with `prefers-reduced-motion` support
- Pure CSS — no JavaScript required

## Customization

```css
:root {
  --ssh-glass: rgba(255, 255, 255, 0.08);
  --ssh-glass-border: rgba(255, 255, 255, 0.12);
  --ssh-cyan: #06b6d4;
  --ssh-radius: 12px;
}
```

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Files

- `demo.html` — Demo page with hero section and glassmorphism navbar
- `style.css` — All styles and shimmer-sweep animations
