# Roulette Wheel

### What does this do?

It shows a roulette wheel that spins while a ball circles the rim the other way. Alternating red and black pockets with a single green zero make up the wheel, numbers ride around the inner edge, a wooden rim and metal hub frame it, and a pointer marks the top. Under reduced motion it holds still.

### How is it used?

```html
<div class="rw-wheel">
  <div class="rw-nums"><span class="rw-num" style="--a: 30deg;">32</span></div>
  <span class="rw-hub"></span>
</div>
<div class="rw-ball-track"><span class="rw-ball"></span></div>
```

The pockets come from a `conic-gradient` of red, black, and one green wedge. Numbers are placed with a rotate then counter rotate transform by their `--a` angle. The wheel spins one way and the `rw-ball-track` spins in reverse so the ball travels opposite the wheel.

### Why is it useful?

Casino, games, and prize wheel features use a roulette wheel. This builds a spinning wheel with a counter rotating ball using pure CSS gradients and rotation, no images, with a reduced motion fallback.
