Snap Fallbacks AK

What does this do?

Demonstrates CSS scroll-snap fallback strategies for browsers with partial or no scroll-snap support.

---

How is it used?

.container {
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

Add `-webkit-overflow-scrolling` and smooth scroll as fallback for older browsers.

---

Why is it useful?

Ensures scrollable containers remain usable in browsers that don't support scroll-snap, with progressive enhancement for modern browsers.

Features

- Scroll-snap alignment for modern browsers
- Smooth scroll behavior fallback
- iOS touch scroll fallback
- Visible scrollbar fallback
- Keyboard navigation support
- Custom snap alignment points
- Progressive enhancement approach
