# 3D Flip Card Component

## What does this add?

Introduces an `.ease-flip-card` component that reveals back-side content (like product details, pricing, or social links) through a smooth 3D rotation when hovered.

## How does a developer use it?

```html
<div class="ease-flip-card">
  <div class="ease-flip-card-inner">
    <div class="front">
      <!-- Front Content Here -->
    </div>
    <div class="back">
      <!-- Back Content Here -->
    </div>
  </div>
</div>
```

Be sure to give the `.ease-flip-card` element a specific width and height in your project so that the inner absolutely-positioned faces have dimensions to fill!

## Why does it fit EaseMotion CSS?

3D flip cards are incredibly popular in modern web design. This adds a highly interactive and premium motion component to the EaseMotion CSS library, utilizing advanced CSS transforms, all while strictly adhering to the "animation-first" philosophy using pure CSS and zero JavaScript.
