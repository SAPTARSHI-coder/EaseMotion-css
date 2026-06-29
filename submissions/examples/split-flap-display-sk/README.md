# CSS Split-Flap Letter Board Display

Airport departure board (Solari board) aesthetics using CSS `rotateX`, `perspective`, `overflow: hidden`, and staggered `animation-delay`. No images, no JavaScript animation loops, no `<canvas>`.

## How it works

Each tile has three layers:

1. **`.flap-bottom`** — bottom half of the card, shows the *next* character
2. **`.flap-top`** — top half of the card, shows the *current* character
3. **`.flap-flip`** — a full top-half overlay that rotates `0deg → -90deg` (folds down)

The flip creates the illusion:
- Before animation: flip covers the top, showing current char
- As flip rotates down: it reveals the bottom half (next char) peeking up
- At `-90deg`: flip is edge-on (invisible), bottom fully visible = character changed

```css
.flap-flip {
  transform-origin: bottom center;
  height: 50%;
  overflow: hidden;
}

@keyframes ease-flip-cycle {
  0%   { transform: rotateX(0deg);   }
  15%  { transform: rotateX(-90deg); }
  65%  { transform: rotateX(0deg);   }
  100% { transform: rotateX(0deg);   }
}
```

## 3D setup

```css
/* Perspective container */
.flap-scene {
  perspective: 200px;
  perspective-origin: 50% 100%;
}

/* The folding flap */
.flap-flip {
  transform-style: preserve-3d;
  backface-visibility: hidden;
}
```

`perspective-origin: 50% 100%` places the vanishing point at the hinge line, producing a realistic fold effect.

## Staggered cascade

```css
.flap { --flap-delay: 0s; }
/* per-tile inline style sets the delay */

.flap-flip {
  animation: ease-flip-cycle 0.9s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  animation-delay: var(--flap-delay, 0s);
}
```

## Accessibility

`prefers-reduced-motion: reduce` stops all flip animations. The tiles remain readable at their rest position.

```css
@media (prefers-reduced-motion: reduce) {
  .flap-flip { animation: none !important; }
}
```
