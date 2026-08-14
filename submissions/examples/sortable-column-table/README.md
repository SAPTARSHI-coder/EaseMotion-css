# Sortable Column Table

A CSS sortable column table with sort indicators and active state styling.

## Features

- Sort arrow indicators that appear on hover
- Active column highlighting with indigo accent
- Descending sort indicator via `.sct-th--desc` modifier class
- Responsive design that works on all screen sizes
- Status pill badges for visual data representation
- CSS custom properties for easy theming
- Accessible with `prefers-reduced-motion` support
- Pure CSS — no JavaScript required

## Customization

```css
:root {
  --sct-white: #ffffff;
  --sct-bg: #f3f4f6;
  --sct-text: #1f2937;
  --sct-muted: #6b7280;
  --sct-indigo: #4f46e5;
}
```

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Files

- `demo.html` — Demo page with 5-row sortable table
- `style.css` — All styles and sort indicator animations
