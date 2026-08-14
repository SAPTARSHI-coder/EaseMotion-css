# Number Count-Up

An animated counter that ticks up from 0 to its target value once it scrolls into view — ideal for stat/metric cards.

## What it does
An `IntersectionObserver` detects when a `.count-up` element enters the viewport, then uses `requestAnimationFrame` to increment the displayed number from 0 to `data-target` over `data-duration` milliseconds. A small CSS "pop" plays on completion.

## How to use it
Add the `count-up` class to a `<span>`, set `data-target` (final number) and `data-duration` (ms), and include the observer script once per page.

```html
<span class="count-up" data-target="42" data-duration="1200">0</span>