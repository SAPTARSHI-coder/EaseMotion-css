# ease-rating-stars — Rating Stars Component

1. **What does this add?** A CSS-only rating stars component supporting full stars, half stars (gradient text-clip), review-count text, size variants (`-sm`/`-lg`), color variants (`-success`/`-danger`), and an interactive hover-preview rating picker.
2. **How is it used?**
```html
<!-- Static rating with half-star + review count -->
<div class="ease-rating">
  <span class="ease-rating-star ease-rating-star-filled">★</span>
  <span class="ease-rating-star ease-rating-star-filled">★</span>
  <span class="ease-rating-star ease-rating-star-filled">★</span>
  <span class="ease-rating-star ease-rating-star-filled">★</span>
  <span class="ease-rating-star ease-rating-star-half">★</span>
  <span class="ease-rating-text">4.5 (1,248 reviews)</span>
</div>

<!-- Size & color variants -->
<div class="ease-rating ease-rating-sm">...</div>
<div class="ease-rating ease-rating-lg ease-rating-success">...</div>

<!-- Interactive hover-preview -->
<div class="ease-rating-preview">
  <span class="ease-rating-star">★</span>
  <span class="ease-rating-star">★</span>
  <span class="ease-rating-star">★</span>
  <span class="ease-rating-star">★</span>
  <span class="ease-rating-star">★</span>
</div>
```
3. **Why is it useful?** Star ratings are a ubiquitous UI pattern across e-commerce, SaaS, review sites, and course marketplaces. This is pure CSS — half-stars use a `background-clip: text` gradient trick, and the hover-preview uses the `:hover ~` sibling selector for a CSS-only "click-to-rate" feel — composable with EaseMotion CSS's existing color/size token conventions and zero JavaScript, aligned with the framework's human-readable, animation-first philosophy.