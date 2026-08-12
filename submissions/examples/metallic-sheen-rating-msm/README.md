# Metallic Sheen Rating

## What does this do?

This submission adds an accessible pure CSS rating and feedback component with a metallic sheen visual style.

## How is it used?

Link the stylesheet and use the semantic rating form structure:

```html
<link rel="stylesheet" href="style.css" />

<form class="metallic-rating-card" aria-labelledby="metallic-rating-title">
  <fieldset class="metallic-rating-options">
    <legend id="metallic-rating-title">Polish the rating</legend>
    <input type="radio" id="metallic-rate-5" name="metallic-rating" value="5" />
    <label for="metallic-rate-5">5</label>
  </fieldset>
</form>
```

## Why is it useful?

It gives EaseMotion users a sleek, responsive, dependency-free feedback UI with strong keyboard support and a premium dark-mode look.
