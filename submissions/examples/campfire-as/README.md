# Campfire

### What does this do?

It shows a crackling campfire. Three stacked flame layers flicker and lean at different speeds, embers rise and fade above the fire, a warm glow breathes around it, and two crossed logs sit at the base. Under reduced motion the flames hold their shape and the embers stay hidden.

### How is it used?

```html
<div class="campfire">
  <div class="flames">
    <span class="flame outer"></span>
    <span class="flame mid"></span>
    <span class="flame inner"></span>
  </div>
  <div class="logs"><span class="log l1"></span><span class="log l2"></span></div>
</div>
```

Each flame is a teardrop gradient shape anchored at its base, and the `flicker` animation scales and skews the three layers at staggered speeds so the fire never looks static. Embers use the `rise` animation to float up and fade, and the glow breathes with a radial gradient.

### Why is it useful?

Camping, cozy, and night scenes use a fire. This builds a living campfire with pure CSS shapes and animation, no images, with a reduced motion fallback.
