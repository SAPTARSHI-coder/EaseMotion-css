# Image Lightbox

### What does this do?

It shows a thumbnail gallery where clicking a thumbnail opens the full image in a lightbox over a dimmed backdrop. It uses the CSS `:target` state, so it opens and closes with no JavaScript, and clicking the backdrop or the close button dismisses it. The images are gradient placeholders so there are no external files.

### How is it used?

```html
<div class="gallery">
  <a class="thumb t1" href="#img1" aria-label="Open image 1"></a>
</div>

<div class="lightbox" id="img1" role="dialog">
  <a class="lb-backdrop" href="#" tabindex="-1"></a>
  <div class="lb-figure t1"><a class="lb-close" href="#" aria-label="Close">✕</a></div>
</div>
```

Each thumbnail links to a lightbox `id`. When that id is the URL target, the lightbox becomes visible and its figure scales up. Any link back to `#` closes it.

### Why is it useful?

Galleries open a larger view when a thumbnail is clicked. This builds a lightbox from the `:target` state with a thumbnail grid and a dimmed overlay, using only CSS. Swap the gradient figures for real images in production. The animations are removed under reduced motion.
