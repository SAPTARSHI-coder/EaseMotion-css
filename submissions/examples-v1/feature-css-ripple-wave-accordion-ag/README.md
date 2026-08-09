# CSS Ripple-Wave Accordion

## What does this do?
This is a lightweight, pure CSS/HTML accordion component that features a smooth ripple-wave expansion animation when interacted with, designed for creative portfolio layouts.

## How is it used?
Include the provided `style.css` and use the following HTML structure. The hidden checkbox hack manages the state without requiring any JavaScript.

```html
<div class="ease-ripple-accordion-ag">
  <div class="accordion-item-ag">
    <input type="checkbox" id="item1-ag" class="accordion-checkbox-ag">
    <label class="accordion-header-ag" for="item1-ag">
      Header Text
      <span class="icon-ag"></span>
    </label>
    <div class="accordion-content-ag">
      <p>Your accordion content goes here.</p>
    </div>
  </div>
</div>
```

## Why is it useful?
It provides a highly performant and accessible interactive UI element that relies entirely on CSS transitions rather than JavaScript. It adheres to EaseMotion's philosophy by maintaining minimal browser overhead and providing automatic fallbacks for `prefers-reduced-motion`.
