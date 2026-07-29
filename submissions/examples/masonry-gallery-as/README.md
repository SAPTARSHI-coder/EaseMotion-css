# Masonry Gallery

### What does this do?

It lays out tiles of different heights into balanced columns with no row gaps, the classic masonry look. It uses the CSS columns layout, so the number of columns adapts to the width and tiles never break across a column.

### How is it used?

```html
<div class="masonry">
  <figure class="tile" style="--h: 160px"></figure>
  <figure class="tile" style="--h: 220px"></figure>
</div>
```

Set each tile height with the `--h` custom property (or let real images set their own height). `break-inside: avoid` keeps a tile whole within its column.

### Why is it useful?

Image and card galleries with varied heights look best in a masonry layout. This builds a responsive masonry grid with the columns layout, dropping from three columns to two below 520px, using only CSS with no scripts.
