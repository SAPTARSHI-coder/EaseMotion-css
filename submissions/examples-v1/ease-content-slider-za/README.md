# CSS Content Slider Component

## What does this do?
A pure CSS content carousel controlled by hidden radio buttons with slide indicators, supporting image slides and testimonial cards.

## How is it used?
```html
<div class="cls-slider">
  <input type="radio" name="s" id="s1" checked>
  <input type="radio" name="s" id="s2">
  <div class="cls-track">
    <div class="cls-slide">Slide 1</div>
    <div class="cls-slide">Slide 2</div>
  </div>
  <div class="cls-nav">
    <label for="s1" class="cls-dot"></label>
    <label for="s2" class="cls-dot"></label>
  </div>
</div>
```

## Why is it useful?
Creates accessible carousels and sliders without JavaScript. Multiple slide sets per page with independent controls. Smooth CSS transitions, responsive, and keyboard accessible.
