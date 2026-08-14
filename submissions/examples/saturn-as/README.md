# Saturn

### What does this do?

It shows the planet Saturn tilted in space with its ring wrapping around it. The ring passes behind the top of the planet and in front of the bottom, so it reads as a true 3D band, and the whole planet bobs slowly while background stars twinkle. Under reduced motion the planet and stars hold still.

### How is it used?

```html
<div class="saturn">
  <span class="ring back"></span>
  <div class="planet">...</div>
  <span class="ring front"></span>
</div>
```

The ring is a single tilted ellipse outline drawn twice: the `back` copy is clipped to its top half and sits behind the planet, and the `front` copy is clipped to its bottom half and sits in front. The planet in between is a radial and linear gradient sphere with faint cloud bands, so the ring appears to loop around it.

### Why is it useful?

Space themes, science pages, and loaders use planets. This builds a ringed Saturn with the classic in-front and behind depth using pure CSS shapes and clipping, no images, with a reduced motion fallback.
