# Chandelier

### What does this do?

It shows a candlelit chandelier hanging from a chain. Six candles sit around a gilded hoop, each flame flickering on its own timing, crystal drops sway beneath, and a warm halo of light breathes around the whole fixture. Under reduced motion everything holds still.

### How is it used?

```html
<div class="lier">
  <div class="ring">
    <span class="arm ar1"><span class="candle"><span class="flame"></span></span></span>
  </div>
  <span class="hoop"></span>
  <div class="drops"><span class="crys cy1"></span></div>
</div>
```

The six arms are placed with `translate()` offsets computed around an ellipse rather than a circle, which gives the ring a sense of perspective, so the front candles sit lower than the back ones. Each flame runs a `flicker` that scales and skews it, and the whole fixture sways from a pivot at the top of its chain, so the chandelier swings from the ceiling rather than its own center.

### Why is it useful?

Elegant, historical, and ambience or lighting themes use a chandelier. This builds a candlelit chandelier with pure CSS shapes and animation, no images, with a reduced motion fallback.
