# Product Gallery

### What does this do?

It shows a product gallery with a large main image and a strip of thumbnails below. Clicking a thumbnail swaps the main image with a crossfade and outlines the selected thumbnail. It works with no JavaScript by using radio inputs.

### How is it used?

```html
<div class="pgallery">
  <input type="radio" name="pg" id="pg1" checked />
  <input type="radio" name="pg" id="pg2" />
  <div class="pg-main">
    <div class="pg-view v1"></div>
    <div class="pg-view v2"></div>
  </div>
  <div class="pg-thumbs">
    <label for="pg1" class="v1"></label>
    <label for="pg2" class="v2"></label>
  </div>
</div>
```

Keep the radios first so the sibling selectors can fade the matching main view and outline the active thumbnail. Swap the gradient views for real images in production.

### Why is it useful?

Product pages let you flip through photos with a thumbnail strip. This swaps a main image and highlights the active thumbnail from a radio, using only CSS. Thumbnails are keyboard operable with a focus ring and the crossfade is removed under reduced motion.
