# Image Swipe Wipe Reveal

## What does this do?

It creates a reveal effect where an image transitions from grayscale to full color while a colored overlay sweeps across it on hover.

## How is it used?

Wrap your image inside a container that has the `reveal-swipe-box-uj` class and apply the `reveal-swipe-img-uj` class to the image:

```html
<div class="reveal-swipe-box-uj">
  <img src="landscape.jpg" alt="Landscape" class="reveal-swipe-img-uj">
</div>
```

Customize the sweep color by overriding the background property of the pseudoelement if needed:

```css
.reveal-swipe-box-uj::after {
  background: #ff5a5f; /* custom overlay color */
}
```

## Why is this useful?

This effect is widely used in photography portfolios and image galleries to create elegant, high-end hover states. It runs entirely on the GPU utilizing compositor-only properties (`transform` and CSS `filter`), ensuring peak performance without layout reflows or JavaScript overhead.
