# Sailboat

### What does this do?

It shows a little sailboat out on the sea. The boat rocks and rises on the swell, its flag flutters at the masthead, waves roll along the water, and a cloud drifts across a sunny sky. Under reduced motion the boat, flag, waves, and cloud all rest.

### How is it used?

```html
<div class="boat">
  <span class="sail main"></span>
  <span class="sail jib"></span>
  <span class="mast"></span>
  <span class="hull"></span>
</div>
```

The hull is a `clip-path` trapezoid, and the two sails are right-triangle clips on either side of a mast. The whole boat runs the `rock` animation, tilting and lifting around a point near the waterline, while the flag flutters with a skew and the waves bob on their own timing.

### Why is it useful?

Travel, ocean, and relaxation themes use a sailboat. This builds a bobbing sailboat with pure CSS shapes and animation, no images, with a reduced motion fallback.
