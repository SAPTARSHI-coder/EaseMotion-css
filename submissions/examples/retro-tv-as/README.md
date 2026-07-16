# Retro TV

### What does this do?

It shows an old wooden television set showing test-card color bars. Static crawls over the picture, a bright tracking band rolls slowly down the screen, the channel flips every few seconds (the bars shift color and the tuning dial clicks around), and the power light blinks. Under reduced motion the picture holds steady.

### How is it used?

```html
<div class="tube">
  <span class="bars"></span>
  <span class="static"></span>
  <span class="roll"></span>
  <span class="curve"></span>
</div>
```

The color bars are a single hard-stop `linear-gradient` with seven bands. Static is two fine repeating gradients layered on top, and the `roll` band sweeps down with a moving `top` to mimic a CRT losing vertical hold. The channel change is a `steps(1)` animation, so the picture and the dial jump instantly rather than fading, the way a real set clicks over.

### Why is it useful?

Retro, media, and 404 or offline states use an old TV. This builds a working retro TV with pure CSS gradients and animation, no images, with a reduced motion fallback.
