# Dartboard

### What does this do?

It shows a dartboard with twenty alternating cream and black segments, red and green double and triple rings, a green outer bull and red inner bull, and a dart that flies in and sticks near the center on a loop. Under reduced motion the dart is already stuck.

### How is it used?

```html
<div class="dartboard">
  <span class="segments"></span>
  <span class="rings"></span>
  <span class="bull-green"></span>
  <span class="bull-red"></span>
  <span class="dart">...</span>
</div>
```

The segments come from a `repeating-conic-gradient`, and a second red and green conic is masked with a `radial-gradient` into two ring bands for the double and triple. The bull is two centered circles, and the dart is a CSS tip, shaft, and flight that animates in.

### Why is it useful?

Games, scoring, and target or goal metaphors use a dartboard. This builds one with pure CSS conic gradients and masks plus an animated dart, no images, with a reduced motion fallback.
