# Image Zoom Hover Lens

## What does this do?

It creates a magnifying lens that follows the cursor over an image, revealing a zoomed-in portion inside a circular viewport. The effect mimics a physical magnifying glass.

## How is it used?

Wrap your image in a container with the `izl-wrapper` class, add class `izl-image` to the `<img>` element, and include an empty `<div>` with class `izl-lens` inside the wrapper:

```html
<div class="izl-wrapper" id="izlWrapper">
  <img src="photo.jpg" class="izl-image" alt="Photo">
  <div class="izl-lens" id="izlLens"></div>
</div>
```

The lens position is driven by CSS custom properties `--izl-x` and `--izl-y` set via JavaScript on `mousemove`:

```js
wrapper.style.setProperty('--izl-x', x + 'px');
wrapper.style.setProperty('--izl-y', y + 'px');
```

## Why is this useful?

This effect is commonly used in e-commerce product detail pages, art portfolios, and map previews to let users inspect fine details without opening a separate view. The lens uses `clip-path: circle()` and a scaled `background-image` to deliver smooth 60fps performance. It respects `prefers-reduced-motion` by disabling transitions.
