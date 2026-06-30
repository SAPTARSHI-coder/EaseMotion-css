# Filter Brightness Utilities

This submission implements a visual demonstration of CSS `filter: brightness()` utilities.

---

## Technical Details

CSS brightness filters dynamically adjust element exposure values without requiring image pre-processing.

The classes are configured as:

- Dim State: `filter: brightness(0.55)` (increases to `1.0` on hover)
- Baseline State: `filter: brightness(1.0)`
- Bright State: `filter: brightness(1.45)` (decreases to `1.0` on hover)

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Inspect the three cards: notice that the image backgrounds display dim, normal, and bright color schemes respectively.
3. Hover over the **Dim** and **Bright** cards — verify their background exposure values return to the default baseline 100% state.
