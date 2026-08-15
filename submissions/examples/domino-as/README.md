# Domino

### What does this do?

It shows a set of domino tiles, each split into two halves by a center divider with pips arranged in the classic patterns. The tiles read as a double six, a five three, and a two four, and each lifts and tilts on hover.

### How is it used?

```html
<div class="tile">
  <div class="half"><span class="pip a"></span><span class="pip i"></span></div>
  <span class="divider"></span>
  <div class="half"><span class="pip a"></span><span class="pip e"></span><span class="pip i"></span></div>
</div>
```

Each half is a three by three grid with named areas, and pips carry the class of the cell they sit in, so any value from zero to six is built by adding the right pips. A `divider` splits the tile, which lifts on hover.

### Why is it useful?

Board games, counters, and playful UIs use dominoes. This renders true domino tiles from CSS grid areas and gradient pips, no images, with a hover lift.
