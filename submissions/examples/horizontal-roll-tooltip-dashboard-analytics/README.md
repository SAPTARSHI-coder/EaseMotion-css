# Horizontal Roll Tooltip – Dashboard Analytics Layout

**Issue:** #46255

## Description

A pure CSS **Horizontal Roll Tooltip** designed for Dashboard Analytics layouts. The tooltip smoothly rolls into view on hover or keyboard focus, providing contextual information without using JavaScript.

## Features

- Pure HTML & CSS
- Smooth horizontal roll animation
- Responsive layout
- Keyboard accessible
- CSS Custom Properties
- Zero JavaScript
- Dashboard Analytics inspired design

## Usage

```html
<div class="tooltip-wrapper">
    <button class="tooltip-btn">View Report</button>
    <span class="tooltip">Open detailed analytics report</span>
</div>
```

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

## Customization

```css
:root{
    --primary:#2563eb;
    --secondary:#0ea5e9;
    --duration:.35s;
    --distance:30px;
}
```

Modify the CSS variables to customize colors, animation timing, and tooltip distance.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## License

MIT
```