# 3D Card Flip Component

## What does this do?

CSS-only 3D flip cards using `perspective`, `transform-style: preserve-3d`, and `backface-visibility: hidden`. Supports horizontal and vertical flip on hover, or click-to-flip via checkbox hack for mobile accessibility.

## How is it used?

```html
<div class="ease-card-flip ease-card-flip-horizontal">
  <div class="ease-card-flip-inner">
    <div class="ease-card-front">Front content</div>
    <div class="ease-card-back">Back content</div>
  </div>
</div>
```

| Class | Effect |
|-------|--------|
| `ease-card-flip-horizontal` | Flip on Y-axis (hover) |
| `ease-card-flip-vertical` | Flip on X-axis (hover) |

For click-to-flip (checkbox hack):
```html
<input type="checkbox" class="ease-card-flip-checkbox" id="my-flip">
<label for="my-flip">...same inner structure...</label>
```

Customize via `--ease-card-flip-speed`, `--ease-card-flip-easing`, `--ease-card-flip-perspective`.

## Why is it useful?

Provides a polished 3D flip interaction for team cards, pricing tables, and product showcases without any JavaScript. Keyboard accessible, mobile-friendly, and respects `prefers-reduced-motion`.
