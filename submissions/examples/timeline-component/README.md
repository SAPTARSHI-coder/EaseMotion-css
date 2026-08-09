# Timeline Component

A CSS vertical timeline with alternating left and right entries.

## Features

- Alternating left/right card layout on desktop
- Single-column layout on mobile (below 520px)
- Central vertical line with indigo dot markers
- Staggered fade-in entrance animation
- CSS custom properties for easy theming
- Accessible with `prefers-reduced-motion` support
- Pure CSS — no JavaScript required

## Customization

```css
:root {
  --tlc-white: #ffffff;
  --tlc-bg: #f3f4f6;
  --tlc-text: #1f2937;
  --tlc-muted: #6b7280;
  --tlc-indigo: #6366f1;
  --tlc-line: #d1d5db;
}
```

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Files

- `demo.html` — Demo page with 5 timeline entries
- `style.css` — All styles, responsive breakpoints, and animations
