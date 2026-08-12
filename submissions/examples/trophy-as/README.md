# Trophy

### What does this do?

It shows a gold trophy with a cup, two curved handles, a stem, a base, and a first place plate, with a star on the cup and a shine that sweeps across it. Under reduced motion the shine is hidden.

### How is it used?

```html
<div class="trophy">
  <span class="handle left"></span><span class="handle right"></span>
  <div class="cup"><span class="star">&#9733;</span><span class="glint"></span></div>
  <span class="stem"></span><span class="base"></span>
  <span class="plate">1st</span>
</div>
```

The cup is a gold gradient with a rounded bottom, the handles are half rings on each side, and a `glint` bar sweeps across the cup with the `sweep` keyframes. A stem, base, and plate finish the trophy.

### Why is it useful?

Awards, leaderboards, and achievement moments use a trophy. This builds a shining gold trophy with pure CSS shapes and a sweep animation, no images, with a reduced motion fallback.
