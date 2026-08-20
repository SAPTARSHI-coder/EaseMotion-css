# Ease Image Placeholder

## What does this do?

A responsive placeholder for missing or unavailable images with optional messaging, multiple aspect ratios, and subtle animation.

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<div class="image-placeholder landscape">
    <div class="placeholder-icon">▧</div>
    <span>Image unavailable</span>
</div>
```

### Available aspect ratios

Landscape:

```html
<div class="image-placeholder landscape">
    <div class="placeholder-icon">▧</div>
    <span>Image unavailable</span>
</div>
```

Square:

```html
<div class="image-placeholder square">
    <div class="placeholder-icon">▧</div>
    <span>No image available</span>
</div>
```

Portrait:

```html
<div class="image-placeholder portrait">
    <div class="placeholder-icon">▧</div>
    <span>Image unavailable</span>
</div>
```

### Features

- Placeholder icon
- Optional message
- Multiple aspect ratios
- Responsive sizing
- Hover animation
- Subtle visual effect
- Pure CSS
- No JavaScript required

## Why is it useful?

Image placeholders are commonly used in galleries, profile pages, product listings, dashboards, and content cards when an image is unavailable or cannot be loaded.

This component provides a clean and reusable fallback pattern with subtle interaction feedback while following the animation-first philosophy of EaseMotion CSS.