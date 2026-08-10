# Neon Glow Popover for Product Catalog Layouts

**Issue:** #46482

## Overview

A responsive **pure CSS Neon Glow Popover** designed for Product Catalog layouts. The popover displays product information with a smooth neon glow animation using only CSS.

## Features

- Pure CSS
- Neon glow animation
- Responsive design
- Keyboard accessible
- CSS Custom Properties
- No JavaScript

## Files

```
demo.html
style.css
README.md
```

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="popover-wrapper">
    <button class="product-btn">View Details</button>

    <div class="popover">
        Product information...
    </div>
</div>
```

## Customization

```css
:root{
    --glow-color:#00e5ff;
    --duration:.35s;
    --easing:ease;
    --scale:.95;
}
```

## Accessibility

- Keyboard accessible (`:focus-visible`)
- Responsive
- Semantic tooltip (`role="tooltip"`)

## Browser Support

- Chrome ✅
- Firefox ✅
- Edge ✅
- Safari ✅

## Why it fits EaseMotion CSS

This component provides a reusable, animation-first popover with a modern neon glow effect using only CSS. It is lightweight, customizable through CSS variables, responsive, and aligns with EaseMotion CSS's philosophy of clean, human-readable animations.