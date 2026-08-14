# Subtle Elevate Rating

## What does this do?

This submission adds an accessible pure CSS rating and feedback component with a subtle elevate visual style.

## How is it used?

Link the stylesheet and use the semantic rating form structure:

```html
<link rel="stylesheet" href="style.css" />

<form class="elevate-rating-card" aria-labelledby="elevate-rating-title">
  <fieldset class="elevate-rating-options">
    <legend id="elevate-rating-title">Lift your rating</legend>
    <input type="radio" id="elevate-rate-5" name="elevate-rating" value="5" />
    <label for="elevate-rate-5">5</label>
  </fieldset>
</form>
```

## Why is it useful?

It gives EaseMotion users a calm, responsive, dependency-free feedback control with polished elevation states, keyboard support, and dark-mode-friendly contrast.
