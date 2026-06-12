# Star Rating Component

CSS-only star rating component using radio inputs and reverse sibling selectors.

## Files

- demo.html - Interactive demo
- style.css - Rating styles
- README.md - Documentation

## Classes

- ease-rating - Basic 5-star rating
- ease-rating-half - Half-star rating (0.5 increments)
- ease-rating-small / large - Size variants
- ease-rating-gold / blue / green - Color variants

## Usage

```html
<div class="ease-rating">
  <input type="radio" name="rating" id="star5" value="5" />
  <label for="star5" class="star">★</label>
  <input type="radio" name="rating" id="star4" value="4" />
  <label for="star4" class="star">★</label>
  <input type="radio" name="rating" id="star3" value="3" />
  <label for="star3" class="star">★</label>
  <input type="radio" name="rating" id="star2" value="2" />
  <label for="star2" class="star">★</label>
  <input type="radio" name="rating" id="star1" value="1" />
  <label for="star1" class="star">★</label>
</div>
```
