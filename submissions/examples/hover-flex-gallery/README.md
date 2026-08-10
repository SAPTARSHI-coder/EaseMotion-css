# Hover-Expanding Flexbox Image Gallery

## Description
This submission resolves Issue #68962 by introducing a purely CSS-driven interactive image gallery. It displays a row of equal-width images, and when a user hovers over one, it expands to show more detail while smoothly compressing the others.

## Features
- Pure CSS implementation using Flexbox.
- Seamless transitions driven by the `flex` property.
- Prevents image distortion during expansion/compression by using `object-fit: cover`.
- Highly responsive and easily configurable using CSS variables.

## Usage
Create an outer container with the `.ease-flex-gallery` class. Inside it, place your gallery items using the `.ease-gallery-item` class. Ensure that each item contains an `<img>` tag. The component handles the rest, automatically allocating space evenly until hovered.

```html
<div class="ease-flex-gallery">
  <div class="ease-gallery-item">
    <img src="..." alt="...">
  </div>
  <div class="ease-gallery-item">
    <img src="..." alt="...">
  </div>
</div>
```
