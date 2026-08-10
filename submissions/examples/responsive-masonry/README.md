# Responsive Masonry

A pure CSS masonry-style layout component using CSS columns.

## Features

- Responsive column count: 1 column on mobile, 2 on tablet, 3 on desktop
- Staggered fade-in entrance animation
- Pure CSS — no JavaScript required
- CSS custom properties for easy theming
- Accessible with `prefers-reduced-motion` support

## Customization

```css
:root {
  --rm-white: #ffffff;
  --rm-bg: #f8f9fa;
  --rm-text: #212529;
  --rm-muted: #6c757d;
  --rm-border: #dee2e6;
  --rm-indigo: #4f46e5;
}
```

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Files

- `demo.html` — Demo page with masonry grid and card content
- `style.css` — All styles, responsive columns, and animations
