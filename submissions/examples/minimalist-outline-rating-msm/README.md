# Minimalist Outline Rating

## What does this do?

This submission adds an accessible pure CSS rating and feedback component with a minimalist outline visual style.

## How is it used?

Link the stylesheet and use the semantic rating form structure:

```html
<link rel="stylesheet" href="style.css" />

<form class="outline-rating-card" aria-labelledby="outline-rating-title">
  <fieldset class="outline-rating-options">
    <legend id="outline-rating-title">Outline rating</legend>
    <input type="radio" id="outline-rate-5" name="outline-rating" value="5" />
    <label for="outline-rate-5">5</label>
  </fieldset>
</form>
```

## Why is it useful?

It gives EaseMotion users a clean, lightweight, dependency-free feedback component with visible focus states, responsive layout, and calm dark-mode contrast.
