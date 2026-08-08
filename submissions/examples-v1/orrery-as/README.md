# Orrery

### What does this do?

It shows a brass orrery: three planets circling a glowing sun on dashed orbit rings, with a moon orbiting the outermost planet. Each planet keeps its own year, the inner ones fast and the outer ones slow. Hovering or focusing the model spins the whole mechanism up, and every body speeds up in proportion, so the relative periods stay correct even at five times the speed. Under reduced motion the system holds its positions.

### How is it used?

```html
<div class="orrery" tabindex="0">
  <div class="armO a3">
    <span class="planetO p3"></span>
    <div class="moonArm"><span class="moonO"></span></div>
  </div>
</div>
```

Each planet hangs off a zero-sized arm pinned at the centre of the model, and it is the arm that rotates, not the planet, so a single `rotate` sweeps the body around a perfect circle without any orbital maths. The moon nests one level deeper: its own arm sits inside the outer planet's arm, so it inherits that planet's orbit and adds its own on top, which is how a real moon moves. Hovering shortens all four durations by the same factor, which is why the model speeds up without losing its relative periods.

### Why is it useful?

Astronomy, mechanical, and system or hierarchy themes use an orrery. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
