# Pelican

### What does this do?

It shows a pelican perched on a harbour post at sunset, with a fish wriggling in its pouch. The bird shifts its weight on the post, its wing flexes, the fish squirms, and it blinks. Under reduced motion it perches still.

### How is it used?

```html
<div class="pelican">
  <span class="bodyp"></span>
  <span class="wingp"></span>
  <span class="pouch"></span>
  <span class="beakp"></span>
  <span class="fishp"></span>
</div>
```

The pouch is one element: an asymmetric `border-radius` with four different corner pairs makes it hang heavy and lopsided under the beak, the way a full pouch actually sags, without a clip path. The wing flexes from `transform-origin: 20% 30%`, its shoulder joint, so it lifts from where it attaches rather than rotating around its own middle, and the fish squirms with a combined rotate and translate so it looks like it is fighting rather than just spinning.

### Why is it useful?

Coastal, wildlife, and harbour themes use a pelican. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
