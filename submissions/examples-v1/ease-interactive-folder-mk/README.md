# Interactive CSS-Only Physical Folder

### What does this do?

This adds a physical, 3D-looking file folder component. When hovered, the front flap drops open (using 3D transforms) and a piece of paper slides out from the inside.

### How is it used?

```html
<div class="interactive-folder">
  <div class="folder-back"></div>
  <div class="folder-paper">
    <!-- Paper content goes here -->
  </div>
  <div class="folder-front">
    <span class="folder-label">Label</span>
  </div>
</div>
```

### Why is it useful?

It provides a delightful micro-interaction that makes the UI feel tactile and alive. It uses `perspective`, `transform-origin`, and `z-index` layering creatively to build a 3D object without any JavaScript, fitting perfectly into EaseMotion CSS's animation-first ethos.

### Contributed by

- Man1ac-1773
