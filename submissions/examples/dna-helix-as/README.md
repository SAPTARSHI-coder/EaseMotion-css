# DNA Helix

### What does this do?

It shows a rotating DNA double helix. Twelve rungs stack vertically, each with a blue node and a pink node joined by a base-pair bar. The two strands swing side to side out of phase so they wind around each other, the bars shrink as the strands turn edge-on, and staggered delays make the whole ladder appear to spin. Under reduced motion the helix rests in a spread-open pose.

### How is it used?

```html
<div class="helix">
  <span class="rung r1"><i class="bar"></i><b class="node na"></b><b class="node nb"></b></span>
  ...
</div>
```

Each strand node runs a `swing` animation that slides it across the rung and scales it down when it passes to the back, while the opposite strand runs the mirrored `swing-rev`. The connecting `bar` scales toward zero width when the strands cross, selling the twist. A staggered `animation-delay` per rung offsets each step of the spiral.

### Why is it useful?

Science, biology, and lab dashboards use a DNA motif. This builds an animated double helix with pure CSS transforms, no images or JavaScript, with a reduced motion fallback.
