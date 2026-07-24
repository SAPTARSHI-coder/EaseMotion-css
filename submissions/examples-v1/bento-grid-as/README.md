# Bento Grid

### What does this do?

It lays out a bento style feature grid where tiles of different sizes span multiple columns and rows to make a lively asymmetric layout. Each tile has an icon and a title, one is an accent tile, and tiles lift on hover.

### How is it used?

```html
<div class="bento">
  <article class="bento-tile span-2-2 accent">
    <span class="bt-ic"><svg>...</svg></span>
    <h3>Lightning fast</h3>
    <p>...</p>
  </article>
  <article class="bento-tile span-2-1">...</article>
  <article class="bento-tile">...</article>
</div>
```

The grid is four columns with fixed row height. Add `span-2-2` for a large square, `span-2-1` for a wide tile, or `span-1-2` for a tall tile. It collapses to two columns below 480px.

### Why is it useful?

Bento grids are a popular way to show product highlights in an asymmetric layout. This builds a bento grid with span classes for wide, tall, and large tiles, using only CSS grid. The hover lift is removed under reduced motion.
