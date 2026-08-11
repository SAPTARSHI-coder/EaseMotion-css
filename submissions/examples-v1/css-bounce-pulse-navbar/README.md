# CSS Bounce-Pulse Navbar

A responsive navigation bar with a Bounce-Pulse hover animation built entirely with HTML and CSS.

## Features

- Pure HTML & CSS
- Bounce-Pulse animation
- Responsive layout
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
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
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
    --duration:.35s;
}
```

## Accessibility

- Keyboard focus support
- Responsive design
- High contrast
- Reduced motion support

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Issue

Implements **#54291**