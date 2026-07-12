# Animated Progress Bar

## What does this do?
This adds a set of fully styled, animated progress bar components. On page load, each bar smoothly fills from 0% to its target value using a CSS `@keyframes` animation. Colour variants (`primary`, `success`, `warning`, `danger`) and a scrolling striped variant are included.

## How is it used?
Create a `.progress-track` wrapper and place a `.progress-fill` div inside it. Set the fill target using the `--progress-value` CSS custom property. Add a colour modifier class to change the bar colour.

Example:
```html
<div class="progress-track" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-fill primary" style="--progress-value: 75%;"></div>
</div>
```

For the striped variant, add the `.striped` class:
```html
<div class="progress-fill primary striped" style="--progress-value: 60%;"></div>
```

## Why is it useful?
- The fill animation uses `@keyframes fill-grow` driven by a CSS custom property (`--progress-value`), making it effortless to set any target percentage without JavaScript.
- The striped scrolling effect uses a `repeating-linear-gradient` animated via `background-position` — a lightweight, GPU-composited technique that works in all modern browsers.
- Includes `role="progressbar"` and `aria-valuenow` attributes, making bars fully accessible to screen readers out of the box.
