# 3D Perspective Tilt Tooltip – Product Catalog

A responsive **pure CSS 3D Perspective Tilt Tooltip** designed for modern Product Catalog interfaces.

## Features

- Pure CSS (No JavaScript)
- Smooth 3D Perspective Tilt animation
- Responsive layout
- Keyboard accessible
- Product catalog inspired styling
- Customizable through CSS variables

## Files

```
demo.html
style.css
README.md
```

## Customization

```css
:root{
  --ease-tooltip-duration:.4s;
  --ease-tooltip-easing:cubic-bezier(.22,1,.36,1);
  --ease-tooltip-scale:.92;
  --ease-tooltip-rotateX:18deg;
}
```

## Accessibility

- Keyboard accessible using `:focus-visible`
- Uses `role="tooltip"`
- Responsive across different screen sizes

## Usage

Hover or focus the button to reveal the animated 3D Perspective Tilt tooltip.