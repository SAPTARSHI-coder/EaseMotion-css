# Avocado

### What does this do?

It shows an avocado on a cutting board. It bobs gently and the pit shifts in its socket. Hovering or focusing it splits the fruit: the two halves swing apart and tilt away from each other, revealing the pit on one side and the empty hollow on the other. Under reduced motion it sits closed and still.

### How is it used?

```html
<div class="avo" tabindex="0">
  <div class="halfA left">
    <span class="skinA"></span>
    <span class="fleshA"></span>
    <span class="pitA"></span>
  </div>
</div>
```

Only one half is actually designed. The right half reuses the same markup and is flipped with `scaleX(-1)`, so the two sides mirror each other exactly without a second set of shapes. That flip is the reason the hover rule looks asymmetric: the right half's `translateX(-34px)` moves it right on screen, because it is written in the flipped half's own coordinate space. The flesh is a `radial-gradient` running from pale yellow at the pit out to green at the skin, which is what makes it read as a cut surface rather than a flat disc.

### Why is it useful?

Food, brunch, and fresh produce themes use an avocado. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
