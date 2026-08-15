# Foucault Pendulum Rating

## What does this do?

This submission creates an accessible pure CSS rating and feedback component inspired by a Foucault pendulum swing.

## How is it used?

Add the stylesheet and use the demo structure:

```html
<link rel="stylesheet" href="style.css" />

<form class="foucault-rating-card" aria-labelledby="foucault-rating-title">
  <fieldset class="foucault-rating-options">
    <legend id="foucault-rating-title">Rate the motion</legend>
    <input type="radio" id="rate-5" name="rating" value="5" />
    <label for="rate-5">5</label>
  </fieldset>
</form>
```

## Why is it useful?

It gives EaseMotion users a polished rating pattern that remains keyboard-friendly, dependency-free, dark-mode compatible, and suitable for product feedback sections.
