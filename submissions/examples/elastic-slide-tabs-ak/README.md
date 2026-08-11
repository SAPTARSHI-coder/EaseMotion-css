# elastic-slide-tabs

### What does this do?
A pill-style tab switcher where a sliding background "elastically" snaps to the active tab using a spring-like `cubic-bezier` easing curve.

### How is it used?
```html
<div class="tabs-elastic">
  <span class="tabs-elastic__slider"></span>
  <button class="tabs-elastic__btn is-active">Overview</button>
  <button class="tabs-elastic__btn">Analytics</button>
</div>
```
On click, JS measures the target button's width/offset and updates `--tabs-elastic-width` / `--tabs-elastic-offset` on the wrapper — the CSS transition on the slider handles the elastic motion.

### Why is it useful?
Gives minimalist tech dashboards a tactile, modern tab-switching feel (similar to iOS segmented controls) using pure CSS custom properties and transitions rather than a JS animation library. Fully responsive (stacks to full-width pills on small screens) and falls back to a faster linear ease under `prefers-reduced-motion`.
