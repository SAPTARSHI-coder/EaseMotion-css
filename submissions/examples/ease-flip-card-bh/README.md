# ease-flip-card Pure CSS 3D Flip Cards

## What does this do?

A JavaScript-free 3D flip card component for displaying two-sided content (pricing tiers, flashcards, profile cards) with smooth perspective transforms.

## How is it used?

```html
<div class="ease-flip-card">
  <div class="ease-flip-card-inner">
    <div class="ease-flip-card-front">
      Front Content
    </div>
    <div class="ease-flip-card-back">
      Back Content
    </div>
  </div>
</div>
```

### CSS Classes

| Class | Purpose |
|-------|---------|
| `.ease-flip-card` | Container with perspective |
| `.ease-flip-card-inner` | 3D transform wrapper |
| `.ease-flip-card-front` | Front face of the card |
| `.ease-flip-card-back` | Back face of the card |

### Flip Direction Variants

| Class | Direction |
|-------|-----------|
| `.ease-flip-horizontal` | Flip left/right |
| `.ease-flip-vertical` | Flip up/down |

## Why is it useful?

3D flip cards are great for revealing additional information on hover without taking extra space:

- ✅ Pure CSS, no JavaScript required
- ✅ Smooth 3D perspective transforms
- ✅ `backface-visibility: hidden` for clean flip
- ✅ Multiple flip directions
- ✅ Great for flashcards, pricing, profiles
