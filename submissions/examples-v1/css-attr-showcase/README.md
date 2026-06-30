# CSS attr() Function Showcase

Issue: [#10260](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/10260)

Built for EaseMotion CSS — a lightweight CSS framework focused on reusable animations, interactive effects, and human-readable class naming.

## Overview

This showcase demonstrates practical uses of the CSS `attr()` function for displaying dynamic attribute values directly from HTML attributes.

The examples illustrate how metadata stored in HTML can be surfaced visually without JavaScript.

## Features

- Profile role badges
- Dynamic status labels
- CSS-only tooltips
- Pricing plan ribbons
- Notification counters
- Product tags
- URL previews
- Image captions
- Responsive design
- Pure HTML and CSS

## Usage

```html
<div data-role="Frontend Developer"></div>
```

```css
.profile-card::after {
  content: attr(data-role);
}
```

## Main Classes

```css
.profile-card
.status-card
.tooltip-btn
.pricing-card
.notification-icon
.product-card
.link-card
.image-card
```

## Why It Fits EaseMotion CSS

- Demonstrates practical CSS techniques
- Human-readable implementation
- Reusable UI patterns
- Lightweight and dependency-free
- Useful for dashboards and modern interfaces

## Files

- demo.html
- style.css
- README.md
