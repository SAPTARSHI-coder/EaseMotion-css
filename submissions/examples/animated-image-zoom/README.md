# ease-image-zoom

Image container that zooms the photo on hover, clipped so it never overflows its box.

## Usage

```html
<div class="ease-zoom-container" style="width: 300px; height: 200px;">
  <img src="photo.jpg" alt="...">
</div>
```

## Notes

- `overflow: hidden` on the container is what clips the zoom — don't remove it.
- `object-fit: cover` keeps the image filling the box at any aspect ratio.

## Browser support

All modern browsers.