# CSS Micro Shake Popover – E-Commerce Checkout Layout

## Overview

A responsive Micro Shake Popover built with pure HTML and CSS for E-Commerce Checkout interfaces. It displays important checkout messages such as coupon success, payment status, or shipping updates with a subtle shake animation.

## Features

- Pure HTML & CSS
- Responsive design
- Keyboard accessible
- Smooth Micro Shake animation
- CSS custom properties for customization
- No JavaScript required

## Files

- demo.html
- style.css
- README.md

## Usage

```html
<div class="popover-wrapper">
    <button class="checkout-btn">
        Apply Coupon
    </button>

    <div class="micro-shake-popover">
        Coupon Applied Successfully!
    </div>
</div>
```

## Custom Properties

```css
:root{
    --popover-bg:#222;
    --popover-color:#fff;
    --accent:#4caf50;
    --duration:.45s;
    --distance:3px;
}
```

## Why it fits EaseMotion CSS

- Animation-first design
- Fully reusable component
- Zero JavaScript
- Lightweight and customizable
- Suitable for modern checkout experiences