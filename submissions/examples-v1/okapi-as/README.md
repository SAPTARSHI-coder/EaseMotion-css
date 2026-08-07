# Okapi

### What does this do?

It shows an okapi standing in the rainforest understory. It shifts its weight, its legs step in sequence, its tail flicks, its head lowers and lifts as it browses, its ears swivel, and leaves fall through the canopy light. Under reduced motion it stands still.

### How is it used?

```html
<div class="okapi">
  <span class="bodyO"></span>
  <span class="stripeO so1"></span>
  <span class="neckO"></span>
  <div class="headO"><span class="muzzleO"></span></div>
</div>
```

The zebra striping on the hind legs, which is the okapi's signature marking, is one `repeating-linear-gradient` per leg, so a whole banded limb costs a single property rather than a stack of bars. The head browses from `transform-origin: 84% 100%`, the base of the neck, so the long muzzle swings down toward the floor while the poll stays put, which is what makes it read as reaching for leaves rather than nodding. The four legs share one rule and one keyframe, each offset by a quarter of the cycle, so the gait cascades instead of marching in lockstep.

### Why is it useful?

Wildlife, rainforest, and rare animal themes use an okapi. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
