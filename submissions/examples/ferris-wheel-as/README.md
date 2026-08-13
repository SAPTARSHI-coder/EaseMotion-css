# Ferris Wheel

### What does this do?

It shows a ferris wheel that turns on its support legs. Six colored cabins hang from the rim and stay upright as the wheel rotates, thanks to a counter rotation, with an orange rim, spokes, and a glowing hub. Under reduced motion it holds still.

### How is it used?

```html
<div class="wheel">
  <span class="spoke" style="--r: 60deg;"></span>
  <span class="arm" style="--r: 60deg;"><span class="cabin-hold"><span class="cabin c2"></span></span></span>
</div>
```

The `wheel` spins with `fw-spin`. Each `arm` is placed at its `--r` angle, a `cabin-hold` cancels that angle so the cabin starts upright, and the `cabin` runs `fw-counter` (an opposite full turn) so it stays level while the wheel goes around.

### Why is it useful?

Carnival themes, loaders, and playful headers use a ferris wheel. This builds a turning wheel with upright cabins using pure CSS rotation and counter rotation, no images, with a reduced motion fallback.
