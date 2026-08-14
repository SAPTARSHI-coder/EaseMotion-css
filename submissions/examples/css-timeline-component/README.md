# Timeline Component

A CSS timeline component with alternating left and right entries.

## Features

- Vertical timeline with alternating left/right card placement
- Central connecting line with dot indicators
- Staggered fade-in entrance animation
- Responsive — collapses to single column on mobile
- CSS custom properties for easy theming
- Accessible with `prefers-reduced-motion` support
- Pure CSS — no JavaScript required

## Customization

```css
:root {
  --tl-white: #ffffff;
  --tl-bg: #f3f4f6;
  --tl-text: #1f2937;
  --tl-muted: #6b7280;
  --tl-indigo: #6366f1;
}
```

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Files

- `demo.html` — Demo page with 5 timeline entries
- `style.css` — All styles, alternating layout, and animations
