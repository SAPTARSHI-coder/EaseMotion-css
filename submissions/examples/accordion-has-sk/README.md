# CSS-Only Accordion using `:has()` Selector

## What does this do?
An accordion built on native `<details>`/`<summary>` elements, styled entirely with CSS. Uses `:has(details[open])` to style the parent container when an item is open, and the CSS Grid row-height trick for smooth height animation.

## How is it used?

```html
<div class="accordion">
  <div class="accordion__item">
    <details>
      <summary class="accordion__header">
        Question or title
        <svg class="accordion__icon"><!-- chevron --></svg>
      </summary>
      <div class="accordion__body">
        <div class="accordion__body-inner">
          Answer or content here.
        </div>
      </div>
    </details>
  </div>
</div>

<!-- Flush variant -->
<div class="accordion accordion--flush">…</div>

<!-- Light variant -->
<div class="accordion accordion--light">…</div>
```

## Why is it useful?
Demonstrates three modern CSS techniques together: `<details>` for zero-JS toggle, `:has()` for parent-targeting based on descendant state (border highlight + sibling dimming), and the `grid-template-rows: 0fr → 1fr` trick for smooth height animation without JavaScript or `max-height` hacks. Respects `prefers-reduced-motion`.
