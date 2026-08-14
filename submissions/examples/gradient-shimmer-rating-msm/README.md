# Gradient Shimmer Rating

## What does this do?

This submission adds an accessible pure CSS rating and feedback component with a gradient shimmer visual style.

## How is it used?

Link the stylesheet and use the semantic rating form structure:

```html
<link rel="stylesheet" href="style.css" />

<form class="shimmer-rating-card" aria-labelledby="shimmer-rating-title">
  <fieldset class="shimmer-rating-options">
    <legend id="shimmer-rating-title">Shimmer score</legend>
    <input type="radio" id="shimmer-rate-5" name="shimmer-rating" value="5" />
    <label for="shimmer-rate-5">5</label>
  </fieldset>
</form>
```

## Why is it useful?

It gives EaseMotion users a bright, responsive, dependency-free feedback component with lively shimmer motion, keyboard support, and safe reduced-motion behavior.
