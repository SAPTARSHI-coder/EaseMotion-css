# Pomegranate

### What does this do?

It shows a pomegranate on a plate with a few loose seeds beside it. The fruit bobs, its crown turns slowly, and light glints off the rind. Hovering or focusing it opens the fruit: the pale pith and the packed red arils fade in, as if it had been cut across. Under reduced motion it stays whole and still.

### How is it used?

```html
<div class="pom" tabindex="0">
  <span class="rindP"></span>
  <span class="arils"></span>
  <span class="crownP"></span>
</div>
```

The entire cut face is a single element. Eight hard stop `radial-gradient` circles paint the seeds, and the last layer in the same stack is a soft gradient for the pale pith they sit in, so one background does the whole interior and the seeds clip to the disc for free. Keeping it to one element also matters for the reveal: it is one `opacity` transition, and stacking a second translucent layer on top of the rind produced visible compositing seams in Chromium, which disappeared once the two were merged. The crown is a `conic-gradient` alternating between colour and `transparent`, which cuts the pointed calyx out of one square element without a clip path.

### Why is it useful?

Fruit, food, and seasonal themes use a pomegranate. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
