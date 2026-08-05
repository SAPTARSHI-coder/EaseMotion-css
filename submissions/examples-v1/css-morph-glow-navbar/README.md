# CSS Morph-Glow Navbar

A responsive navigation bar with a smooth morph and glow hover animation built using pure HTML and CSS.

## Features

- Pure HTML & CSS
- Morph + Glow hover effect
- Responsive navigation
- Keyboard accessible
- CSS custom properties
- prefers-reduced-motion support

## Files

```
demo.html
style.css
README.md
```

## Usage

```html
<nav class="navbar">
    <div class="logo">EaseMotion</div>

    <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

```html
<link rel="stylesheet" href="style.css">
```

## CSS Variables

```css
:root{
    --primary:#2563eb;
    --bg:#ffffff;
    --text:#222;
    --radius:16px;
    --duration:.35s;
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

Implements **#54295**