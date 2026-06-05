# ⚡ Animation: Hover Split-Mask Reveal

### What does this do?

This micro-interaction utility maps a sophisticated curtain mask transition profile across containers. On hover interaction, the front element face cleanly splits down the center line into separate left and right sheets, sliding out of bounds to uncover a hidden, secondary interactive content payload canvas underneath.

### How is it used?

Structure your card elements with the curtain division split layers, overriding visual parameters using scoped theme token variables inline:

```html
<div
  class="ease-hover-reveal-card"
  style="--ease-reveal-accent: #3b82f6; --ease-reveal-speed: 400ms;"
>
  <div class="ease-card-back"></div>
  <div class="ease-curtain ease-curtain-left"><h3>Label</h3></div>
  <div class="ease-curtain ease-curtain-right">
    <h3 class="ease-hidden-text">Label</h3>
  </div>
</div>
```

# Author

Pari Dubey
