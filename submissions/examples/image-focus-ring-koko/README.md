# Image Focus Ring Fix (image-focus-ring-koko)

## What does this do?
Fixes the clipping issue where the focus ring on `.ease-image` gets cut off when the image is inside a container with `overflow: hidden` or `overflow: auto`.

## How is it used?
Wrap your image inside a container and add the `.ease-image` class:

\`\`\`html
<div class="image-wrapper">
  <img class="ease-image" src="your-image.jpg" tabindex="0" alt="description" />
</div>
\`\`\`

## Why is it useful?
Uses an inset `box-shadow` instead of an `outline`, so the focus ring stays fully visible inside the element's bounding box — even when the parent has `overflow: hidden`. Improves keyboard accessibility. Fixes issue #59765.