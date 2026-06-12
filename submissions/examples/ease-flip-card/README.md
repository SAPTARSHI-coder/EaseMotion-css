# ease-flip-card

A 3D card flip animation utility for EaseMotion CSS. Hovering (or focusing) the card rotates it 180 degrees on the Y axis, revealing the back face.

Resolves: https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5708

## What it does

Adds a smooth, GPU-accelerated 3D flip effect to any card element. The front and back faces are independently styled, and the flip is triggered on hover or keyboard focus.

## How to use it

```html
<div class="ease-flip-card" style="width: 260px; height: 160px;">
  <div class="ease-flip-card-inner">
    <div class="ease-flip-card-front">
      <!-- Front face content -->
      Front Side
    </div>
    <div class="ease-flip-card-back">
      <!-- Back face content -->
      Back Side
    </div>
  </div>
</div>
```

## Classes

| Class | Role |
|---|---|
| `ease-flip-card` | Outer container. Sets `perspective` for 3D depth. |
| `ease-flip-card-inner` | Inner wrapper that performs the `rotateY` transition. |
| `ease-flip-card-front` | Front face — visible by default. |
| `ease-flip-card-back` | Back face — revealed after flip. |

## Why it fits EaseMotion CSS

- A 3D card flip is one of the most universally requested CSS animation patterns.
- Pure CSS — no JavaScript required.
- Uses `will-change: transform` and `backface-visibility: hidden` for smooth, GPU-accelerated rendering.
- Fully accessible: respects `prefers-reduced-motion` by disabling the transition and showing both faces sequentially instead.

## Browser support

Works in all modern browsers (Chrome, Firefox, Edge, Safari).
