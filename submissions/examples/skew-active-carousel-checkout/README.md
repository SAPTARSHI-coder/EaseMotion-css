# CSS Skew-Active Carousel for E-Commerce Checkout Layouts

**Issue:** #50498

## Overview

A responsive **pure CSS Skew-Active Carousel** designed for modern e-commerce checkout interfaces. Cards smoothly skew and scale when hovered or focused, creating an engaging user experience without JavaScript.

## Features

- Pure HTML & CSS
- Responsive layout
- Smooth skew and scale animation
- Keyboard accessible
- CSS Custom Properties
- Zero JavaScript
- Easy to customize

## Folder Structure

```
submissions/
└── skew-active-carousel-checkout/
    ├── demo.html
    ├── style.css
    └── README.md
```

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="skew-carousel">
    <div class="card active">Cart</div>
    <div class="card">Shipping</div>
    <div class="card">Payment</div>
</div>
```

## Customization

Modify the CSS variables:

```css
:root{
    --duration:.4s;
    --scale:1.08;
    --skew:-8deg;
    --primary:#2563eb;
}
```

## Accessibility

- Keyboard focus support
- Responsive layout
- High contrast colors
- No JavaScript dependency

## Browser Support

- Chrome ✅
- Firefox ✅
- Edge ✅
- Safari ✅

## Why it fits EaseMotion CSS

This component follows EaseMotion CSS principles by providing lightweight, reusable, animation-first CSS using semantic class names and customizable CSS variables.

**Created for Issue #50498**