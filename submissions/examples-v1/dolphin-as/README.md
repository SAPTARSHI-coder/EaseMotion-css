# Dolphin

### What does this do?

It shows a dolphin leaping in an arc out of the sea and back in. It nose-dives on entry and points upward on the way out, its tail fluke beats and its flipper paddles, and a splash ring bursts at the waterline each time it re-enters. Under reduced motion the dolphin holds still.

### How is it used?

```html
<div class="arc">
  <div class="dolphin">
    <span class="body"></span>
    <span class="dorsal"></span>
    <span class="tailfin"></span>
  </div>
</div>
```

The leap is split across two nested elements running on the same clock: the outer `arc` handles the parabolic travel with `translate`, while the inner `dolphin` handles the `pitch` rotation from nose-up to nose-down. Separating position from rotation this way means the body always points along its flight path, which one combined animation would make very hard to tune.

### Why is it useful?

Ocean, freedom, and joyful or playful themes use a dolphin. This builds a leaping dolphin with pure CSS shapes and animation, no images, with a reduced motion fallback.
