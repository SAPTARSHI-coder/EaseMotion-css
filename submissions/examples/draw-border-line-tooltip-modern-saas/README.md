# CSS Draw-Border Line Tooltip – Modern SaaS Layouts

## Issue

Implements **#46338**.

## Overview

A pure CSS tooltip featuring a smooth draw-border animation designed for Modern SaaS interfaces.

## Features

- Pure CSS
- Draw-border line animation
- Responsive
- Keyboard accessible
- CSS custom properties
- No JavaScript

## Files

- demo.html
- style.css
- README.md

## Usage

```html
<button class="tooltip-btn">
    Hover Me
    <span class="tooltip">Modern SaaS Tooltip</span>
</button>
```

Include:

```html
<link rel="stylesheet" href="style.css">
```

## Customization

Modify variables inside `:root`:

```css
--primary
--tooltip-bg
--duration
--radius
```

## Browser Support

- Chrome
- Firefox
- Edge
- Safari