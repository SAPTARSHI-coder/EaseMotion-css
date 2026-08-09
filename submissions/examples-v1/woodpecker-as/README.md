# Woodpecker

### What does this do?

It shows a woodpecker clinging to a tree trunk, hammering at the bark. The head snaps forward and back on a fast loop, the wing flexes as it braces, and wood chips fly off and tumble away. Under reduced motion the drumming stops.

### How is it used?

```html
<div class="bird">
  <span class="bodyw"></span>
  <div class="headw">
    <span class="skull"></span>
    <span class="beakw"></span>
  </div>
</div>
```

The peck comes from rotating the head wrapper around `transform-origin: 84% 86%`, the base of the skull where it meets the neck. Because the pivot sits behind the head rather than in its centre, the beak swings through a wide arc into the trunk while the back of the skull barely moves, which is what makes a small rotation read as a hard strike. The flying chips share one keyframe and take their landing spot from a `--cx` custom property, so each chip tumbles off on its own path.

### Why is it useful?

Wildlife, forest, and "working on it" or building themes use a woodpecker. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
