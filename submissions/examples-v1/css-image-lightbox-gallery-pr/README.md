# CSS-only Image Lightbox Gallery (Advanced Component)

## What does this do?

A grid of thumbnail images. When a user clicks a thumbnail, the image
smoothly expands to fill the screen in a dark, modal-like overlay with
a glassmorphism backdrop blur, a close button, and smooth entry
animations. Implemented entirely with the CSS `:target` pseudo-class and
HTML anchor links — no JavaScript.

## How is it used?

```html
<div class="ease-lightbox-gallery">
  <a href="#lightbox-1" class="ease-lightbox-thumbnail">
    <img src="thumb1.jpg" alt="Thumbnail 1" />
  </a>
</div>

<div id="lightbox-1" class="ease-lightbox-overlay">
  <a href="#" class="ease-lightbox-close-area" aria-label="Close"></a>
  <div class="ease-lightbox-full">
    <img src="full1.jpg" alt="Full size 1" />
    <a href="#" class="ease-lightbox-close" aria-label="Close">×</a>
  </div>
</div>
```

## Why is it useful?

Lightboxes are essential for portfolios, e-commerce sites, and blogs.
Developers usually import large third-party JavaScript libraries (like
Fancybox or Lightbox2) just to enlarge an image. By providing a pure CSS
solution that hooks into the browser's URL hash via `:target`,
EaseMotion CSS offers a performant, zero-dependency alternative that is
fully accessible and inherently supports the browser's "Back" button to
close the image. Uses `--ease-radius-lg`, `--ease-shadow-md`,
`--ease-speed-medium`, and `--ease-ease` tokens, with
prefers-reduced-motion support.
