# Horseshoe Crab

### What does this do?

It shows a horseshoe crab crawling up a beach as the surf washes in. It moves diagonally as it crawls, its legs paddle in sequence beneath the shell, its spiked tail steers, foam rolls over the sand, and ripples spread behind it. Under reduced motion it rests on the sand.

### How is it used?

```html
<div class="hcrab">
  <span class="carapace"></span>
  <span class="ridgeH"></span>
  <span class="telson"></span>
</div>
```

The domed shell's radiating ridges come from a `repeating-conic-gradient` anchored at `50% 90%`, near the bottom of the carapace rather than its centre. Moving the gradient's origin down is what makes the ridges splay outward and forward the way a real carapace is sculpted, instead of radiating evenly like a wheel. The tail is a `clip-path` trapezoid, so it tapers to a point that a `border-radius` could not give it, and it steers from `transform-origin: 50% 0` where it joins the body.

### Why is it useful?

Beach, marine, and ancient or fossil themes use a horseshoe crab. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
