# Spinning Wheel

### What does this do?

It shows a spinning wheel at work. The great wheel turns, the flyer whirls, the bobbin fills, the treadle rocks, the thread pulls taut, and wisps of wool float away. Hovering or focusing it drives the wheel four times faster, as if someone leaned into the treadle. Under reduced motion everything stops.

### How is it used?

```html
<div class="swheel" tabindex="0">
  <div class="rimWrap">
    <span class="rimSw"></span>
    <span class="spokesSw"></span>
  </div>
  <span class="flyer"></span>
</div>
```

The wheel's sixteen spokes are a single `repeating-conic-gradient`, so the whole spoked disc is one element rather than a fan of bars, and the rim around it is just a thick `border` on a circle. Everything that rotates lives inside the `rimWrap`, so hovering only has to shorten one `animation-duration` to speed the entire wheel up. The wool is a stack of hard stop `radial-gradient` puffs painted into one rounded element, so the fleece clips to its own outline for free.

### Why is it useful?

Craft, fairytale, and cottage themes use a spinning wheel. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
