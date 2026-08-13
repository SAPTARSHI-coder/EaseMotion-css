# Velvet Smooth Transition Rating

## What does this do?

This submission adds an accessible pure CSS rating and feedback component with a velvet smooth transition visual style.

## How is it used?

Link the stylesheet and use the semantic rating form structure:

```html
<link rel="stylesheet" href="style.css" />

<form class="velvet-rating-card" aria-labelledby="velvet-rating-title">
  <fieldset class="velvet-rating-options">
    <legend id="velvet-rating-title">Smooth rating</legend>
    <input type="radio" id="velvet-rate-5" name="velvet-rating" value="5" />
    <label for="velvet-rate-5">5</label>
  </fieldset>
</form>
```

## Why is it useful?

It gives EaseMotion users a soft, refined feedback pattern that stays dependency-free, keyboard-friendly, responsive, and polished for dark themed interfaces.
