# Scorpion

### What does this do?

It shows a scorpion creeping across moonlit sand. Its six legs scuttle in a wave, the pincers open and snap shut, the tail flexes and the stinger jabs forward, and its eyes glint. Under reduced motion it freezes.

### How is it used?

```html
<div class="scorp">
  <span class="legs lg1"></span>
  <span class="thorax"></span>
  <span class="seg sg1"></span>
  <span class="stinger"></span>
  <span class="claw cwl"></span>
</div>
```

The six legs share one rule, one pivot at the body, and one `scuttle` keyframe. Each leg stores its own splay angle in `--lr`, and the keyframe steps to `rotate(calc(var(--lr) + 8deg))`, so every leg swings 8 degrees from wherever it already sits instead of all snapping to the same angle. Staggered `animation-delay` values turn that into a wave down the body. The pincers use the same trick with `--cr`, and each claw is a circle with one border side set to `transparent`, which leaves an open, hooked jaw.

### Why is it useful?

Desert, danger, and creature themes use a scorpion. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
