# CSS Fade-In Tooltip

A lightweight tooltip component featuring a smooth fade-in animation using pure HTML and CSS.

## Features

- Pure HTML & CSS
- Smooth fade-in animation
- Responsive layout
- Keyboard accessible
- Hover & focus support
- prefers-reduced-motion support
- Easy customization using CSS variables

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
    --tooltip-bg:#222;
    --tooltip-color:#fff;
    --duration:.35s;
    --radius:8px;
}
```

## Accessibility

- Keyboard focus support
- Responsive layout
- High contrast
- Reduced motion support

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Issue

Implements **#54299**