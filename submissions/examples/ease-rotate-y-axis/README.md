# Ease Rotate Y Utility

Adds a reusable utility class that applies a smooth Y-axis rotation animation for lightweight 3D effects and card flip interactions.

## Classes

### `.ease-rotate-y`

Applies:

```css
transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
transform-style: preserve-3d;
will-change: transform;
```

and rotates on hover.

## Rotation Variants

```css
.rotate-y-10:hover {
  transform: rotateY(10deg);
}

.rotate-y-15:hover {
  transform: rotateY(15deg);
}

.rotate-y-25:hover {
  transform: rotateY(25deg);
}

.rotate-y-90:hover {
  transform: rotateY(90deg);
}

.rotate-y-180:hover {
  transform: rotateY(180deg);
}
```

## 180° Flip Cards

For full 180° rotations with readable content, use a front and back face:

```html
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      Front Content
    </div>

    <div class="flip-card-back">
      Back Content
    </div>
  </div>
</div>
```

```css
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-back {
  transform: rotateY(180deg);
}
```

This keeps text readable after the card flips.

## Accessibility

The utility respects the user's motion preferences:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is requested:

- Transitions are disabled.
- Hover rotations are removed.
- Flip-card animations are disabled.

## Demo

Open `demo.html` in a browser and hover over the examples to see:

- 10° rotation
- 15° rotation
- 25° rotation
- 90° rotation
- 180° rotation
- 180° flip card with readable front and back content