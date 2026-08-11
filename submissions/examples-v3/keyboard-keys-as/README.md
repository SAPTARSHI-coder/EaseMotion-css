# Animated Keyboard Keys

### What does this do?

It shows styled keyboard key caps that depress with a small 3D press animation on hover and active, for displaying shortcuts like Ctrl plus K.

### How is it used?

```html
<span class="shortcut">
  <kbd class="kbd">Ctrl</kbd>
  <span class="shortcut-plus" aria-hidden="true">+</span>
  <kbd class="kbd">K</kbd>
</span>
```

Each key uses the semantic `<kbd>` element with the `kbd` class. The raised look comes from a stacked box shadow, and pressing the key moves it down and reduces the shadow.

### Why is it useful?

Keyboard hints appear in docs, command palettes, and help menus. This gives each key a tactile press with only a transform and shadow transition, so it needs no JavaScript. Keys use the semantic `<kbd>` element, and the press transition is disabled under `prefers-reduced-motion: reduce`.
