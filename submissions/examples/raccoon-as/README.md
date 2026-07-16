# Raccoon

### What does this do?

It shows a masked raccoon sneaking up on a bin at night. It shuffles closer, tilts its head to peek, its ringed tail swishes, and the bin lid keeps lifting open. Under reduced motion the raccoon and lid hold still.

### How is it used?

```html
<div class="raccoon">
  <span class="tailr"></span>
  <div class="headr"><span class="maskr mr1"></span><span class="snoutr"></span></div>
</div>
<div class="binr"><span class="lidr"></span></div>
```

The tail's rings come from a single angled `repeating-linear-gradient`, so the whole banded pattern is one property and it bends with the tail as it swishes. The bandit mask is two dark patches rotated outward behind the eyes. The bin lid pivots from its hinge corner, so it swings open rather than sliding.

### Why is it useful?

Night, mischief, and "trash panda" or bandit themes use a raccoon. This builds a sneaking raccoon with pure CSS shapes and animation, no images, with a reduced motion fallback.
