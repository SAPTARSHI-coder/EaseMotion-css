# Card Image Padding Specificity Fix (Issue #14068)

## What does this do?

Demonstrates the correct usage of `.ease-card-image` where both the base and modifier classes must be on the same element for the `padding: 0` override and its mobile counterpart to work correctly.

## How is it used?

```html
<!-- CORRECT: Both classes on same element -->
<div class="ease-card ease-card-image">
  <img class="ease-card-img" src="photo.jpg" alt="" />
  <div class="ease-card-body">Text</div>
</div>

<!-- WRONG: Classes on separate elements — padding override fails on mobile -->
<div class="ease-card">
  <div class="ease-card-image">...</div>
</div>
```

## Why is it useful?

Documents the correct class co-location requirement so developers know both classes must be on the same DOM element for the mobile padding override to function correctly.
