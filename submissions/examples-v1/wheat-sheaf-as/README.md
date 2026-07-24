# Wheat Sheaf

### What does this do?

It shows a bound sheaf of wheat standing in a field at golden hour. The whole sheaf sways in the breeze and chaff drifts away on the wind. Under reduced motion it stands still.

### How is it used?

```html
<div class="sheaf">
  <span class="stalk st1"></span>
  <span class="stalk st2"></span>
  <span class="twine"></span>
</div>
```

Every stalk is a single element. The stem is the element itself, and the grain head is its `::before` pseudo-element, painted with a `repeating-linear-gradient` angled at 64 degrees so the kernels sit in the diagonal rows a real ear of wheat has. That means seven stalks and seven full heads cost seven nodes, not fourteen. The stalks fan out from one shared `transform-origin: 50% 100%` at the base of the bundle, each turned to its own angle from a `--wr` custom property, so the sheaf spreads from the point where the twine binds it.

### Why is it useful?

Harvest, farming, and autumn themes use a wheat sheaf. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
