# Ease Skeleton Card

## What does this do?

A skeleton loading placeholder representing a content card while the actual content is being loaded.

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<div class="skeleton-card">
    <div class="skeleton skeleton-image"></div>

    <div class="skeleton-content">
        <div class="skeleton skeleton-title"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text short"></div>
        <div class="skeleton skeleton-button"></div>
    </div>
</div>
```

### Features

- Image placeholder
- Text placeholders
- Button placeholder
- Shimmer animation
- Responsive layout
- Pure CSS
- No JavaScript required

## Why is it useful?

Skeleton cards are commonly used while API-driven content, images, or other card data are loading.

This component provides a clean loading-state pattern with a lightweight shimmer animation while following the animation-first philosophy of EaseMotion CSS.