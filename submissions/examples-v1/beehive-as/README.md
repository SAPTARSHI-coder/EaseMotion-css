# Beehive

### What does this do?

It shows a honeybee hive hanging from a leafy branch, with an entrance hole at the bottom. Three striped bees circle around the hive on their own elliptical paths, their wings buzzing, so the scene feels alive. Under reduced motion the bees and wings hold still.

### How is it used?

```html
<div class="hive">
  <span class="tier t1"></span>
  <span class="hole"></span>
</div>
<span class="bee be1"></span>
```

The hive is a stack of rounded honey-colored tiers with a dark entrance, hanging by a thread from the branch. Each bee is a striped ellipse with two wings drawn by `::before` and `::after`, and it runs the `fly` animation, rotating and translating around the hive on an oval path sized by its `--r` and `--ry` custom properties, while the wings flap with a fast `buzz`.

### Why is it useful?

Nature, garden, and productivity or "busy" themes use bees. This builds a beehive with circling bees using pure CSS shapes, custom properties, and animation, no images, with a reduced motion fallback.
