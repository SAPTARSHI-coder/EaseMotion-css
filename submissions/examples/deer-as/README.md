# Deer

### What does this do?

It shows a deer standing in a moonlit clearing while snow falls. It breathes, its ears flick, it blinks, its tail flicks, and a hoof shifts now and then. Under reduced motion the deer stands still and no snow falls.

### How is it used?

```html
<div class="deer">
  <span class="antler anl"></span>
  <span class="headd"></span>
  <span class="bodyd"></span>
  <span class="legd lf1"></span>
</div>
```

Each antler is a single element: the tines are two offset `box-shadow` copies of the beam, so a branching rack costs no extra nodes. Each ear parks its rest angle in an `--er` custom property, and the flick keyframe multiplies it with `calc(var(--er) * 1.6)`, so one animation twitches both ears outward from wherever they already sit rather than snapping them to a shared angle. The pine trees are pure `border` triangles.

### Why is it useful?

Forest, winter, and holiday themes use a deer. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
