# Pinwheel

### What does this do?

It shows a colorful paper pinwheel on a stick. The four vanes spin steadily, and hovering or focusing the pinwheel makes it spin much faster, as if you blew on it. Under reduced motion the pinwheel stays still.

### How is it used?

```html
<div class="pinwheel" tabindex="0">
  <div class="vanes">
    <span class="vane v1"></span>
    <span class="hub"></span>
  </div>
  <span class="stick"></span>
</div>
```

Each vane is a `clip-path` blade cut from a square and rotated ninety degrees from the next, in four different colors, all sharing a center hub. The `vanes` wrapper runs the `spin` animation at a steady pace; a `:hover` or `:focus` shortens the `animation-duration` so the whole pinwheel speeds up smoothly.

### Why is it useful?

Playful, spring, and loading states use a pinwheel. This builds an interactive spinning pinwheel with pure CSS shapes and animation, no images or JavaScript, with a reduced motion fallback.
