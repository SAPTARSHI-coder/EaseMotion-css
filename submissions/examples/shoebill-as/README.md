# Shoebill

### What does this do?

It shows a shoebill standing motionless in a swamp, doing what shoebills famously do: almost nothing. It holds perfectly still for most of the cycle, then tilts that enormous clog of a bill downward in one sudden movement before straightening up again. Its wing flexes, it blinks slowly, reeds sway, and rings spread on the water. Under reduced motion it simply stands.

### How is it used?

```html
<div class="shoe">
  <div class="headSb">
    <span class="billSb"></span>
    <span class="hookSb"></span>
  </div>
</div>
```

The bill is one element with four different corner radii: heavily rounded where it meets the face, nearly square along the top, and swollen underneath, which is what produces the blunt clog shape a shoebill has and which no symmetric radius can. The hooked tip is a second small element rotated slightly. The stillness is deliberate: the head holds a flat zero rotation for 62 percent of a seven second cycle before the tilt, and a long hold followed by a fast `cubic-bezier` is what makes a slow bird read as watchful rather than idle.

### Why is it useful?

Wetland, wildlife, and stillness or patience themes use a shoebill. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
