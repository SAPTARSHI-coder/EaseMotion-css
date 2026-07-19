# Pangolin

### What does this do?

It shows a pangolin snuffling along an anthill, flicking out its long tongue while ants scurry away. It waddles, its tail sways, its legs step in turn, and it blinks. Hovering or focusing it makes every armour scale lift and flare outward. Under reduced motion it stands still with its scales flat.

### How is it used?

```html
<div class="pang" tabindex="0">
  <span class="bodyPa"></span>
  <span class="scalePa spa1"></span>
  <div class="headPa"><span class="tongue"></span></div>
</div>
```

Each scale keeps its own lean in a `--pa2` custom property, and the flare multiplies it with `calc(var(--pa2) * 2.2)`, so every plate opens further along the direction it already points rather than snapping to a shared angle. The tongue is the other trick: it sits at `scaleX(0.1)` by default and shoots to full length from `transform-origin: 100% 50%`, its root at the mouth, so it extends forward out of the snout instead of growing from its own middle. Because it returns to a tenth of its width, the retracted tongue is effectively invisible without needing a second state.

### Why is it useful?

Wildlife, conservation, and unusual animal themes use a pangolin. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
