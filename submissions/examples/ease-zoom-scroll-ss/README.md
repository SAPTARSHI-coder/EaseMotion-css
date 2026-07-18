# ease-zoom-scroll-ss

## What does this do?
It adds a scroll-progress-linked zoom effect where the element scales from smaller to full size as visibility increases in the viewport.

## How is it used?
Use the class on your target element and ensure the observer updates the CSS variable.

```html
<section class="ease-zoom-scroll-ss" data-zoom-scroll>
  <h2>Zoom on scroll</h2>
</section>
```

The JavaScript observer configuration used in this submission:

```js
const thresholds = [0, 0.25, 0.5, 0.75, 1];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    target.style.setProperty("--ease-zoom-progress", entry.intersectionRatio);
  });
}, { threshold: thresholds });
```

## Why is it useful?
It fits EaseMotion CSS by providing a human-readable, animation-first utility concept that communicates visual hierarchy as users scroll.
