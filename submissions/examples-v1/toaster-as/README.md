# Toaster

### What does this do?

It shows a chrome toaster with two slices in the slots. Hovering or focusing it toasts them: the elements glow orange inside, the browning dial turns, and the two slices pop up out of the slots with a springy bounce, one just after the other. It works with no JavaScript. Under reduced motion the toast pops without easing.

### How is it used?

```html
<div class="toaster" tabindex="0">
  <span class="toast tl"></span>
  <span class="toast tr"></span>
  <div class="body"><span class="slot sl"></span><span class="lever"></span><span class="glow"></span></div>
</div>
```

The toast slices sit behind the toaster body in the stacking order, so they are hidden in the slots until they rise. On `:hover` or `:focus` their `top` transitions upward with a springy `cubic-bezier`, the second slice offset by a small `transition-delay` so they pop in sequence, while the heating `glow` fades in and the lever rises.

### Why is it useful?

Kitchen, morning, and "ready" or completion themes use a toaster. This builds an interactive toaster with pure CSS shapes and transitions, no images or JavaScript, with a reduced motion fallback.
