# Beaver

### What does this do?

It shows a beaver gnawing a log. Its head chews on a fast loop, its whole body leans into the work, wood chips spit out and tumble away, the log judders under the bite, its paddle tail slaps, and it blinks. Under reduced motion the gnawing stops.

### How is it used?

```html
<div class="beav">
  <span class="tailb"></span>
  <span class="bodyb"></span>
  <div class="headb">
    <span class="faceb"></span>
    <span class="tooth"></span>
  </div>
</div>
```

The chew is a rotation of the head wrapper around `transform-origin: 20% 90%`, the jaw hinge at the back of the mouth. Because the pivot sits at the hinge rather than the centre of the head, a seven degree turn swings the teeth through a real bite while the skull stays put. The tail slaps from `transform-origin: 100% 50%` where it meets the body, and its crosshatch scales come from a `repeating-linear-gradient` laid over the base colour, so the whole scaly paddle is one element.

### Why is it useful?

Wildlife, forest, and building or "hard at work" themes use a beaver. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
