# Music Visualizer

### What does this do?

It shows a now playing card with an animated audio equalizer. Twenty bars bounce up and down on staggered durations and delays, giving the look of a live spectrum. The card also shows a cover tile and track details.

### How is it used?

```html
<div class="equalizer" role="img" aria-label="Audio playing">
  <i></i><i></i><i></i><i></i><i></i><i></i>
</div>
```

Each `i` is one bar. Its height animates between a low and full value with `viz-bounce`, and `:nth-child` rules vary the duration and negative delay so no two neighbors move together. Add as many bars as you like.

### Why is it useful?

Music players, podcast apps, and voice UIs use an equalizer to signal that audio is playing. This gives that animated spectrum with pure CSS keyframes, and it settles into a static pattern when reduced motion is requested.
