# Traffic Light

### What does this do?

It shows a traffic light on a pole that cycles through its phases: red, then green, then a brief amber, and back. The active lamp lights up with a colored glow while the others stay dark. Under reduced motion it holds a steady red.

### How is it used?

```html
<div class="signal">
  <span class="lamp red"></span>
  <span class="lamp amber"></span>
  <span class="lamp green"></span>
</div>
```

Each lamp runs the same length animation, but its keyframes turn its color and glow on only during its slice of the cycle, so the phases hand off in sequence. The housing and pole complete the fixture.

### Why is it useful?

Status displays, simulations, and teaching tools use a traffic light metaphor. This builds a working signal with pure CSS keyframes and glows, with no images or script, and a static fallback for reduced motion.
