# Corner Ribbon Card

### What does this do?

It shows cards with a diagonal ribbon across the top corner for labels such as featured, sale, or new, with a gentle hover lift.

### How is it used?

```html
<div class="ribbon-card">
  <span class="ribbon">Featured</span>
  <h3>Pro Plan</h3>
  <p>Everything you need to grow.</p>
</div>
```

The card clips its overflow, and the ribbon is an absolutely positioned, rotated banner in the corner. Use `is-sale` or `is-new` to change the ribbon color.

### Why is it useful?

Corner ribbons highlight status on product cards, pricing, and listings. This places a rotated ribbon inside a clipped card and adds a hover lift, using only CSS with no images. The hover lift is disabled under `prefers-reduced-motion: reduce`.
