# Fishbowl

### What does this do?

It shows a glass fishbowl with three fish swimming back and forth. Each fish flips to face the way it is going when it reaches the glass, bubbles rise from the gravel, and the water weeds sway. Under reduced motion the fish and weeds rest and the bubbles are hidden.

### How is it used?

```html
<div class="bowl">
  <span class="water"></span>
  <span class="fish f1"></span>
  <span class="weed wd1"></span>
  <span class="gravel"></span>
</div>
```

Each fish is a rounded body with a triangular `clip-path` tail and an eye drawn by pseudo-elements. The `swim` animation moves it across the bowl and flips it with `scaleX(-1)` at each end, so it always faces its direction of travel. Bubbles rise and fade, weeds sway from their base, and the bowl clips everything with `overflow: hidden`.

### Why is it useful?

Pet, aquarium, and calm ambient themes use a fishbowl. This builds a living fishbowl with pure CSS shapes and animation, no images, with a reduced motion fallback.
