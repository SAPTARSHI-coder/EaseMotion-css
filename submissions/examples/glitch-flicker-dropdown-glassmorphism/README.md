# Glitch-Flicker Dropdown

A CSS glitch-flicker dropdown component for glassmorphism UI layouts.

## Features

- Glitch-flicker entrance animation with clip-path and skew transforms
- Glassmorphism glass effect with backdrop-filter blur
- Accessible with `prefers-reduced-motion` support
- CSS custom properties for easy theming
- Pure CSS — no JavaScript required

## Customization

```css
:root {
  --gfd-glass: rgba(255, 255, 255, 0.55);
  --gfd-glass-border: rgba(255, 255, 255, 0.35);
  --gfd-cyan: #06b6d4;
  --gfd-magenta: #ec4899;
  --gfd-radius: 10px;
}
```

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Files

- `demo.html` — Demo markup with glassmorphism navbar
- `style.css` — All styles and glitch-flicker animations
