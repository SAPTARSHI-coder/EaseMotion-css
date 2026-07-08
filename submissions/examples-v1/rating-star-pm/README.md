# Star Rating Component

## 1. What does this do?
A CSS-first star rating component using `data-rating` attribute binding with size variants (sm/base/lg), color variants (gold/primary/secondary/success), hover interaction, and a readonly mode.

## 2. How is it used?

```html
<div class="rating-star" data-rating="3">
  <span class="star">&#9733;</span>
  <span class="star">&#9733;</span>
  <span class="star">&#9733;</span>
  <span class="star">&#9733;</span>
  <span class="star">&#9733;</span>
</div>

<div class="rating-star rating-star-sm" data-rating="4" data-color="primary" data-readonly>
  <span class="star">&#9733;</span>
  <span class="star">&#9733;</span>
  <span class="star">&#9733;</span>
  <span class="star">&#9733;</span>
  <span class="star">&#9733;</span>
</div>
```

## 3. Why is it useful?
Star ratings are a universal UI pattern for reviews and feedback. The `data-rating` attribute approach keeps markup clean and framework-agnostic. Works statically with CSS only, with optional JS for interactivity.
