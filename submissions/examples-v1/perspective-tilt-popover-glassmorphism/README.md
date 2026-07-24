# 3D Perspective Tilt Popover – Glassmorphism UI

## Description

A responsive, CSS-only popover featuring a smooth 3D perspective tilt animation with a modern glassmorphism appearance.

## Features

- Pure CSS
- No JavaScript
- Glassmorphism design
- Responsive layout
- Keyboard accessible using `:focus-within`
- Customizable with CSS variables

## Usage

```html
<div class="popover">
    <button class="trigger">Open Popover</button>

    <div class="popover-content">
        <h3>Glassmorphism UI</h3>
        <p>Your content here.</p>
    </div>
</div>
```

## Customization

Modify the CSS variables inside `:root`.

```css
:root{
    --duration:.45s;
    --radius:18px;
    --blur:18px;
    --primary:#4f46e5;
}
```

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Issue

Closes #46700