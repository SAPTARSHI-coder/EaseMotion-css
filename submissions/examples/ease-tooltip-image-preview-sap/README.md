# ease-tooltip-image-preview-sap

**Level: Intermediate**

A link/text element that shows a floating image preview tooltip on hover.

## Usage

```html
<a href="#" class="img-preview-tooltip-sap" style="--preview-img: url('photo.jpg')">
  Hover to preview
</a>
```

## Notes

- The preview image is set via the `--preview-img` custom property (as a `url(...)` value), since `content: attr()` can't be used for background images.
- Adjust the fixed `width`/`height` on the `::after` to change the preview box's aspect ratio.

## Browser support

All modern browsers with CSS custom property support.