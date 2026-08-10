# CSS 3D-Flip Tooltip

A lightweight, accessible tooltip component featuring a smooth 3D flip animation built using pure HTML and CSS.

## Features

- Pure HTML & CSS
- Smooth 3D flip animation
- Responsive design
- Keyboard accessible
- Hover & focus support
- prefers-reduced-motion support
- Easy customization with CSS variables

## Files

```
demo.html
style.css
README.md
```

## Usage

```html
<div class="tooltip-container">
  <button class="tooltip-trigger">Hover Me</button>

  <div class="tooltip-box">
    Tooltip Content
  </div>
</div>
```

```html
<link rel="stylesheet" href="style.css">
```

## CSS Variables

```css
:root{
  --tooltip-bg:#1f2937;
  --tooltip-color:#fff;
  --duration:.45s;
  --radius:10px;
}
```

## Accessibility

- Keyboard focus support
- High contrast
- Responsive layout
- Reduced motion support

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Issue

Implements **#54303**