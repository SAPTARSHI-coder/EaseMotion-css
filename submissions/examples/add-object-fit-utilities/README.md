# Object Fit Utilities

Utility classes for controlling how replaced elements such as images and videos are resized within their containers.

## Available Classes

| Class | CSS |
|---------|---------|
| `.object-cover` | `object-fit: cover;` |
| `.object-contain` | `object-fit: contain;` |
| `.object-fill` | `object-fit: fill;` |
| `.object-none` | `object-fit: none;` |
| `.object-scale-down` | `object-fit: scale-down;` |

## Usage

```html
<img class="object-cover" src="image.jpg" alt="">
<img class="object-contain" src="image.jpg" alt="">
<img class="object-fill" src="image.jpg" alt="">
```

## What It Does

The `object-fit` property specifies how an image or video should be resized to fit its container.

- `cover` — Fills container while maintaining aspect ratio.
- `contain` — Fits entire image inside container.
- `fill` — Stretches to fill container.
- `none` — Keeps original size.
- `scale-down` — Chooses the smaller result of `none` or `contain`.

## Use Cases

- Responsive image galleries
- Profile avatars
- Card thumbnails
- Video containers
- Hero sections