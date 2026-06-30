# ease-aspect-ratio — Box Sizing Utility Classes

## What does this do?

Provides CSS `aspect-ratio` utility classes for common media and layout ratios. Ratios are applied inline via custom properties so the class stays fixed while the ratio is configurable.

## How is it used?

```html
<div class="ease-aspect-video"><iframe src="…"></iframe></div>
<div class="ease-aspect-square"><img src="…" alt="…" /></div>
<div class="ease-aspect-portrait"><div>Content</div></div>
```

### Classes

| Class                     | Ratio     | Use case                        |
| ------------------------- | --------- | ------------------------------- |
| `.ease-aspect-square`     | `1 / 1`   | Square thumbnails, profile pics |
| `.ease-aspect-video`      | `16 / 9`  | Videos, hero images             |
| `.ease-aspect-cinema`     | `21 / 9`  | Cinematic banners               |
| `.ease-aspect-widescreen` | `16 / 10` | Monitors, presentations         |
| `.ease-aspect-classic`    | `4 / 3`   | Photos, iPad screens            |
| `.ease-aspect-portrait`   | `3 / 4`   | Portrait photos, cards          |
| `.ease-aspect-photo`      | `3 / 2`   | 35mm photography                |
| `.ease-aspect-vertical`   | `9 / 16`  | TikTok/Reels vertical video     |

## Custom Property

```css
.ease-aspect-16-9 {
  aspect-ratio: var(--ease-aspect-ratio, 16 / 9);
}
```
