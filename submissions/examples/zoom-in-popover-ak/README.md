# zoom-in-popover

### What does this do?
A minimalist popover that scales up and fades in from its trigger, built with pure CSS transforms — no JS animation logic.

### How is it used?
```html
<div class="popover-zoom">
  <button class="popover-zoom__trigger">View Details</button>
  <div class="popover-zoom__panel">
    <p class="popover-zoom__title">Title</p>
    <p class="popover-zoom__text">Body text here.</p>
  </div>
</div>
```
Opens on trigger `:focus` or panel `:hover` by default (keyboard-accessible), and can also be toggled manually by adding/removing the `is-open` class via JS if you want click-to-open behavior.

### Why is it useful?
Popovers are a common UI need in dashboards and tech landing pages, and this keeps the effect subtle and performant with only `transform`/`opacity` transitions (GPU-friendly, no layout thrashing). Fully responsive, works down to mobile widths, and respects `prefers-reduced-motion` by disabling the scale transform while keeping the fade.
