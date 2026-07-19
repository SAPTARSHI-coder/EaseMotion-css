# @property `<length>` Individual Corner Radius Morphing

Registers four typed CSS custom properties — one per `border-radius` corner — enabling independent per-corner animation in `@keyframes` and `transition`.

## Why `@property` is required

`border-radius` shorthand cannot be partially transitioned. Animating the full `border-radius` value interpolates all four corners together. With `@property`:

```css
@property --r-tl { syntax: '<length>'; inherits: false; initial-value: 16px; }
@property --r-tr { syntax: '<length>'; inherits: false; initial-value: 16px; }
@property --r-br { syntax: '<length>'; inherits: false; initial-value: 16px; }
@property --r-bl { syntax: '<length>'; inherits: false; initial-value: 16px; }

.shape {
  border-radius: var(--r-tl) var(--r-tr) var(--r-br) var(--r-bl);
}
```

Each corner is now a numeric `<length>` that the browser can interpolate independently.

## Variants

| Variant | Pattern | Keyframes |
|---------|---------|-----------|
| Corner ripple | Corners round sequentially | 8-step keyframe |
| Square ↔ circle | All four together | 2-state ease-in-out |
| Organic blob | Asymmetric, all different | 3-state ease-in-out |
| Hover diagonal | `transition` on `:hover` | Transition only |

## Corner ripple

```css
@keyframes ease-corner-ripple {
  0%   { --r-tl: 16px; --r-tr: 16px; --r-br: 16px; --r-bl: 16px; }
  12%  { --r-tl: 70px; --r-tr: 16px; --r-br: 16px; --r-bl: 16px; }
  25%  { --r-tl: 70px; --r-tr: 70px; --r-br: 16px; --r-bl: 16px; }
  50%  { --r-tl: 70px; --r-tr: 70px; --r-br: 70px; --r-bl: 70px; }
  /* ... returns symmetrically */
}
```

## Hover with spring easing

```css
.ease-morph-hover {
  --r-tl: 8px; --r-tr: 8px; --r-br: 8px; --r-bl: 8px;
  transition:
    --r-tl 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
    --r-tr 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
    --r-br 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
    --r-bl 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.ease-morph-hover:hover {
  --r-tl: 50px; --r-tr: 12px; --r-br: 50px; --r-bl: 12px;
}
```

## Accessibility

`prefers-reduced-motion: reduce` stops all animations and transitions. Shapes remain visible at their initial radius values.

```css
@media (prefers-reduced-motion: reduce) {
  .ease-morph-ripple,
  .ease-morph-circle,
  .ease-morph-blob { animation: none; }
  .ease-morph-hover { transition: none; }
}
```
