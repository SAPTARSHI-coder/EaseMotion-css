# Card Image Aspect Ratio Fix

## Issue #14158

Fixes inconsistent card heights when `ease-card` contains images with varying natural aspect ratios.

## Problem

Images inside `.ease-card` had no fixed aspect ratio, causing:

- Cards in the same grid to have different heights
- Tall portrait images pushed card content down
- The grid layout appeared broken

## Solution

Add `aspect-ratio` and `object-fit` to `.ease-card-image`:

```css
.ease-card-image {
  width: 100%;
  aspect-ratio: var(--ease-card-image-ratio, 16 / 9);
  object-fit: cover;
  display: block;
}
```

### Key Properties

| Property            | Value              | Effect                                   |
| ------------------- | ------------------ | ---------------------------------------- |
| `aspect-ratio`      | `16 / 9` (default) | Forces uniform height across images      |
| `object-fit: cover` | crops to fill      | Prevents distortion, centers content     |
| `display: block`    | removes gap        | Eliminates inline whitespace below image |

### Custom Ratio

Override per grid via CSS custom property:

```css
.my-grid {
  --ease-card-image-ratio: 4 / 3;
}
```

Or per image via inline style:

```html
<img class="ease-card-image" src="..." style="aspect-ratio: 1/1" />
```

## Files

- `demo.html` — Side-by-side comparison of broken vs fixed behavior
- `style.css` — Demo styles with dark/light theme support
