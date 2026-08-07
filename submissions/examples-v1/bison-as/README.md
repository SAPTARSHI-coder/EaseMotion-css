# Bison

### What does this do?

It shows a bison plodding across the prairie at sunset. Its four legs stride in sequence, its heavy head swings with the walk, its beard swings under it, its tail swats, and dust kicks up behind its hooves. Under reduced motion it stands still.

### How is it used?

```html
<div class="bison">
  <span class="humpB"></span>
  <div class="headB2">
    <span class="mane2"></span>
    <span class="hornB2 hbl"></span>
  </div>
</div>
```

The shaggy hump and mane get their coarse fur from `repeating-linear-gradient`s angled across each shape and clipped by its own `border-radius`, so the pile follows the curve of the body instead of running flat across it. The head swings from `transform-origin: 88% 74%`, the point where the skull meets the massive shoulders, so the beard and horns travel with it as one weight. The dust puffs share the walk's 2.4 second clock, so each kick lands on the stride rather than drifting on its own timing.

### Why is it useful?

Prairie, wildlife, and heavy or powerful themes use a bison. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
