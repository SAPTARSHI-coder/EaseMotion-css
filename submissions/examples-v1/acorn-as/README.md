# Acorn

### What does this do?

It shows an acorn hanging from an autumn branch. It swings gently on its stem, the leaves sway, light glints off the shell, and leaves drift down past it. Hovering or focusing the acorn makes it swing faster, as if it is about to drop. Under reduced motion everything hangs still.

### How is it used?

```html
<div class="acorn" tabindex="0">
  <span class="stem"></span>
  <span class="cap"></span>
  <span class="nut"></span>
</div>
```

The cap's woven texture is a `repeating-conic-gradient` anchored near the top of the cap, so the scales radiate outward and downward the way a real cupule is woven, in one element instead of many. The acorn swings from `transform-origin: 50% 0`, the point where the stem meets the branch, so it arcs from where it actually hangs rather than pivoting around its own middle. Hover and focus just shorten the animation duration, so the same keyframe reads as an impatient wobble.

### Why is it useful?

Autumn, nature, and harvest themes use an acorn. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
