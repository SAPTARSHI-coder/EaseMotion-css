# Rating / Star Component

## What does this do?
Adds a star rating component with readonly display (supports decimal/half-star ratings like 3.5), interactive click-to-rate mode, size variants (sm, md, lg), and color variants (warning, success, danger).

## How is it used?
```html
<!-- Readonly display -->
<div class="ease-rating ease-rating-readonly" data-rating="3.5">
  <span class="ease-star">&#9733;</span>
  <span class="ease-star">&#9733;</span>
  <span class="ease-star">&#9733;</span>
  <span class="ease-star">&#9733;</span>
  <span class="ease-star">&#9733;</span>
  <span class="ease-rating-value">3.5 / 5</span>
</div>

<!-- Interactive -->
<div class="ease-rating ease-rating-interactive" data-rating="0">
  <span class="ease-star" data-value="1">&#9733;</span>
  <span class="ease-star" data-value="2">&#9733;</span>
  ...
</div>
```

## Why is it useful?
EaseMotion CSS lacked a star rating component essential for reviews, product ratings, and feedback forms. This component provides:
- **Display mode** — shows ratings with half-star support via CSS gradient clip
- **Interactive mode** — hover preview + click to select, updates ARIA attributes
- **3 sizes** — sm (16px), md (24px), lg (32px)
- **Color variants** — primary/warning (default), success, danger
- **Numeric display** — shows "X / 5" alongside stars
- **Accessible** — `role="img"`, `aria-label`, `aria-valuenow`, `aria-valuemax`
- **Dark mode** — adapts via `data-theme` CSS variables

Fixes #12450
