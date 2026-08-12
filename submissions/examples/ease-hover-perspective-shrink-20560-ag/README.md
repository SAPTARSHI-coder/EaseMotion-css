# CSS Perspective Shrink Hover Example

This submission demonstrates the implementation of a 3D perspective "shrink-away" hover animation on layout cards using pure CSS transforms.

---

## Technical Overview

Unlike traditional card hover lifts (which translate elements upward on the Y-axis), the perspective shrink animation creates 3D depth by translating elements away on the Z-axis:

1. **Parent Perspective (`.card-perspective-container`)**: Defines the viewing distance between the user and the 3D plane using `perspective: 1000px`. Without this, 3D translations along the Z-axis would look like simple 2D scaling.
2. **Transform Property (`transform`)**: Combines scaling down (`scale(0.92)`) with a backward Z-axis displacement (`translateZ(-20px)`).

---

## Code Example

```css
.card-container {
  perspective: 1000px;
}
.card {
  transition: transform 0.4s ease;
}
.card:hover {
  transform: scale(0.92) translateZ(-20px);
}
```

---

## Verification Steps

1. Open `demo.html` in a web browser.
2. Compare the two cards side-by-side:
   - Hover over **Hover Lift**: Verify the card translates upward and gains a purple shadow glow.
   - Hover over **Perspective Shrink**: Verify the card pushes backward into the screen depth cleanly.
3. Verify that changing system preferences to `prefers-reduced-motion` immediately disables both hover transform animations.
