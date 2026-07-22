# Zoom-Out Tooltip – Glassmorphism UI

**Issue:** #46246

## Description

A pure CSS **Zoom-Out Tooltip** inspired by modern Glassmorphism UI. The tooltip smoothly scales into view while maintaining a frosted-glass aesthetic. No JavaScript is required.

## Features

- Pure HTML & CSS
- Smooth zoom-out animation
- Glassmorphism design
- Responsive layout
- Keyboard accessible
- CSS Custom Properties
- Zero JavaScript

## Usage

```html
<div class="tooltip-wrapper">
    <button class="tooltip-btn">Hover Me</button>
    <span class="tooltip">Beautiful Zoom-Out Tooltip</span>
</div>
```

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

## Customization

```css
:root{
    --duration:.35s;
    --scale:.8;
    --blur:16px;
}
```

Modify the CSS variables to customize animation timing, scale, and glass blur.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## License

MIT