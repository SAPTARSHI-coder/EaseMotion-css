# 3D Flip Card Animations

This submission implements a 3D Card Flip animation component supporting both horizontal (Y-axis) and vertical (X-axis) flips.

---

## Technical Overview

### 3D Perspective and preserve-3d

To render transformations with realistic volumetric depth, the wrapper establishes a 3D perspective field, while the rotating container preserves the Z-index transformations of the child cards:

```css
.ease-flip-card-wrapper {
  perspective: 1000px;
}
.ease-flip-card {
  transform-style: preserve-3d;
}
```

### Backface-visibility

To ensure the opposite face is hidden when the card is oriented away from the viewport, we utilize `backface-visibility: hidden`.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Hover over the "Creative Mind" card — verify it flips smoothly horizontally.
3. Hover over the "Ember Core" card — verify it flips smoothly vertically.
4. Press `Tab` to navigate to the cards with the keyboard — verify they flip on focus.
5. Enable `prefers-reduced-motion` — verify transitions are skipped.
