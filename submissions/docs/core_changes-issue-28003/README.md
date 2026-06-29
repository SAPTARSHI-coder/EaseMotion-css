# ease-filter — Filter Effect Utility Classes

## What does this do?

Applies CSS `filter` effects — blur, brightness, contrast, grayscale, sepia, hue-rotate, invert, saturate, and drop-shadow.

## How is it used?

```html
<img class="ease-filter-grayscale" src="photo.jpg" />
<div class="ease-filter-blur-sm ease-hover-filter-none">...</div>
```

### Classes

| Class | Value |
|---|---|
| `.ease-filter-none` | `filter: none` |
| `.ease-filter-blur-sm` | `filter: blur(4px)` |
| `.ease-filter-blur-md` | `filter: blur(8px)` |
| `.ease-filter-blur-lg` | `filter: blur(16px)` |
| `.ease-filter-brightness-50` | `filter: brightness(0.5)` |
| `.ease-filter-brightness-75` | `filter: brightness(0.75)` |
| `.ease-filter-brightness-125` | `filter: brightness(1.25)` |
| `.ease-filter-brightness-150` | `filter: brightness(1.5)` |
| `.ease-filter-contrast-50` | `filter: contrast(0.5)` |
| `.ease-filter-contrast-75` | `filter: contrast(0.75)` |
| `.ease-filter-contrast-125` | `filter: contrast(1.25)` |
| `.ease-filter-contrast-150` | `filter: contrast(1.5)` |
| `.ease-filter-grayscale` | `filter: grayscale(1)` |
| `.ease-filter-sepia` | `filter: sepia(1)` |
| `.ease-filter-invert` | `filter: invert(1)` |
| `.ease-filter-saturate-50` | `filter: saturate(0.5)` |
| `.ease-filter-saturate-150` | `filter: saturate(1.5)` |
| `.ease-filter-hue-rotate-90` | `filter: hue-rotate(90deg)` |
| `.ease-filter-hue-rotate-180` | `filter: hue-rotate(180deg)` |
| `.ease-filter-drop-shadow` | `filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3))` |

### Hover variants

All classes have a `.ease-hover-filter-*` variant that applies on `:hover`.
