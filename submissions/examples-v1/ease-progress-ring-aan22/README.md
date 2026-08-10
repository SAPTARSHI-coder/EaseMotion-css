# Ease Animated Progress Ring / Donut Chart

## What does this do?
Circular SVG progress rings that animate from 0 to their target value when they enter the viewport. Features a percentage label in the center, smooth stroke-dashoffset animation, gradient/custom stroke color, and multiple size variants.

## How is it used?
```html
<div class="ease-progress-ring" data-progress="75" data-color="#6366f1">
  <svg viewBox="0 0 100 100">
    <circle class="ease-progress-ring__track" cx="50" cy="50" r="42"/>
    <circle class="ease-progress-ring__fill" cx="50" cy="50" r="42"/>
  </svg>
  <div class="ease-progress-ring__label">75%</div>
</div>
```
Use `ease-progress-ring--sm` or `ease-progress-ring--lg` modifier classes for size variants. A small amount of vanilla JS (included in `demo.html`) reads `data-progress`/`data-color` and uses an `IntersectionObserver` to trigger the fill animation once the ring scrolls into view.

## Why is it useful?
Circular progress indicators are visually impressive and widely used on portfolios and dashboards. This fits EaseMotion's animation-first philosophy — animated rings draw attention to key metrics in a visually compelling way.
