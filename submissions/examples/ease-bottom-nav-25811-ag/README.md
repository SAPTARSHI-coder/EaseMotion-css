# Mobile Bottom Navigation Component

This submission implements a premium glassmorphic bottom navigation tab bar commonly used in mobile application viewports.

---

## Technical Details

- **Mobile Viewport Simulator**: Renders tab alignments inside a custom mock phone frame.
- **Micro-Animations**: Clicking tabs triggers icon translateY translations and reveals neon active indicator dots.
- **Glassmorphic Blurs**: Uses `backdrop-filter: blur(20px)` and alpha border boundaries.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click through the bottom tabs (Home, Search, Library, Profile).
3. Verify that active tabs shift colors and reveal bottom indicator dots smoothly.
