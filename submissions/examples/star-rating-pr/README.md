# Interactive Star Rating System

## 1. What does this do?

A pure CSS + JS interactive star rating component where users can
hover and click to select a rating from 1 to 5 stars.

## 2. How is it used?

```html
<div class="star-rating">
  <input type="radio" id="star5" name="rating" value="5" />
  <label for="star5">&#9733;</label>
  <!-- repeat for star4 down to star1 -->
</div>
```

Stars highlight on hover and stay highlighted on selection.
A message updates dynamically based on the chosen rating.

## 3. Why is it useful?

Star ratings are a universal UI pattern for feedback and reviews.
This implementation uses only CSS sibling selectors and radio inputs —
no external libraries — which fits EaseMotion CSS's philosophy of
lightweight, pure-CSS interaction utilities.
