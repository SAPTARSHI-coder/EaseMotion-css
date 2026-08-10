# ease-rating-stars-tm

A star rating component for EaseMotion CSS.

## Interactive Usage

```html
<div class="ease-rating">
  <input type="radio" name="rating" id="r5"><label for="r5"></label>
  <input type="radio" name="rating" id="r4"><label for="r4"></label>
  <input type="radio" name="rating" id="r3" checked><label for="r3"></label>
  <input type="radio" name="rating" id="r2"><label for="r2"></label>
  <input type="radio" name="rating" id="r1"><label for="r1"></label>
</div>
```

## Read-only Display

```html
<div class="ease-rating-display">
  <span class="ease-star-filled">★</span>
  <span class="ease-star-filled">★</span>
  <span class="ease-star-half"></span>
  <span>★</span>
  <span>★</span>
</div>
```

## Classes

| Class | Description |
|---|---|
| `ease-rating` | Interactive rating wrapper |
| `ease-rating-sm` | Small size variant |
| `ease-rating-lg` | Large size variant |
| `ease-rating-display` | Read-only display |
| `ease-star-filled` | Filled star |
| `ease-star-half` | Half star |

## Features
- Pure CSS, no JavaScript
- Interactive via radio inputs
- Hover fill + pop animation
- Read-only display mode
- Half star support
- 3 size variants
- Respects prefers-reduced-motion
- Uses EaseMotion CSS design tokens