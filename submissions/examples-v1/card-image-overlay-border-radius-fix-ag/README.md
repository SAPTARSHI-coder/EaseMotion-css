# Card Image Overlay Border Radius Leak Fix (Issue #14077)

## What does this do?

Demonstrates fixing the `.ease-card-image-overlay` component where the underlying `.ease-card-img` ignores the parent `.ease-card` border radius and renders square corners that bleed outside the card edges.

## How is it used?

```html
<div class="ease-card ease-card-image-overlay">
  <img src="..." class="ease-card-img" />
  <div class="ease-card-img-overlay">...</div>
</div>
```

## Why is it useful?

When an image is placed absolutely or at the base of an overlay component, its square corners overlap the rounded borders of the parent container unless `overflow: hidden` or a matching `border-radius` is applied to the image and overlay. This fix adds the missing `border-radius` calculations to the inner image and overlay container so it perfectly respects the `.ease-card` shape.
