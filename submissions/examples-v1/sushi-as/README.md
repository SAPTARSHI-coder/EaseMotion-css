# Sushi

### What does this do?

It shows two maki rolls and a nigiri on a bamboo mat. Each piece bobs on its own offset so the plate feels alive, and steam drifts up off the rice. Under reduced motion everything settles.

### How is it used?

```html
<div class="roll r1">
  <span class="nori"></span>
  <span class="rice"></span>
  <span class="fill"></span>
</div>
```

The rice grains are a stack of hard stop `radial-gradient` circles painted into the rice disc, so they clip to the round shape for free instead of needing a dozen grain elements. The filling gets its green wrap from a plain `box-shadow` spread rather than a second element. The bamboo mat is one `repeating-linear-gradient`, and the salmon on the nigiri gets its fatty stripes from a second repeating gradient layered over the base colour.

### Why is it useful?

Food, menu, and restaurant themes use sushi. This builds a plate of it with pure CSS gradients and animation, no images, with a reduced motion fallback.
