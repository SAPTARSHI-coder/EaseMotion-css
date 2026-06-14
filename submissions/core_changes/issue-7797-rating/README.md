# Star Rating Component

## 1. What does this do?
Adds a CSS-first star rating component with `data-rating` attribute binding, hover interaction, size variants (sm/base/lg), color variants (gold/primary/secondary/success), and a readonly mode — all driven by CSS custom properties and a single `@layer easemotion-components` stylesheet.

## 2. How is it used?

```html
<!-- Static: 3 out of 5 stars -->
<div class="ease-rating" data-rating="3">
  <span class="ease-rating-star">&#9733;</span>
  <span class="ease-rating-star">&#9733;</span>
  <span class="ease-rating-star">&#9733;</span>
  <span class="ease-rating-star">&#9733;</span>
  <span class="ease-rating-star">&#9733;</span>
</div>

<!-- Small, primary colored, readonly -->
<div class="ease-rating ease-rating-sm" data-rating="4" data-color="primary" data-readonly>
  <span class="ease-rating-star">&#9733;</span>
  <span class="ease-rating-star">&#9733;</span>
  <span class="ease-rating-star">&#9733;</span>
  <span class="ease-rating-star">&#9733;</span>
  <span class="ease-rating-star">&#9733;</span>
</div>
```

## 3. Why is it useful?
Star ratings are a universal UI pattern for reviews and product feedback. EaseMotion CSS had no built-in rating component. This fills that gap with a lightweight implementation that works statically (CSS-only) and can be enhanced with a few lines of JS for interactivity. The `data-rating` attribute approach keeps the markup clean and framework-agnostic.

## Issue
Fixes #7797
