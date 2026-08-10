# ease-rating Star Rating Component

1. **What does this do?** A CSS-only star rating component using radio inputs and reverse sibling selectors — supports hover states, selected states, and a half-star variant.
2. **How is it used?**
```html
<!-- 5-star rating -->
<div class="ease-rating">
  <input type="radio" name="rating" id="star5" value="5"/>
  <label for="star5">&#9733;</label>
  <input type="radio" name="rating" id="star4" value="4"/>
  <label for="star4">&#9733;</label>
  <input type="radio" name="rating" id="star3" value="3"/>
  <label for="star3">&#9733;</label>
  <input type="radio" name="rating" id="star2" value="2"/>
  <label for="star2">&#9733;</label>
  <input type="radio" name="rating" id="star1" value="1"/>
  <label for="star1">&#9733;</label>
</div>
```
3. **Why is it useful?** Fully interactive star rating with zero JavaScript — uses `flex-direction: row-reverse` and `~ label` sibling selectors to highlight stars on hover and selection, aligned with EaseMotion CSS's animation-first philosophy.