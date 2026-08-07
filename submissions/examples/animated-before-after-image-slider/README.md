# ease-compare-slider

A draggable before/after image comparison slider for **EaseMotion CSS**, powered by a native range input for full accessibility.

## Usage

```html
<div class="compare-slider">
  <img class="compare-slider-after" src="after.jpg" alt="After">
  <div class="compare-slider-before-wrap">
    <img class="compare-slider-before" src="before.jpg" alt="Before">
  </div>
  <div class="compare-slider-handle"></div>
  <input type="range" class="compare-slider-input" min="0" max="100" value="50">
</div>