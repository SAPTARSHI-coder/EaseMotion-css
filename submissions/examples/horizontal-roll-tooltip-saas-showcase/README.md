# Horizontal Roll Tooltip – SaaS Showcase Layout

**Issue:** #46259

## Description

A pure CSS Horizontal Roll Tooltip designed for SaaS Showcase interfaces. The tooltip smoothly rolls in horizontally on hover or keyboard focus without requiring JavaScript.

## Features

- Pure HTML & CSS
- Horizontal Roll animation
- Responsive design
- Keyboard accessible
- CSS Custom Properties
- No JavaScript dependency
- SaaS-inspired modern UI

## Usage

```html
<div class="tooltip-wrapper">
    <button class="tooltip-btn">Get Started</button>
    <span class="tooltip">Launch your workspace instantly 🚀</span>
</div>
```

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

## Customization

```css
:root{
    --primary:#4f46e5;
    --secondary:#7c3aed;
    --duration:.4s;
    --distance:35px;
}
```

Modify the CSS variables to match your branding and animation preferences.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## License

MIT