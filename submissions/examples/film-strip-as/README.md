# Film Strip

### What does this do?

It shows a strip of film with sprocket holes running along the top and bottom edges and a row of photo frames in the middle, each a colored scene with a frame number. The whole strip is tilted slightly for a photographic feel.

### How is it used?

```html
<div class="film">
  <div class="perf top"></div>
  <div class="frames">
    <div class="frame f1"><span class="frame-no">01</span></div>
  </div>
  <div class="perf bottom"></div>
</div>
```

The `perf` strips use a repeated `radial-gradient` to punch evenly spaced sprocket holes, and the `frames` row holds gradient frames. Each frame gets a sheen from an `::after` highlight and a numbered label.

### Why is it useful?

Galleries, media apps, and retro themes use a film strip motif for photos or video frames. This builds one with a real sprocket edge and framed shots using only CSS gradients, no images.
