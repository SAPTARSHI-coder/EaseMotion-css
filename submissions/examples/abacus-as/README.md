# Abacus

### What does this do?

It shows a wooden soroban abacus with seven rods. Each rod has one heaven bead above the reckoning bar and four earth beads below it. Hovering or focusing a rod slides its beads toward the bar, as if you were counting on it, and the beads snap with a springy motion. It works with no JavaScript.

### How is it used?

```html
<div class="abacus">
  <div class="rod">
    <span class="bead heaven"></span>
    <span class="rod-bar"></span>
    <span class="bead earth e1"></span>
  </div>
</div>
```

Each rod is a column with a thin wire drawn by `::before` and its own segment of the reckoning bar, so the segments line up into one continuous bar. The beads are gradient ellipses positioned along the wire, and a `:hover` or `:focus-within` on a rod applies a `transform` that slides the active beads to the bar with a spring easing.

### Why is it useful?

Education, math, and finance interfaces use a counting tool. This builds an interactive abacus with pure CSS shapes and transitions, no images or JavaScript, with a reduced motion fallback.
