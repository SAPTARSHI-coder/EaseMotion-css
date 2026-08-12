# Aspect Ratio Utility Classes

## What does this do?

Adds `ease-aspect-*` utility classes for maintaining consistent proportions in images, videos, embeds, and cards using the CSS `aspect-ratio` property — making responsive media embeds and fixed-ratio containers a single class away.

## How is it used?

**Responsive YouTube embed:**

```html
<div class="ease-aspect-video">
  <iframe src="https://www.youtube.com/embed/..." allowfullscreen></iframe>
</div>
```

**Square avatar container:**

```html
<img class="ease-aspect-square" src="avatar.jpg" alt="" style="width: 200px;" />
```

**Card with consistent thumbnail ratio:**

```html
<div class="card">
  <img class="ease-aspect-4/3" src="thumbnail.jpg" alt="" />
</div>
```

## Why is it useful?

Aspect ratio utilities are essential for responsive media. Without them, developers must either use the traditional padding-bottom hack or repeatedly write `aspect-ratio: 16/9`. These single-class utilities make responsive video embeds, image galleries, and card thumbnails trivial — complementing the object-fit utilities for complete media control.
