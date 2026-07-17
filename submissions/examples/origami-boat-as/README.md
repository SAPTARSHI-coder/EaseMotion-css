# Origami Boat

### What does this do?

It shows a folded paper boat riding a puddle in the rain. It rocks on the water, its two paper sails luff against each other, rings spread out from the hull, and rain falls past. Hovering or focusing it rocks the boat harder, as if the water got choppy. Under reduced motion it floats still.

### How is it used?

```html
<div class="obot" tabindex="0">
  <span class="hullOb"></span>
  <span class="sailL"></span>
  <span class="sailR"></span>
</div>
```

The hull is a `clip-path` trapezoid and each sail a `clip-path` triangle, because folded paper is all straight edges and a `border-radius` cannot produce a crease. The two sails run opposite phases of the same luff: the left is at full width while the right is squeezed, then they swap. That counter-motion is what makes the paper look like it is catching air on alternating sides rather than pulsing as one lump. The centre fold is a three pixel bar, and it is the single line that makes the whole thing read as folded rather than cut out.

### Why is it useful?

Origami, childhood, and rainy day themes use a paper boat. This builds one with pure CSS clip paths and animation, no images and no JavaScript, with a reduced motion fallback.
