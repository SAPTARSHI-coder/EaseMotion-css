# Card with Animated Gradient Border

## 1. What does this do?
Shows a card with a gradient border that rotates continuously around its perimeter using CSS `@property` and `conic-gradient`.

## 2. How is it used?
Add `class="gradient-border-card"` to a wrapper element and place the card content inside a `.card-content` child. Apply a `.variant-*` class to change the gradient palette.
```html
<div class="gradient-border-card variant-green">
  <div class="card-content">...</div>
</div>
```

## 3. Why is it useful?
Provides a premium, eye-catching border effect without JavaScript or external assets. Fully respects `prefers-reduced-motion` and degrades gracefully in browsers that don't support `@property`.
