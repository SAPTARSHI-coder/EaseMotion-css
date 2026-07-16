# ease-flip-card

## What does this do?

Provides a dedicated **flip card component** — a card that rotates 180 degrees on hover/focus to reveal back content. Built on the existing 3D flip utilities in `core/animations.css` but packaged as a complete component with front/back layout, proper positioning, and styling.

## How is it used?

```html
<div class="ease-flip-card" tabindex="0" role="button">
  <div class="ease-flip-card-inner">
    <div class="ease-flip-card-front">
      <h3>Front Content</h3>
    </div>
    <div class="ease-flip-card-back">
      <h3>Back Content</h3>
    </div>
  </div>
</div>
```

### Available Classes

| Class | Purpose |
|-------|---------|
| `.ease-flip-card` | Perspective container (1000px) |
| `.ease-flip-card-inner` | Inner wrapper with `preserve-3d` and smooth transition |
| `.ease-flip-card-front` | Front face (visible by default) |
| `.ease-flip-card-back` | Back face (hidden, rotates 180deg into view) |
| `.ease-flip-card-flip-x` | Modifier — flips on X-axis (vertical) instead of Y-axis (horizontal) |

### Flip Directions

- **Default (`.ease-flip-card`)**: Horizontal flip using `rotateY(180deg)`
- **Vertical (`.ease-flip-card-flip-x`)**: Vertical flip using `rotateX(180deg)`

### Accessibility

- Both faces are keyboard accessible via `focus-within`
- Add `tabindex="0"` and `role="button"` to the card container for keyboard users
- Respects `prefers-reduced-motion: reduce` — disables the flip transition

### Design Tokens Used

| Token | Fallback | Purpose |
|-------|----------|---------|
| `--ease-speed-slow` | `0.6s` | Transition duration |
| `--ease-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | Transition easing |
| `--ease-radius-lg` | `1rem` | Card border radius |
| `--ease-space-8` | `2rem` | Front/back face padding |
| `--ease-color-surface` | `#fff` / `#141e33` | Front face background |
| `--ease-color-text` | `#1e293b` / `#e2e8f0` | Front face text color |
| `--ease-color-primary` | `#6c63ff` | Back face background |

## Why is it useful?

The `ease-flip` animation and `ease-flip-3d` utilities exist in core but require manual assembly into a complete component. This submission packages them into a ready-to-use component with consistent styling, reduced-motion support, and keyboard accessibility — matching the existing card component patterns.

Fixes #25570
