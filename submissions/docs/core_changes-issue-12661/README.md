# ease-aspect-\*

## What does this do?

Provides aspect ratio utility classes (`.ease-aspect-square`, `.ease-aspect-video`, `.ease-aspect-portrait`, etc.) that maintain consistent media proportions with a single class, plus responsive breakpoint variants and a custom variable-driven option.

## How is it used?

**Square container:**

```html
<div class="ease-aspect-square">
  <img src="photo.jpg" alt="" />
</div>
```

**16:9 video container:**

```html
<div class="ease-aspect-video">
  <iframe src="..."></iframe>
</div>
```

**Custom ratio via CSS variable:**

```html
<div class="ease-aspect-custom" style="--ease-aspect-ratio: 2/1;">...</div>
```

**Responsive (square on mobile, 16:9 on desktop):**

```html
<div class="ease-aspect-square ease-md-aspect-video">...</div>
```

### Available Classes

| Class                    | Ratio                      | Use Case                 |
| ------------------------ | -------------------------- | ------------------------ |
| `.ease-aspect-square`    | 1:1                        | Profile pics, thumbnails |
| `.ease-aspect-video`     | 16:9                       | Videos, hero banners     |
| `.ease-aspect-portrait`  | 3:4                        | Portraits, card art      |
| `.ease-aspect-photo`     | 4:3                        | Classic photos, slides   |
| `.ease-aspect-wide`      | 16:10                      | Widescreen displays      |
| `.ease-aspect-ultrawide` | 21:9                       | Cinematic / ultrawide    |
| `.ease-aspect-auto`      | auto                       | Reset to natural ratio   |
| `.ease-aspect-custom`    | `var(--ease-aspect-ratio)` | Arbitrary values         |

### Responsive Prefixes

| Prefix     | Min Width |
| ---------- | --------- |
| `ease-sm-` | 640px     |
| `ease-md-` | 768px     |
| `ease-lg-` | 1024px    |
| `ease-xl-` | 1280px    |

## Why is it useful?

Consistent aspect ratios are critical for image galleries, video embeds, card layouts, and responsive media. These utility classes eliminate repetitive `aspect-ratio` declarations and provide a standardized set of common ratios that cover the majority of use cases.

## Features

- 6 common aspect ratios plus auto reset
- Custom ratio via `--ease-aspect-ratio` CSS variable
- Responsive variants for sm, md, lg, and xl breakpoints
- Works on any element (div, img, iframe, video, etc.)
- Fully supported in all modern browsers
