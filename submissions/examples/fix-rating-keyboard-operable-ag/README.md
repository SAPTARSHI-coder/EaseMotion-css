# Fix ease-rating Keyboard Operability

## What does this do?
Replaces non-interactive `<span>` stars with a `<input type="radio">` pattern,
making the rating component fully keyboard-operable and screen-reader accessible.

## How is it used?
```html
<div class="ease-rating" role="radiogroup" aria-label="Star rating">
  <input class="ease-rating__input" type="radio" name="rating" id="star5" value="5" aria-label="5 stars">
  <label class="ease-rating__label" for="star5">★</label>
  <!-- repeat for 4, 3, 2, 1 -->
</div>
```

## Why is it useful?
`<input type="radio">` provides native keyboard interaction (Arrow keys to
navigate, Space to select) and announces the selected value to screen readers.
Fixes: #35846
