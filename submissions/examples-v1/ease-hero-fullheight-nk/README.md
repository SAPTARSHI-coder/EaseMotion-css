### 1. What does this do?

This submission recreates the main landing page hero section and fixes a layout issue where the hero container did not extend to the full height of the viewport, causing the subsequent "Buttons" section to peek through prematurely at the bottom.

### 2. How is it used?

By applying `min-height: 100vh` to the `.demo-hero` container and using flexbox (`display: flex; flex-direction: column; justify-content: center;`) to perfectly center the content vertically.

```css
.demo-hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```

### 3. Why is it useful?

It provides a much cleaner, more professional landing page flow. It ensures the hero section takes up exactly one full screen before the user scrolls, eliminating awkward clipping or visible breaks with the next section.
