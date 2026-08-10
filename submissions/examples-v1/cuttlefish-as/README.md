# Cuttlefish

### What does this do?

It shows a cuttlefish hovering in open water. Its skirt fins ripple continuously, colour bands pulse and travel across its mantle the way chromatophores do, its W-shaped pupil narrows, its arms sway, and its feeding tentacle stretches. Under reduced motion it hangs still.

### How is it used?

```html
<div class="cuttle">
  <span class="mantle"></span>
  <span class="chroma"></span>
  <span class="finC fcl"></span>
</div>
```

The colour display is one element: a `repeating-linear-gradient` of purple bands whose `opacity` and `background-position` both animate, so the bands brighten and slide sideways at the same time. Animating the background position rather than the element is what makes the pattern appear to travel across the skin while the body stays put, which is exactly how a cuttlefish's chromatophores read. The fins undulate with `scaleX` plus a small `skewY`, and each pivots from the edge nearest the body so they ripple outward rather than shrinking toward their own middles.

### Why is it useful?

Ocean, camouflage, and hypnotic or shifting themes use a cuttlefish. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
