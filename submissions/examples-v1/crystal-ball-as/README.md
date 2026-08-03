# Crystal Ball

### What does this do?

It shows a fortune-teller's crystal ball on a gold stand. Colored mist swirls inside the glass sphere, a star twinkles at its heart, and sparkles float around it. Under reduced motion the mist, star, and sparkles all settle.

### How is it used?

```html
<div class="ball">
  <span class="mist m1"></span>
  <span class="star"></span>
  <span class="glass"></span>
</div>
<div class="stand"><span class="neck"></span><span class="base"></span></div>
```

The sphere is a circle with `overflow: hidden` holding several blurred `mist` blobs, each running the `swirl` rotation at a different speed and direction so the fog churns. A star `clip-path` twinkles in the center, and a `glass` overlay adds highlights to sell the curved surface. The stand is a gold neck and base beneath it.

### Why is it useful?

Fortune, mystery, and magic themes use a crystal ball. This builds a swirling crystal ball with pure CSS gradients and animation, no images, with a reduced motion fallback.
