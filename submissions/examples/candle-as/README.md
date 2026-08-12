# Candle

### What does this do?

It shows a lit candle with a flickering flame. A teardrop flame with a bright inner core sits on a wick above a wax body, casting a soft pulsing glow, with a wax drip on the side. The flame flickers and the halo pulses in sync. Under reduced motion the flame holds steady.

### How is it used?

```html
<div class="candle">
  <span class="glow"></span>
  <span class="flame"><span class="flame-inner"></span></span>
  <span class="wick"></span>
  <div class="wax"></div>
</div>
```

The flame is a rounded teardrop with a hot gradient, flickering via `flame-flicker` (small scale and tilt), and a radial `glow` pulses with it. The wax body is a gradient block with a melted rim drawn by `::before`.

### Why is it useful?

Ambiance, celebrations, and cozy themes use a candle. This builds a flickering candle with a glow using pure CSS shapes and keyframes, no images, with a reduced motion fallback.
