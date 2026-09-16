# CSS-Only Masonry Image Gallery

## What does this do?
A Pinterest-style staggered masonry grid layout achieved completely without JavaScript positioning libraries (like Masonry.js).

## How is it used?
```html
<div class="ease-masonry-grid">
    <div class="ease-masonry-item">
        <img src="your-image.jpg">
    </div>
    <div class="ease-masonry-item">
        <img src="your-image2.jpg">
    </div>
    <!-- Add as many items of varying heights as you want -->
</div>
```

## Why does it fit EaseMotion CSS?
Traditionally, developers resort to heavy JavaScript libraries to calculate absolute positioning for masonry grids to avoid large gaps. This component cleverly leverages native CSS `column-count` and `break-inside: avoid` to let the browser natively flow elements into a beautiful, gap-free masonry layout, ensuring maximum performance.

## Tech Stack
- HTML
- CSS (No JavaScript)
