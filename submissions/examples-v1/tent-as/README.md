# Tent

### What does this do?

It shows a camping tent pitched at night among pine trees. A warm lantern glows inside the open doorway and flickers, and the stars twinkle overhead. Under reduced motion the lamp and stars hold steady.

### How is it used?

```html
<div class="tent">
  <span class="side left"></span>
  <span class="side right"></span>
  <span class="door"></span>
  <span class="lamp"></span>
</div>
```

The two tent sides are `clip-path` triangles in slightly different shades so the ridge reads with depth, and the doorway is a triangular cut filled with a warm radial gradient. A blurred `lamp` glow sits in the opening and flickers, and guy-line poles angle out from each side.

### Why is it useful?

Camping, travel, and outdoor themes use a tent. This builds a lit camping tent with pure CSS shapes and animation, no images, with a reduced motion fallback.
