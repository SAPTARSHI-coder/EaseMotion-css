# Backdrop Filter Saturate

This submission implements a frosted glass UI panel showcase demonstrating the visual capabilities of CSS `backdrop-filter: saturate()`.

---

## Technical Details

- **Frosted Glass Integration**: Leverages `backdrop-filter` combining `blur()` and `saturate()` parameters.
- **Dynamic Backgrounds**: Uses absolute positioned color blobs that slide behind the elements to highlight the saturation values.
- **Modifiers**:
  - Normal Glass: `backdrop-filter: blur(12px)`
  - Double Saturation: `backdrop-filter: saturate(200%) blur(12px)`
  - Triple Saturation: `backdrop-filter: saturate(300%) blur(12px)`

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Watch the background blobs move behind the glass panels.
3. Observe how the cyan and purple blobs become intensely colored and vibrant when passing behind the 200% and 300% saturated glass cards.
4. Enable `prefers-reduced-motion` — verify background blob movement stops.
