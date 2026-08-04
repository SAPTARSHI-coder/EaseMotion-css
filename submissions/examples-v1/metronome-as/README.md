# Metronome

### What does this do?

It shows a classic wind up metronome with a triangular body, a tempo scale, and a pendulum arm that swings side to side. A weight sits on the arm, a pivot anchors it, and the tempo is shown on the body. Under reduced motion the arm rests at an angle.

### How is it used?

```html
<div class="mn-body">
  <span class="mn-scale"></span>
  <span class="mn-arm"><span class="mn-weight"></span></span>
  <span class="mn-pivot"></span>
</div>
```

The body is a `clip-path` triangle. The `mn-arm` pivots from its bottom with `transform-origin: bottom center` and swings between two angles using the `mn-swing` keyframes on an alternating animation, carrying the `mn-weight` with it.

### Why is it useful?

Music apps, practice tools, and rhythm demos use a metronome. This builds a swinging metronome with pure CSS shapes and a keyframe animation, no images, with a reduced motion fallback.
