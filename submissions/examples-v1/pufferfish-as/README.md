# Pufferfish

### What does this do?

It shows a pufferfish drifting in the water. Hovering or focusing it startles the fish: it inflates into a ball and sixteen spikes spring out all around it, then it deflates again when you move away. It works with no JavaScript. Under reduced motion it puffs without easing.

### How is it used?

```html
<div class="puffer" tabindex="0">
  <div class="spikes"><span class="spike sp1"></span>...</div>
  <div class="bodyp"><span class="eyep ep1"></span></div>
</div>
```

Each spike stores its angle around the fish in a `--sa` custom property, and its transform is `rotate(var(--sa)) translateY(...)` — rotating first and then pushing outward, so one shared value both aims the spike and places it on the ring. At rest the spikes are pulled in close and scaled down, hiding them in the body; on `:hover` they push out and scale to full size while the body itself grows.

### Why is it useful?

Ocean, defensive, and "startle" or expand interactions use a pufferfish. This builds an inflating pufferfish with pure CSS shapes, custom properties, and transitions, no images or JavaScript, with a reduced motion fallback.
