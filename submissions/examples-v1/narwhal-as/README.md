# Narwhal

### What does this do?

It shows a narwhal swimming under the ice. It rises and dips as it moves, the tail flukes waggle, the flipper paddles, the eye blinks, and bubbles trail up behind it. Under reduced motion it holds position.

### How is it used?

```html
<div class="narw">
  <span class="bodyn"></span>
  <span class="tusk"></span>
  <div class="tailn">
    <span class="fluke fkl"></span>
    <span class="fluke fkr"></span>
  </div>
</div>
```

The tusk is one element: a `clip-path` tapers a bar into a spike and a `repeating-linear-gradient` cuts the spiral grooves across it, so the whole horn is a single node. The tail is two flukes that keep their spread angles in a `--fr` custom property and hinge from a shared `transform-origin` at the tail root, while the waggle runs on their wrapper, so the flukes keep their V shape instead of being flattened by the animation.

### Why is it useful?

Ocean, arctic, and playful mascot themes use a narwhal. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
