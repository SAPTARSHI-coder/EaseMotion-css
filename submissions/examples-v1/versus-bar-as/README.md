# Versus Bar

### What does this do?

It shows a head to head versus bar that splits a single track into two colored segments for option A and option B, sized by a percent from a custom property, with each side labeled and a VS badge over the seam.

### How is it used?

```html
<div class="versus" style="--a: 63%">
  <div class="vs-labels"><span class="a-label"><b>63%</b> Cats</span><span class="b-label">Dogs <b>37%</b></span></div>
  <div class="vs-bar">
    <span class="a"></span>
    <span class="b"></span>
    <span class="vs-badge">VS</span>
  </div>
</div>
```

Set the A share with the `--a` custom property; the A segment takes that width and the B segment fills the rest. The VS badge is positioned at the same `--a` boundary so it sits on the seam.

### Why is it useful?

Polls and match ups show two sides competing on one bar. This splits a single bar into two sized segments with labels and a center badge, driven by a custom property, using only CSS. The A side animates in and holds still under reduced motion.
