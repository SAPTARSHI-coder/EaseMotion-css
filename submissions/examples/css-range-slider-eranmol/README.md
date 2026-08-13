# CSS Range Slider

Custom-styled range input slider with animated thumb and value tooltip, built entirely with pure CSS.

## What does this do?

It provides a fully styled range input component with a custom thumb, hover ring animation, color variants (indigo, orange, purple), and a value tooltip above the thumb. The native `<input type="range">` is completely restyled using `appearance: none` and pseudo-elements.

## How is it used?

Drop `demo.html` and `style.css` into your project. Use the standard HTML range input with the `range-slider` class:

```html
<label for="volume" class="slider-demo__label">Volume</label>
<div class="slider-wrapper">
  <input
    type="range"
    id="volume"
    class="range-slider"
    min="0"
    max="100"
    value="60"
    aria-label="Volume"
  >
  <span class="range-slider__tooltip" aria-hidden="true">60</span>
</div>
```

Add a modifier class for color variants: `range-slider--warm` (orange) or `range-slider--accent` (purple).

## Why is it useful?

Range sliders are a common UI element for filters, settings, and pricing tools. The native browser slider looks inconsistent across platforms and is hard to style. This component gives developers a polished, cross-browser range slider with smooth hover animations, accessible focus states, color variants, and dark mode support, all without any JavaScript.
