# Diamond Facet Edge Rating

## What does this do?

This submission adds an accessible pure CSS rating and feedback component with a diamond facet edge visual style.

## How is it used?

Link the stylesheet and use the semantic rating form structure:

```html
<link rel="stylesheet" href="style.css" />

<form class="diamond-rating-card" aria-labelledby="diamond-rating-title">
  <fieldset class="diamond-rating-options">
    <legend id="diamond-rating-title">Rate the shine</legend>
    <input type="radio" id="diamond-rate-5" name="diamond-rating" value="5" />
    <label for="diamond-rate-5">5</label>
  </fieldset>
</form>
```

## Why is it useful?

It gives EaseMotion users a polished, dependency-free rating UI that is responsive, keyboard-friendly, dark-mode compatible, and visually distinct for premium feedback flows.
