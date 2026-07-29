# ease-transform — Advanced Transform Utility Classes

## What does this do?

Provides CSS `transform` utility classes for scale, rotate, skew, and translate operations with common values. Pure CSS transforms for hover/static effects.

## How is it used?

```html
<img src="photo.jpg" class="ease-scale-110" alt="" />
<button class="ease-rotate-90">Rotated</button>
<div class="ease-skew-x-12">Skewed content</div>
<div class="hover:ease-scale-105">Scales on hover</div>
```

### Scale Classes

| Class | Transform |
|---|---|
| `.ease-scale-90` | `scale(0.9)` |
| `.ease-scale-95` | `scale(0.95)` |
| `.ease-scale-100` | `scale(1)` |
| `.ease-scale-105` | `scale(1.05)` |
| `.ease-scale-110` | `scale(1.1)` |
| `.ease-scale-125` | `scale(1.25)` |
| `.ease-scale-150` | `scale(1.5)` |

### Rotate Classes

| Class | Transform |
|---|---|
| `.ease-rotate-45` | `rotate(45deg)` |
| `.ease-rotate-90` | `rotate(90deg)` |
| `.ease-rotate-180` | `rotate(180deg)` |
| `.ease-rotate-n45` | `rotate(-45deg)` |
| `.ease-rotate-n90` | `rotate(-90deg)` |
| `.ease-rotate-n180` | `rotate(-180deg)` |

### Skew Classes

| Class | Transform |
|---|---|
| `.ease-skew-x-6` | `skewX(6deg)` |
| `.ease-skew-x-12` | `skewX(12deg)` |
| `.ease-skew-y-6` | `skewY(6deg)` |
| `.ease-skew-y-12` | `skewY(12deg)` |

### Translate Classes

| Class | Transform |
|---|---|
| `.ease-translate-x-n50` | `translateX(-50%)` |
| `.ease-translate-y-n50` | `translateY(-50%)` |
| `.ease-translate-xy-n50` | `translate(-50%, -50%)` |
| `.ease-translate-x-100` | `translateX(100%)` |
| `.ease-translate-y-100` | `translateY(100%)` |
