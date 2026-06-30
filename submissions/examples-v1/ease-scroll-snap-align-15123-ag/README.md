# Scroll Snap Align Start Utility

This submission implements a horizontal gallery carousel demonstrating the visual behavior of the `ease-scroll-snap-align-start` utility class.

---

## Technical Overview

While the container defines the snap type framework, child items must declare snap alignment rules to lock the layout onto viewport bounds:

```css
.ease-scroll-snap-align-start {
  scroll-snap-align: start;
}
```

This locks the slide's left boundary flush against the viewport's left edge upon scrolling release.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Swipe or scroll horizontally inside the **With snap-align-start** container — verify cards snap flush against the left boundary.
3. Scroll inside the **Without snap-align-start** container — verify that cards scroll freely without locking.
