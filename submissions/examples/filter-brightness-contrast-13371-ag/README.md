# Filter Brightness & Contrast Utilities

This submission implements a visual preview dashboard demonstrating the combined utility of CSS `filter: brightness()` and `filter: contrast()` utility combinations.

---

## Technical Design

CSS filters allow modifying contrast and brightness exposures dynamically:
- **Brightness**: Adjusts light levels. `filter: brightness(0.5)` dims, while `1.5` boosts brightness.
- **Contrast**: Adjusts difference between light and dark pixels. `filter: contrast(0.5)` flattens shadows, while `1.5` creates highly defined shapes.

These properties are combined within a single `filter` directive:
```css
.image-sandbox {
  filter: brightness(var(--brightness, 1)) contrast(var(--contrast, 1));
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Drag the **Brightness** and **Contrast** sliders — verify the image vector adjusts exposure and colors dynamically.
3. Click the preset buttons (e.g. "Vivid Intense") — verify the preview shifts to match the preset's target settings.
