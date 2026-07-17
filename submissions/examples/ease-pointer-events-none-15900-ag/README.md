# Pointer Events None Utility

This submission demonstrates the visual and interactive behavior of the `ease-pointer-events-none` utility class.

---

## Technical Details

The `pointer-events: none` property allows pointer events (like hover, click, active, focus) to pass straight through an element to underlying targets:

```css
.ease-pointer-events-none {
  pointer-events: none;
}
```

This is vital for layouts containing overlay notifications, floating custom graphics, absolute styled layers, and interactive grids where background targets must remain selectable.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. In the **Standard Overlay** section, attempt to click the "Underlying Button" — verify that it cannot be clicked and the counter remains at 0 (since the overlay blocks cursor events).
3. In the **Pass-Through Overlay** section, click directly on the overlay text or boundary — verify that the click passes through, triggering the underlying green button and incrementing the count.
