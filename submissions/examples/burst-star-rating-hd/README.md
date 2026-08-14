# Burst Star Rating (burst-star-rating-hd)

## What does this do?
An interactive star rating selector component that triggers a gorgeous dual-colored radial particle burst animation on selection.

## How is it used?
Implement using semantic radio inputs and labels:
```html
<div class="star-rating">
  <input type="radio" id="star5" name="rating" value="5">
  <label for="star5">★<span class="burst"></span></label>
  <!-- Repeat for stars 4, 3, 2, 1 -->  
</div>
```

## Why is it useful?
It creates delightful micro-interactions for rating systems, feedback surveys, and reviews in websites using pure CSS keyframes and shadows, avoiding resource-heavy JavaScript canvas libraries.
