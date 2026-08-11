# Kingfisher

### What does this do?

It shows a kingfisher perched over a river, watching the water. It shifts its weight, tilts its head to aim, flexes a wing, and blinks; every few seconds a fish leaps below it and rings spread out where it broke the surface. Under reduced motion the bird sits still and the river is calm.

### How is it used?

```html
<div class="fisher">
  <span class="bodyK"></span>
  <div class="headK">
    <span class="skullK"></span>
    <span class="beakK"></span>
  </div>
</div>
```

The fish and its splash ring share the same five second clock and both stay at `opacity: 0` until 40 percent through it, so the ring only ever appears at the moment the fish breaks the surface. That timing is what makes two unrelated elements read as one event, with no JavaScript to coordinate them. The head aims from `transform-origin: 72% 96%`, the base of the skull, so the long dagger beak swings through a wide arc while the back of the head barely moves.

### Why is it useful?

River, wildlife, and patient or watchful themes use a kingfisher. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
