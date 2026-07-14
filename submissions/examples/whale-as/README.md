# Whale

### What does this do?

It shows a whale surfacing in the sea. It bobs and rolls on the swell, its tail fluke flicks, it blinks, and a spout of water puffs up from its blowhole and drifts away. Under reduced motion the whale rests and the spout is hidden.

### How is it used?

```html
<div class="whale">
  <span class="tail"></span>
  <span class="body"></span>
  <span class="belly"></span>
  <span class="fin"></span>
</div>
<span class="spout sp1"></span>
```

The body is a rounded blue gradient with a pale belly layered over it, and the fluke is a `clip-path` notch anchored at its inner edge so the `flick` animation swings it from where it meets the body. Each spout droplet runs `blow`, rising from the blowhole while growing and fading, with offsets so the puff looks like a burst rather than a single ball.

### Why is it useful?

Ocean, nature, and calm or friendly mascot themes use a whale. This builds a surfacing whale with pure CSS shapes and animation, no images, with a reduced motion fallback.
