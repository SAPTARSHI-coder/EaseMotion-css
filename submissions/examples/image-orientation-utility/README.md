## Image-Orientation Utility

**What does this do?**  
Utility classes for the CSS `image-orientation` property, controlling whether browser respects EXIF orientation metadata.

**How is it used?**  
Add `img-orient-none` to ignore EXIF orientation, or `img-orient-from-image` to respect it:

```html
<img class="img-orient-none" src="photo.jpg" />
<img class="img-orient-from-image" src="photo.jpg" />
```

**Why is it useful?**  
Digital photos often contain EXIF orientation flags set by the camera. Some browsers automatically rotate images based on these flags, while others do not. These utilities give developers explicit control over whether to respect or ignore embedded orientation metadata, ensuring consistent image display across browsers.
