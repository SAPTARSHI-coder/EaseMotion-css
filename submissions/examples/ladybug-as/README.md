# Ladybug

### What does this do?

It shows a ladybug sitting on a leaf, its antennae waggling and its body bobbing as it crawls. Hovering or focusing the ladybug opens its spotted shell: the two halves swing apart like real elytra and the translucent flight wings appear underneath. It works with no JavaScript. Under reduced motion the shell opens without easing.

### How is it used?

```html
<div class="bug" tabindex="0">
  <span class="underwing"></span>
  <div class="shell">
    <span class="half left"><span class="dot d1"></span></span>
    <span class="half right">...</span>
  </div>
  <span class="head"></span>
</div>
```

The shell is two half-ellipses, each hinged at the body's centre line via `transform-origin`, so a `:hover` rotation swings them outward the way a real ladybug's wing cases open. The spots live inside each half with `overflow: hidden`, so they travel with the shell and get clipped correctly at the edge, and the flight wings simply fade in underneath.

### Why is it useful?

Nature, garden, and luck or spring themes use a ladybug. This builds an interactive ladybug with pure CSS shapes and transitions, no images or JavaScript, with a reduced motion fallback.
