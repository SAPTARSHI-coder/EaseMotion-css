# Birthday Cake

### What does this do?

It shows a two tier birthday cake on a plate with five striped candles whose flames flicker on staggered timings. The top tier has dripping white frosting and the bottom tier has a row of colored dots. Under reduced motion the flames hold still.

### How is it used?

```html
<div class="cake">
  <span class="frosting"></span>
  <span class="tier top"></span>
  <span class="tier bottom"></span>
</div>
<span class="candle"><span class="flame"></span></span>
```

Each candle is a striped bar topped by a teardrop `flame` that flickers with the `flick` keyframes on its own delay. The frosting uses box shadows for the drips, and the bottom tier gets dot decorations from layered radial gradients.

### Why is it useful?

Celebrations, birthdays, and reward moments use a cake. This builds a candlelit birthday cake with pure CSS shapes and flame animation, no images, with a reduced motion fallback.
