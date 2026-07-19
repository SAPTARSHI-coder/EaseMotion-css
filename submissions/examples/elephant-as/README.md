# Elephant

### What does this do?

It shows an elephant that swings its trunk, flaps its big ear, flicks its tail, and every few seconds squirts a little water up out of its trunk. Under reduced motion the elephant stands still and no water sprays.

### How is it used?

```html
<div class="eleph">
  <span class="bodye"></span>
  <div class="heade">
    <span class="eare"></span>
    <div class="trunke"><span class="tseg t1"></span></div>
  </div>
</div>
```

The trunk is three tapering segments, each rotated a little more than the one above and anchored at its top edge, so together they curve. Its wrinkles come from a repeating gradient layered over the fill. The whole trunk swings from a `transform-origin` at the head, so the segments arc as one limb instead of pivoting individually.

### Why is it useful?

Safari, wildlife, and memory or strength themes use an elephant. This builds a trunk-swinging elephant with pure CSS shapes and animation, no images, with a reduced motion fallback.
