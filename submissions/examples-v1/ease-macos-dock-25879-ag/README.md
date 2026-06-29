# macOS Navigation Dock Component

This submission implements a premium macOS-style glassmorphism navigation dock with fluid item magnification.

---

## Technical Details

- **Magnification Effect**: Leveraging adjacent sibling CSS selectors (`+`), neighboring cards enlarge slightly when adjacent elements are hovered, creating a fluid curve.
- **Glassmorphism**: The container background uses `backdrop-filter: blur(20px)` and semi-transparent borders.
- **Tooltips**: Tooltips scale and fade-in dynamically relative to active target hover states.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Hover over any dock item — verify it magnifies smoothly.
3. Observe how the neighboring item to the right also scales up slightly.
