# Playground Swing

### What does this do?

It shows an empty playground swing rocking back and forth on its A-frame. The seat and both chains swing together as one unit, pivoting from the top beam, while a cloud drifts across a sunny sky. Under reduced motion the swing hangs still.

### How is it used?

```html
<div class="frame"><span class="beam"></span><span class="leg l1"></span></div>
<div class="swing">
  <span class="chain cl"></span>
  <span class="chain cr"></span>
  <span class="seat"></span>
</div>
```

The A-frame legs are two pairs of rotated bars sharing the top beam. The key detail is the `swing` wrapper: its `transform-origin` sits at the beam, not at the seat, so when it rotates the chains and seat arc around the crossbar exactly like a real swing instead of spinning in place. The chain links come from a repeating gradient.

### Why is it useful?

Playground, childhood, and park themes use a swing. This builds a rocking swing with pure CSS shapes and animation, no images, with a reduced motion fallback.
