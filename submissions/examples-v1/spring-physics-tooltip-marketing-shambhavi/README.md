# Spring Physics Tooltip (Marketing Landing Page)

A responsive CSS-only tooltip inspired by spring physics and designed for modern marketing landing pages.

## Features

- Pure HTML & CSS
- Smooth spring-inspired animation
- Glassmorphism interface
- Responsive layout
- Keyboard accessible
- Customizable CSS variables
- Zero JavaScript

## Files

```
demo.html
style.css
README.md
```

## Usage

```html
<div class="tooltip-wrapper">

<button class="info-btn">
i
</button>

<div class="tooltip ease-spring-tooltip">

Tooltip Content

</div>

</div>
```

## Customization

```css
:root{

--tooltip-duration:.55s;
--tooltip-scale:.85;
--tooltip-ease:cubic-bezier(.2,1.4,.45,1);

}
```

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Why EaseMotion CSS?

This component demonstrates lightweight, reusable animation patterns that fit EaseMotion CSS's animation-first philosophy while requiring no JavaScript.