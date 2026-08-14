# Zoom Card Gallery

A CSS zoom card gallery where hovering one card zooms it in while blurring and fading sibling cards.

## Features

- Hover zoom with sibling blur effect — pure CSS, no JavaScript
- Keyboard accessible via `tabindex` and `:focus-visible`
- Responsive grid layout
- Staggered entrance animation
- Accessible with `prefers-reduced-motion` support
- CSS custom properties for easy theming

## Customization

```css
:root {
  --zcg-white: #ffffff;
  --zcg-bg: #f3f4f6;
  --zcg-text: #1f2937;
  --zcg-muted: #6b7280;
  --zcg-border: #e5e7eb;
  --zcg-radius: 10px;
}
```

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Files

- `demo.html` — Demo page with 6 gallery cards
- `style.css` — All styles, zoom/blur effects, and animations
