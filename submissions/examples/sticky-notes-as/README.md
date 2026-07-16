# Sticky Notes

### What does this do?

It shows a corkboard of sticky notes. Each note is tilted at its own angle, held by a colored pushpin, with a folded shadow corner. Hovering a note straightens it, lifts it with a bigger shadow, and brings it to the front.

### How is it used?

```html
<article class="note yellow" style="--r: -4deg;">
  <span class="pin"></span>
  <h3>Groceries</h3>
  <p>Oat milk, tomatoes, coffee beans.</p>
</article>
```

Set each note's tilt with the `--r` inline variable and pick a color class (`yellow`, `pink`, `blue`, `green`). The pushpin is a small radial gradient circle, the folded corner is an `::after` triangle, and `:hover` rotates the note back to level and scales it up.

### Why is it useful?

Note boards, kanban walls, and memo widgets use a sticky note look. This delivers that tactile board with tilts, pushpins, and a lift on hover, built entirely with CSS and no images.
