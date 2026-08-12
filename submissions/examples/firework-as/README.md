# Firework

### What does this do?

It shows a firework bursting in the night sky on a loop. A bright flash pops at the center, then twelve colored sparks shoot outward in a ring, drift apart, and fade as they fall. Under reduced motion the sparks rest in their spread positions instead of animating.

### How is it used?

```html
<div class="burst">
  <span class="spark sp1"></span>
  ...
  <span class="flash"></span>
</div>
```

Each spark stores its target offset in `--tx` and `--ty` custom properties, and the shared `launch` animation moves every spark from the center out to that point and past it while fading. The central `flash` scales up and vanishes to mark the detonation. The offsets ring the twelve sparks evenly around the burst.

### Why is it useful?

Celebration screens, success states, and New Year themes use fireworks. This builds a looping firework burst with pure CSS and custom properties, no images or JavaScript, with a reduced motion fallback.
