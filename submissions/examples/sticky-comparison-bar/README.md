# Sticky Comparison Bar

A CSS sticky comparison bar that sticks to the bottom of the viewport for comparing products.

## Features

- Fixed position bar with slide-up entrance animation
- Clean, minimal design with product labels and prices
- Responsive across all screen sizes
- CSS custom properties for easy theming
- Accessible with `prefers-reduced-motion` support
- Pure CSS — no JavaScript required

## Customization

```css
:root {
  --scb-white: #ffffff;
  --scb-bg: #f8f9fa;
  --scb-text: #212529;
  --scb-muted: #6c757d;
  --scb-indigo: #4f46e5;
  --scb-green: #10b981;
}
```

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Files

- `demo.html` — Demo page with pricing sections and sticky bar
- `style.css` — All styles, sticky positioning, and animations
