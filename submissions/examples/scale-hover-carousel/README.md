# CSS Scale-Hover Carousel for Gaming Hub Layouts

## Overview

A responsive CSS-only carousel featuring gaming cards with a smooth scale-on-hover animation.

## Features

- Pure HTML & CSS
- Smooth scale hover effect
- Responsive layout
- CSS custom properties
- No JavaScript required
- Accessible with `prefers-reduced-motion`

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Example:

```html
<div class="carousel">
    <div class="card">
        <img src="image.jpg" alt="">
        <h3>Game Title</h3>
    </div>
</div>
```

## Custom Properties

```css
:root{
    --primary:#00d4ff;
    --bg:#111827;
    --card:#1f2937;
}
```

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Accessibility

Supports `prefers-reduced-motion` to reduce animations.

## Issue Reference

Closes #56384