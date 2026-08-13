# Origami Paper Fold Rating

## What does this do?

This submission creates an accessible pure CSS rating and feedback component with an origami paper fold visual style.

## How is it used?

Add the stylesheet and use the demo structure:

```html
<link rel="stylesheet" href="style.css" />

<form class="origami-rating-card" aria-labelledby="origami-rating-title">
  <fieldset class="origami-rating-options">
    <legend id="origami-rating-title">Fold your rating</legend>
    <input type="radio" id="origami-rate-5" name="origami-rating" value="5" />
    <label for="origami-rate-5">5</label>
  </fieldset>
</form>
```

## Why is it useful?

It gives EaseMotion users a lightweight rating UI that feels dimensional and polished while remaining semantic, keyboard-friendly, responsive, and dependency-free.
