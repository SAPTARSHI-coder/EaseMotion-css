# Water Mill

### What does this do?

It shows a water mill beside a river. Water pours down the flume onto the wheel, the wheel turns under it, splashes fly up where the paddles hit the water, and the mill window glows. Under reduced motion the wheel stops and the water stops running.

### How is it used?

```html
<div class="wheelWm">
  <span class="rimWm"></span>
  <span class="spokeWm"></span>
  <span class="paddleWm pw1"></span>
</div>
```

The eight paddles are placed with `rotate(var(--pw)) translateY(-72px)`: rotate first, then push outward, so one angle both aims each paddle and sets its distance from the hub, and eight at 45 degree steps ring the wheel from a single rule. The spokes are a `repeating-conic-gradient` rather than eight more elements. The falling water is one element whose `background-position` animates downward on a fast loop, which makes the stripes appear to stream while the element itself never moves.

### Why is it useful?

Rural, machinery, and energy or "always running" themes use a water mill. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
