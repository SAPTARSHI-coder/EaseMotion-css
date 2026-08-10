# Submarine

### What does this do?

It shows a yellow submarine cruising underwater. The hull rises and dips as it moves, the propeller spins, the searchlight beam pulses ahead of it, the portholes catch light in turn, and bubbles trail up from the stern. Under reduced motion everything holds position.

### How is it used?

```html
<div class="sub">
  <span class="hull"></span>
  <div class="propw">
    <span class="blade b1"></span>
    <span class="blade b2"></span>
    <span class="blade b3"></span>
  </div>
</div>
```

The propeller is three blades that share one `transform-origin: 50% 100%` at the hub, each parked at its own angle in a `--bl` custom property. The spin animation is applied to the wrapper, not the blades, so the blades keep their 0, 120 and 240 degree offsets while the whole fan turns. The searchlight is a single `clip-path` wedge with a fading gradient, so it reads as a cone of light without any extra elements.

### Why is it useful?

Ocean, exploration, and loading themes use a submarine. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
