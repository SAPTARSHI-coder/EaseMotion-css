# Birdhouse

### What does this do?

It shows a wooden birdhouse hanging from a branch. A little yellow bird pops up into the entrance hole, flutters its wing, then ducks back down inside, over and over, while the whole house sways on its hanger. Under reduced motion the house and bird hold still.

### How is it used?

```html
<div class="house">
  <span class="roof rl"></span>
  <div class="front">
    <span class="hole"></span>
    <div class="birdb"><span class="wingb"></span></div>
    <span class="perch"></span>
  </div>
</div>
```

The bird hides inside because the `front` panel clips it with `overflow: hidden`: the `peek` animation simply translates the bird down out of the visible area and back up into the hole, so it appears to be popping out of the house rather than fading in. The two roof panels are one shape rotated in opposite directions from their inner edges, so they meet cleanly at the ridge.

### Why is it useful?

Garden, home, and notification or "new message" themes use a birdhouse. This builds a birdhouse with a peeking bird in pure CSS, no images, with a reduced motion fallback.
