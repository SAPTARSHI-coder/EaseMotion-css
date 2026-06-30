# CSS-Only Image Lightbox via `:target`

## What does this do?

A full-featured image lightbox gallery that opens and closes by reading the URL hash — no JavaScript required. Each thumbnail links to its lightbox's `id`, and the `:target` pseudo-class activates the matching overlay.

## How is it used?

```html
<!-- Gallery thumbnails -->
<div class="lightbox-gallery">
  <a href="#lb-1" class="lightbox-gallery__thumb" aria-label="Open image">
    <img src="thumb.jpg" alt="Description" />
  </a>
</div>

<!-- Lightbox overlay -->
<div id="lb-1" class="lightbox" role="dialog" aria-modal="true">
  <a href="#" class="lightbox__backdrop" aria-label="Close lightbox"></a>
  <div class="lightbox__box">
    <a href="#" class="lightbox__close" aria-label="Close">×</a>
    <img src="full.jpg" alt="Description" />
    <div class="lightbox__caption">Caption text</div>
  </div>
</div>
```

## Why is it useful?

Demonstrates the `:target` CSS pseudo-class as a pure CSS state machine — the URL hash acts as the toggle switch. No `display:none` hacks, no JS event listeners. Backdrop blur, scale-in animation, and zoom cursor are all CSS. Respects `prefers-reduced-motion`. Close by clicking the backdrop or the × button (both link to `#` to clear the hash).
