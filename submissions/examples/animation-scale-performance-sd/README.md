# Animation Scale Performance

## What does this do?

This demo shows a graceful degradation pattern for rendering 1000+ animated elements without animating every element at the same time.

## How is it used?

```html
<div class="motion-grid is-degraded">
  <span class="tile is-animated"></span>
  <span class="tile is-static"></span>
</div>
```

The demo caps active animations with an `animationBudget` and renders extra elements as static visual texture:

```js
const activeAnimations = Math.min(count, animationBudget);
```

## Why is it useful?

Animating thousands of nodes at once can drop frame rate sharply. This pattern keeps the visual density while reducing active animation work, so large scenes remain usable instead of collapsing under heavy motion load.
