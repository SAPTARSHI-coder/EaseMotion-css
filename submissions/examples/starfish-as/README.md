# Starfish

### What does this do?

It shows a starfish creeping slowly across the seabed. Its five arms ripple in sequence, the whole animal inches side to side as it moves, and it blinks. Under reduced motion the starfish holds still.

### How is it used?

```html
<div class="star">
  <span class="arm am1"></span>
  <span class="core"></span>
  <span class="eyef ef1"></span>
</div>
```

Each arm holds its position around the body in an `--ar` custom property, and its transform is `rotate(var(--ar)) translateY(...)`, so one value both aims the arm and pushes it out from the center. The bumpy tube-feet texture is a set of hard-stop radial gradients painted straight into the arm's fill, which means it clips to the arm's `clip-path` shape for free.

### Why is it useful?

Ocean, beach, and rating or "star" themes use a starfish. This builds a creeping starfish with pure CSS shapes, custom properties, and animation, no images, with a reduced motion fallback.
