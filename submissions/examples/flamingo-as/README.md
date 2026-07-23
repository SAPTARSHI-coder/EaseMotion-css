# Flamingo

### What does this do?

It shows a flamingo standing on one leg in a lagoon at sunset, with the other leg tucked up. It teeters slightly to keep its balance, dips its head toward the water and back, ruffles its wing, and blinks, while ripples spread across the water. Under reduced motion the bird stands still.

### How is it used?

```html
<div class="bird">
  <span class="leg"></span>
  <span class="tuck"></span>
  <span class="body"></span>
  <span class="neck"></span>
  <div class="head"><span class="beak"></span></div>
</div>
```

The neck and head share the same `dip` animation and duration, so the head stays attached to the top of the neck as it lowers to the water instead of drifting off it. The beak's two-tone pink and black tip comes from a hard-stop gradient inside a `clip-path`, and the whole bird teeters from a pivot at the standing foot.

### Why is it useful?

Tropical, summer, and balance or elegance themes use a flamingo. This builds a one-legged flamingo with pure CSS shapes and animation, no images, with a reduced motion fallback.
