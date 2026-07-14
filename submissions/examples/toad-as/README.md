# Toad

### What does this do?

It shows a toad sitting on a lily pad at night, watching a fly circle overhead. Its body breathes, its throat balloons out as it croaks, its eyelids drop and open, and the pad bobs under it. Under reduced motion it sits still with its eyes open.

### How is it used?

```html
<div class="toad">
  <span class="bodyTo"></span>
  <span class="throat"></span>
  <span class="eyeTo etl"></span>
  <span class="lidTo ltl"></span>
</div>
```

The croak is a two-axis squash: the throat scales to `scaleY(1.5) scaleX(1.12)` from `transform-origin: 50% 20%`, its top edge, so it balloons downward and outward from where it joins the jaw rather than inflating around its own centre. The blink is inverted from the usual approach: the eyelid sits at `scaleY(0.06)`, a thin line hidden at the top of the eye, and briefly scales to full size, so the closed state is the animated one and the eye is open by default. That also makes the reduced motion fallback a one-liner, since pinning the lid at its resting scale leaves the toad wide-eyed.

### Why is it useful?

Pond, night, and creature themes use a toad. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
