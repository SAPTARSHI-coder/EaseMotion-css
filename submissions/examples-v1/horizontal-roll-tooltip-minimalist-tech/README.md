# Horizontal Roll Tooltip – Minimalist Tech Layout

**Issue:** #46261

## Description

A pure CSS Horizontal Roll Tooltip designed for Minimalist Tech layouts. The tooltip smoothly rolls into view from the side on hover or keyboard focus without requiring JavaScript.

## Features

- Pure HTML & CSS
- Horizontal roll animation
- Responsive design
- Keyboard accessible
- CSS Custom Properties
- No JavaScript dependency

## Usage

```html
<div class="tooltip-wrapper">
    <button class="tooltip-btn">Hover Me</button>
    <span class="tooltip">Minimalist Tech Tooltip</span>
</div>
```

Link the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

## Customization

```css
:root{
    --tooltip-bg:#1f2937;
    --tooltip-color:#ffffff;
    --duration:.35s;
    --distance:25px;
}
```

Adjust the CSS variables to customize colors, animation speed, and roll distance.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## License

MIT