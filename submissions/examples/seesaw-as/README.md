# Seesaw

### What does this do?

It shows a seesaw tipping back and forth over its fulcrum. The plank rocks around its center pivot, carrying both seats and handlebars with it, so one end rises as the other falls. Under reduced motion the plank rests level.

### How is it used?

```html
<div class="plank">
  <span class="grip gl"></span>
  <span class="seat sl"></span>
  <span class="seat sr"></span>
</div>
<span class="pivot"></span>
<span class="fulcrum"></span>
```

The plank is a single rounded bar with the seats and grips positioned along it as children, so rotating the plank tips everything together. Its `transform-origin` is the center, matching the pivot cap that sits on the triangular `clip-path` fulcrum, which keeps the rocking motion anchored where the two actually meet.

### Why is it useful?

Playground, balance, and comparison or trade-off themes use a seesaw. This builds a tipping seesaw with pure CSS shapes and animation, no images, with a reduced motion fallback.
