# Hammock

### What does this do?

It shows a striped hammock slung between two palm trees on a beach. The hammock swings gently from its ropes, the palm fronds rustle overhead, and the sun beats down on the sand. Under reduced motion the hammock and fronds hold still.

### How is it used?

```html
<span class="trunk lt"></span>
<span class="fronds lf"></span>
<div class="swing">
  <span class="rope lr"></span>
  <div class="bed"></div>
</div>
```

The hammock bed is a curved shape filled with a repeating stripe gradient, hung from two angled ropes. The whole `swing` wrapper rotates around a pivot at the top, so the ropes and bed swing together as one. Each palm frond stores its angle in a `--r` custom property so the shared `rustle` animation can squash it without losing its fan angle.

### Why is it useful?

Beach, vacation, and relaxation themes use a hammock. This builds a swinging hammock with pure CSS shapes and animation, no images, with a reduced motion fallback.
